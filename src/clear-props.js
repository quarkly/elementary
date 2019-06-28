import React from 'react';
import { hashPropsWithAliases } from './dict';

export const omit = (props, omitMap) =>
  Object.keys(props).reduce((acc, prop) => {
    if (omitMap[prop]) {
      return acc;
    }
    acc[prop] = props[prop];
    return acc;
  }, {});

export default Tag =>
  React.forwardRef((props, ref) =>
    React.createElement(Tag, {
      ref,
      ...omit(props, hashPropsWithAliases),
    }),
  );
