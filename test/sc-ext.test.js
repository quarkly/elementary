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

const Box = elementary('div')(
  { effects: { hover: ':hover' }, styles: ['color'], aliases: true, mixins: true },
  { color: 'indigo' },
);

const Empty = elementary('div')({ styles: [] });

describe('Elementary integration to SC extend', () => {
  test('extend with inline', () => {
    const tree = renderer.create(<Box hoverC="red" c="blue" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('color', 'red', {
      modifier: ':hover',
    });
  });
  test('extend without inline', () => {
    const tree = renderer.create(<Box hoverC="red" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'indigo');
    expect(tree).toHaveStyleRule('color', 'red', {
      modifier: ':hover',
    });
  });
  test('render without props', () => {
    const tree = renderer.create(<Empty />).toJSON();
    expect(tree).toBeDefined();
  });
});
