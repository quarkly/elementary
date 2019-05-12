import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import elementary from '../src';

const Button = styled.button`
  color: red;
`;

test('sc setup works', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'red');
});

const [ElButton] = elementary(styled)('button')(['color']);

describe('Elementary integration to SC', () => {
  test('base', () => {
    const tree = renderer.create(<ElButton color="red" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'red');
  });
  test('media rules', () => {
    const tree = renderer.create(<ElButton color={['red', 'blue']} />).toJSON();
    expect(tree).toHaveStyleRule('color', 'red', {
      media: 'screen and (min-width: 40em)',
    });
    expect(tree).toHaveStyleRule('color', 'blue', {
      media: 'screen and (min-width: 52em)',
    });
  });
});
