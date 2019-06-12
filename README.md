<p>
  <img width="130" src="docs/elementary-logo.jpg">
</p>
<h1> Elementary </h1>
<p>
  <b>Elementary is a library for creating atomic react components. 
Inspired by <a href="http://tachyons.io/" target="_blank">tachyons</a> and <a href="https://github.com/styled-system/styled-system" target="_blank">styled-system</a>.</b>
</p>
<br>

[![Build Status][badge]][travis]
[![Coverage][coverage-badge]][coverage]
[![Version][version-badge]][npm]
![MIT License][license]

<!-- ![size][] -->

[badge]: https://flat.badgen.net/travis/quarkly/elementary/master
[travis]: https://travis-ci.com/quarkly/elementary
[coverage-badge]: https://flat.badgen.net/codecov/c/github/quarkly/elementary
[coverage]: https://codecov.io/github/quarkly/elementary
[version-badge]: https://flat.badgen.net/npm/v/@quarkly/elementary
[npm]: https://npmjs.com/package/@quarkly/elementary
[license]: https://flat.badgen.net/badge/license/MIT/blue

<!-- [size]: https://flat.badgen.net/packagephobia/min/@quarkly/elementary -->

# Features

- Any css properties - props
- Simple writing media queries
- Alias ​​system
- Scaling indents and font sizes
- Support hover, focus ..etc as props
- Fully themed
- Mixins support

# Demo

[Codesandbox](https://codesandbox.io/embed/quarklyelementary-demo-jplhn)

# Installation and Usage

```sh
npm i @quarkly/elementary
```

```sh
npm i styled-components
```

Let's create element:

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import elementary from '@quarkly/elementary';

const Box = elementary.div();

ReactDom.render(
  <Box width={[1, 1 / 2, 1 / 4]} bgc={['red', 'green', 'blue']} height="300px" />,
  document.getElementById('root'),
);
```

Since Elementary is based on styled-components, the interface may be familiar to you. <br>

```jsx
const Box = elementary.div`
  border: 2px solid tomato;
`;
```

# Advanced usage

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import elementary from '@quarkly/elementary';

const Box = elementary.div({
  effects: {
    hover: ':hover',
  },
  variant: 'boxes',
  rules: ['height', 'backgroundColor'],
});

ReactDom.render(
  <Box width={[1, 1 / 2, 1 / 4]} bgc={['red', 'green', 'blue']} height="300px" />,
  document.getElementById('root'),
);
```

First argument is the configuration:

- rules - an array of css properties that we will use.
- effects - what effects can be used from jsx (hover, focus ..etc)
- variant - options for component styles from themes
- name - componentName and default styles for this component from a theme

# Docs

- [Aliases](docs/aliases.md)
- [Theming](docs/theming.md)

# License

Licensed under MIT.
