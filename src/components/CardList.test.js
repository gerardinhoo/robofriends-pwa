import { shallow } from 'enzyme';
import React from 'react';
import CardList from './CardList';


it("expect to render a CardList component", () => {
  const mockRobots = [
    {
      id: 1,
      name: 'Dinho',
      username: 'Ronaldinho',
      email: 'dinho@gmail.com'

    }
  ]
  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});



