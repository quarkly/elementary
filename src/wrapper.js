import { isArray } from 'lodash/fp';
import { memoize } from 'lodash';
import bootstrap from './styles';
import dict from './dict';
import clearProps from './clear-props';
import normalize from './normalize-props';

const defaultStyles = Object.keys(dict);

export const isTemplate = memoize(arg => isArray(arg));

export const makeComponent = (styled, tag, styles, config, other) => {
  const [rules, propTypes] = bootstrap(styles, config);
  let Component;
  if (config.omit) {
    Component = styled(clearProps(tag, config))(...other, ...rules);
  } else {
    Component = styled(tag)(...other, ...rules);
  }
  if (config.normalize) {
    Component = normalize(Component);
  }
  Component.propTypes = propTypes;
  if (config.name) {
    Component.displayName = config.name;
  }
  return Component;
};

export const makeElementary = styled => (tag, config = {}, ...other) => {
  const styles = config.styles || defaultStyles;
  if (isTemplate(config)) {
    return makeComponent(styled, tag, styles, {}, config);
  }
  return makeComponent(styled, tag, styles, config, other);
};

export const wrap = styled => {
  const elementary = makeElementary(styled);
  return Object.keys(styled).reduce(
    (acc, tag) => {
      acc[tag] = elementary.bind(null, tag);
      return acc;
    },
    tag => elementary.bind(null, tag),
  );
};
