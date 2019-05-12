import { makeRulesWithEffect } from './styles';

const makeElementary = styled => (tag, styles, config) =>
  styled(tag)(makeRulesWithEffect(styles, config));

const witchStyled = styled => {
  const elementary = makeElementary(styled);
  return Object.keys(styled).reduce((acc, tag) => {
    acc[tag] = elementary.bind(null, tag);
    return acc;
  }, elementary);
};

export default witchStyled;
