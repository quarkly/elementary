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
- Convenient writing media queries
- Alias ​​system
- Scaling indents and font sizes
- Support hover, focus ..etc as props
- Fully themed
- Mixins support

# Demo
https://codesandbox.io/embed/quarklyelementary-demo-jplhn

# Installation and Usage
```sh
npm i @quarkly/elementary
```
Since Elementary is based on styled-components, the interface may be familiar to you. <br>

Let's create element:
```jsx
import React from 'react';
import ReactDom from 'react-dom';
import elementary from '@quarkly/elementary';

const Box = elementary.div(['height', 'width', 'backgroundColor'], {
  effects: { hover: ':hover' },
  variant: 'boxes',
  themed: 'Box',
});

ReactDom.render(
  <Box
    width={[1, 1 / 2, 1 / 4]}
    bgc={['red', 'green', 'blue']}
    hoverBgc="black"
    height="300px"
    hoverHeight="150px"
  />,
  document.getElementById('root'),
);
```

As the first argument, we pass an array of css properties that we will use.<br>

The second argument is the configuration:

- effects - what effects can be used from jsx (hover, focus ..etc)
- variant - options for component styles from themes
- themed - default styles for a component from a theme

# Docs

- [Aliases](docs/aliases.md)
- [Theming](docs/theming.md)

# License

Licensed under MIT.