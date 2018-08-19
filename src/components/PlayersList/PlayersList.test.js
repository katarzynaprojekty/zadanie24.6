import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<PlayersList />);
});

it('renders correct number of players', () => {
  const players = [
    {
        name: 'Naomi Nagata',
        score: 5
    },
    {
        name: 'James Holden',
        score: 0
    }
  ]
  const playerComponent = shallow(<PlayersList players={players} />);
  console.log(playerComponent.debug());
  const expectedPlayersNumber = playerComponent.find(Player).length;
   expect(expectedPlayersNumber).toEqual(2);
});