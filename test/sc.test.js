import React from 'react';
import styled from 'styled-components';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import elementary, { wrap } from '../src';

const Button = styled.button`
  color: red;
`;

test('sc setup works', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toHaveStyleRule('color', 'red');
});

const ElButton = wrap(styled)('button')(['color']);

const Box = elementary('div')(['color'], { effects: { hover: ':hover' } });
const ComposedBox = elementary('div')(['color'], {
  effects: { hover: ':hover', focus: ':focus' },
});
const ChainBox = elementary.div(['color'], { effects: { hover: ':hover', focus: ':focus' } });
const ExtendedSC = elementary(Button)(['color'], { effects: { hover: ':hover' } });
const ExtendedEL = elementary(Box)(['margin'], { effects: { hover: ':hover' } });
const WithIncorrectProp = elementary(Box)(['fake'], { effects: { hover: ':hover' } });

describe('Elementary integration to SC', () => {
  test('base', () => {
    const tree = renderer.create(<ElButton c="red" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'red');
  });
  test('media rules', () => {
    const tree = renderer.create(<ElButton c={['red', 'blue']} />).toJSON();
    expect(tree).toHaveStyleRule('color', 'red');
    expect(tree).toHaveStyleRule('color', 'blue', {
      media: 'screen and (min-width: 52em)',
    });
  });
  test('effect', () => {
    const tree = renderer.create(<Box hoverC="red" c="blue" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('color', 'red', {
      modifier: ':hover',
    });
  });
  test('composed effect', () => {
    const tree = renderer.create(<ComposedBox hoverC="red" c="blue" focusC="tomato" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('color', 'red', {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('color', 'tomato', {
      modifier: ':focus',
    });
  });
  test('media effect', () => {
    const tree = renderer.create(<Box hoverC={['red', 'green']} c="blue" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('color', 'red', {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('color', 'green', {
      media: 'screen and (min-width: 52em)',
      modifier: ':hover',
    });
  });
  test('chain call from elemetary', () => {
    const tree = renderer.create(<ChainBox hoverC="red" c="blue" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
  });
  test('extend from sc component', () => {
    const tree = renderer.create(<ExtendedSC hoverC="red" c="blue" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
  });
  test('extend from el component', () => {
    const tree = renderer.create(<ExtendedEL hoverC="red" c="blue" m="100px" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('margin', '100px');
  });
  test('with incorrect prop', () => {
    const tree = renderer.create(<WithIncorrectProp hoverC="red" c="blue" m="100px" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
  });
});
