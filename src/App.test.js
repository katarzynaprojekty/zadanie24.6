import React from 'react';
import { shallow } from 'enzyme';
import PlayersList from '../src/components/PlayersList/PlayersList';
import AddPlayer from '../src/components/AddPlayer/AddPlayer';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should add a new player to the app', () => {
  const appComponent = shallow(<App />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');

  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});

