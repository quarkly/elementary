import bootstrap from './styles';
// console.log(makeRulesWithEffect(styles, config)[0]) || makeRulesWithEffect(styles, config)[0]
const makeElementary = styled => (tag, styles, config = {}) => {
  const [makeStyles, propTypes] = bootstrap(styles, config);
  const Component = styled(tag)(makeStyles);
  return [Component, propTypes];
};

const witchStyled = styled => {
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

export default witchStyled;
