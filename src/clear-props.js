import React from 'react';
import { get, merge, isArray } from 'lodash/fp';
import { hashPropsWithAliases } from './dict';
import normalizeProps from './normalize-props';

export const omit = (props, omitMap) =>
  Object.keys(props).reduce((acc, prop) => {
    if (omitMap[prop]) {
      return acc;
    }
    acc[prop] = props[prop];
    return acc;
  }, {});

export const hashify = array =>
  array.reduce((acc, item) => {
    acc[item] = true;
    return acc;
  }, {});

export const getOmitPropsFromConfig = config => {
  const uMap = get('omit', config);
  if (isArray(uMap)) {
    return hashify(uMap);
  }
  return uMap;
};

export const createOmitMap = config => {
  const userOmitMap = getOmitPropsFromConfig(config);
  return merge(userOmitMap, hashPropsWithAliases);
};

export default (Tag, config) =>
  React.forwardRef((props, ref) =>
    React.createElement(Tag, {
      ref,
      ...omit(normalizeProps(props), createOmitMap(config)),
    }),
  );
