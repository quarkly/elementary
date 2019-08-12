import Enzyme, { render } from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { Flex, Box } from 'rebass/styled-components';

import { Flex as ElFlex, Box as ElBox } from './flex-box';

const Elementary = () => (
  <ElFlex>
    <ElBox m={3} />
  </ElFlex>
);

const Rebass = () => (
  <Flex>
    <Box m={3} />
  </Flex>
);

Enzyme.configure({ adapter: new Adapter() });

const banchIt = (calls, fn) => {
  const dateStart = new Date();
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < calls; i++) {
    fn();
  }
  return new Date() - dateStart;
};

it('Pure render time', () => {
  const rabass = banchIt(200, () => render(<Rebass />));
  const elementary = banchIt(200, () => render(<Elementary />));
  // console.log('Rebass:', rabass);
  // console.log('Elementary:', elementary);
  expect(rabass).toBeGreaterThan(elementary);
});
