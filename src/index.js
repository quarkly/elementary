import SC from 'styled-components';
import bootstrap from './styles';

const makeElementary = styled => (tag, styles, config = {}) => {
  const [rules, propTypes] = bootstrap(styles, config);
  const Component = styled(tag)(...rules);
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

export default wrap(SC);
