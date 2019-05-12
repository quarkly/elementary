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

const el = elementary(styled);

const [Box] = el('div')(['color'], { effects: { hover: ':hover' } });
const [ComposedBox] = el('div')(['color'], { effects: { hover: ':hover', focus: ':focus' } });
const [ChainBox] = el.div(['color'], { effects: { hover: ':hover', focus: ':focus' } });
const [ExtendedSC] = el(Button)(['color'], { effects: { hover: ':hover' } });
const [ExtendedEL] = el(Box)(['margin'], { effects: { hover: ':hover' } });

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
  test('effect', () => {
    const tree = renderer.create(<Box hoverColor="red" color="blue" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('color', 'red', {
      modifier: ':hover',
    });
  });
  test('composed effect', () => {
    const tree = renderer
      .create(<ComposedBox hoverColor="red" color="blue" focusColor="tomato" />)
      .toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('color', 'red', {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('color', 'tomato', {
      modifier: ':focus',
    });
  });
  test('media effect', () => {
    const tree = renderer.create(<Box hoverColor={['red', 'green']} color="blue" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('color', 'red', {
      media: 'screen and (min-width: 40em)',
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('color', 'green', {
      media: 'screen and (min-width: 52em)',
      modifier: ':hover',
    });
  });
  test('chain call from elemetary', () => {
    const tree = renderer.create(<ChainBox hoverColor="red" color="blue" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
  });
  test('extend from sc component', () => {
    const tree = renderer.create(<ExtendedSC hoverColor="red" color="blue" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
  });
  test('extend from el component', () => {
    const tree = renderer.create(<ExtendedEL hoverColor="red" color="blue" m="100px" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('margin', '100px');
  });
});
