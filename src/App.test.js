import React from 'react';
import { shallow} from 'enzyme';
import PlayersList from '../src/components/PlayersList/PlayersList';
import AddPlayer from '../src/components/AddPlayer/AddPlayer';
import App from './App';

const playersToTest = [
  {
    name: 'Maciej Kościelniak',
    score: 5
  },
  {
    name: 'Oliwia Pawłowska',
    score: 0
  },
  {
    name: 'Adam Kowasz',
    score: 4
  },
  {
    name: 'Andrzej Kowalski',
    score: 2
  }
]

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

// it('should remove a player when remove button is clicked', () => {
//   const appComponent = shallow(<App />);

//   const players = playersToTest;
//   appComponent.setState({ players });

//   const removeButton = appComponent.find('.Player__button-remove').at(0);
//   console.log(removeButton); // jest coś źle!!!!!!!!!!!

//   removeButton.simulate('click');

//   const playersAfterUpdate = appComponent.state('players');

//   expect(playersAfterUpdate.length).toEqual(playersToTest.length -1 );

// });


