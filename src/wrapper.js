import bootstrap from './styles';
import dict from './dict';

const defaultStyles = Object.keys(dict);

export const isTemplate = arg => typeof arg === 'string';
export const isElConfig = arg => typeof arg === 'object';

export const makeElementary = styled => (tag, config = {}, ...other) => {
  const styles = config.styles || defaultStyles;
  const [rules, propTypes] = bootstrap(styles, config);
  const Component = styled(tag)(...rules, ...other);
  Component.propTypes = propTypes;
  return Component;
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
