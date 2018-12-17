import { shallow } from "enzyme";
import React from 'react';
import Card from './Card';



it('expect to render a card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
})