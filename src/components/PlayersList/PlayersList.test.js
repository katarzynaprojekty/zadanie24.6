import PlayersList from './PlayersList';
import Player from '../Player/Player';
import React from 'react';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />);
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

  const expectedPlayersNumber = playerComponent.find(Player).length;
  
  expect(expectedPlayersNumber).toEqual(2);
});

it('should call on ScoreUpdate', () => {
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
  const mockedOnScoreUpdate = jest.fn();
  const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
  
  const firstPlayer = playerComponent.find(Player).first();
  const secondPlayer = playerComponent.find(Player).last();

  const onPlayerScoreChange = secondPlayer.prop('onPlayerScoreChange');
  
  onPlayerScoreChange(5);
  expect(mockedOnScoreUpdate).toBeCalledWith(1, 5);
});
