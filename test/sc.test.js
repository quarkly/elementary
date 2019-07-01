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

const ElButton = elementary('button')({ styles: ['color'] });

const Box = elementary('div')({ effects: { hover: ':hover' }, styles: ['color'] });

const ComposedBox = elementary('div')({
  effects: { hover: ':hover', focus: ':focus' },
  styles: ['color'],
});

const NamedBox = elementary('div')({
  effects: { hover: ':hover', focus: ':focus' },
  styles: ['color'],
  name: 'NamedBox',
});

const ChainBox = elementary.div({
  effects: { hover: ':hover', focus: ':focus' },
  styles: ['color'],
});

const ExtendedSC = elementary(Button)({ effects: { hover: ':hover' }, styles: ['color'] });
const ExtendedEL = elementary(Box)({ effects: { hover: ':hover' }, styles: ['margin'] });
const WithIncorrectProp = elementary(Box)({ effects: { hover: ':hover' }, styles: ['fake'] });

const ZeroConfig = elementary.div();
const ZeroConfigWithTemplate = elementary.div`
  color: red;
`;

const BoxWithSizeAndEffects = elementary.div({ effects: { hover: ':hover' } });

const BoxWithOmit = elementary.div({
  effects: { hover: ':hover' },
  omit: ['role'],
  normalize: true,
});

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
    // expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('margin', '100px');
  });
  test('with incorrect prop', () => {
    const tree = renderer.create(<WithIncorrectProp hoverC="red" c="blue" m="100px" />).toJSON();
    expect(tree).toBeDefined();
  });
  test('zero-config component', () => {
    const tree = renderer.create(<ZeroConfig c="blue" m="100px" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'blue');
    expect(tree).toHaveStyleRule('margin', '100px');
  });
  test('zero-config component with template', () => {
    const tree = renderer.create(<ZeroConfigWithTemplate m="100px" />).toJSON();
    expect(tree).toHaveStyleRule('color', 'red');
    expect(tree).toHaveStyleRule('margin', '100px');
  });
  test('compoosed rule', () => {
    const tree = renderer.create(<ZeroConfigWithTemplate size="20px" />).toJSON();
    expect(tree).toHaveStyleRule('height', '20px');
    expect(tree).toHaveStyleRule('width', '20px');
  });
  test('compoosed rule with media query', () => {
    const tree = renderer.create(<ZeroConfigWithTemplate size={['20px', '30px']} />).toJSON();
    expect(tree).toHaveStyleRule('height', '30px', {
      media: 'screen and (min-width: 52em)',
    });
    expect(tree).toHaveStyleRule('width', '30px', {
      media: 'screen and (min-width: 52em)',
    });
    expect(tree).toHaveStyleRule('height', '20px');
    expect(tree).toHaveStyleRule('width', '20px');
  });
  test('compoosed rule & effect', () => {
    const tree = renderer.create(<BoxWithSizeAndEffects hoverSize="22px" />).toJSON();
    expect(tree).toHaveStyleRule('height', '22px', {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('width', '22px', {
      modifier: ':hover',
    });
  });
  test('compoosed rule & effect & media', () => {
    const tree = renderer.create(<BoxWithSizeAndEffects hoverSize={['22px', '30px']} />).toJSON();
    expect(tree).toHaveStyleRule('height', '30px', {
      media: 'screen and (min-width: 52em)',
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('width', '30px', {
      media: 'screen and (min-width: 52em)',
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('height', '22px', {
      modifier: ':hover',
    });
    expect(tree).toHaveStyleRule('width', '22px', {
      modifier: ':hover',
    });
  });
  test('config name to displayName', () => {
    expect(NamedBox.displayName).toStrictEqual('NamedBox');
  });
  test('omit props from html element', () => {
    const tree = renderer
      // eslint-disable-next-line jsx-a11y/aria-role
      .create(<BoxWithOmit size={['22px', '30px']} role="test" passrole="test" />)
      .toJSON();
    expect(tree.props.role).toBeUndefined();
    expect(tree.props.passrole).toBeDefined();
  });
  test('sc component with "as" bool props not thrown', () => {
    const tree = renderer
      // eslint-disable-next-line jsx-a11y/aria-role
      .create(<BoxWithOmit as />)
      .toJSON();
    expect(tree).toBeDefined();
  });
});
