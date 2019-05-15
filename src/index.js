import SC from 'styled-components';
import bootstrap from './styles';

const makeElementary = styled => (tag, styles, config = {}) => {
  const [rules, propTypes] = bootstrap(styles, config);
  const Component = styled(tag)(...Object.values(rules));
  return [Component, propTypes];
};

export const wrap = styled => {
  const elementary = makeElementary(styled);
  const res = Object.keys(styled).reduce(
    (acc, tag) => {
      acc[tag] = elementary.bind(null, tag);
      return acc;
    },
    tag => elementary.bind(null, tag),
  );
  return res;
};

export default wrap(SC);
