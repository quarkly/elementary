# Theming

Themes is intended for:

- breakpoints
- text / background colors
- margin / padding scale
- fonts scale
- variants
- mixins

# Demo

https://codesandbox.io/s/quarklyelementary-demo-vml6f

# Theme example

```js
const theme = {
  breakpoints: ['40em', '52em', '64em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  colors: {
    blue: '#326ada',
    pink: '#ff0060',
    gray: '#a19c9c',
  },
  mixins: {
    rotate: {
      '@keyframes spin': {
        '100%': {
          '-webkit-transform': 'rotate(360deg)',
          transform: 'rotate(360deg)',
        },
      },
      animation: 'spin 4s linear infinite',
    },
  },
};
```

# Code

```jsx
import React from 'react';
import ReactDom from 'react-dom';
import elementary from '@quarkly/elementary';
import { ThemeProvider } from 'styled-components';

const theme = { ... };

const Box = elementary.div(['height', 'width', 'backgroundColor', 'margin'], {
  effects: { hover: ':hover' },
  variant: 'boxes',
  themed: 'Box',
});

ReactDom.render(
  <ThemeProvider theme={theme}>
    <Box
      width={[1, 1 / 2, 1 / 4]}
      bgc={['pink', 'gray', 'blue']}
      hoverBgc="blue"
      height="300px"
      hoverHeight="150px"
      m={4}
      rotate
    />
  </ThemeProvider>,
  document.getElementById('root'),
);
```
