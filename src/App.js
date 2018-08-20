import React, { Component } from 'react';
import './App.css';
import PlayersList from './components/PlayersList/PlayersList';
import AddPlayer from './components/AddPlayer/AddPlayer';

class App extends Component {
 constructor() {
   super();

   this.state = {
     players: [
      //  {
      //    name: 'Kunegunda',
      //    score: 5,
      //  },
      //  {
      //    name: 'Antoś',
      //    score: 0,
      //  }
     ]
   }
 }

  onScoreUpdate = (playerIndex, scoreChange) => {
    this.setState({
      players: this.state.players.map((player, index) => {
        if (index === playerIndex) {
          return { ...player, score: player.score + scoreChange };
        }
        return player;
      })
    })
  }

  onPlayerAdd = (playerName) => {
    const newPlayer = {
      name: playerName,
      score: 0,
    }
    this.setState({
      players: [...this.state.players, newPlayer]
    })
  }

  onPlayerRemove = (playerIndex) => {
    this.setState({
      players: this.state.players.filter((__, index ) => index !== playerIndex)
    });
    console.log(this.state.players);
  };
  
//Brak pomysłu //czy potrzebne?
  // onPlayerUpdate = (playerIndex) => {
  //   this.setState({
  //     players: this.state.players.map((player, index) => {
  //       if (index === playerIndex) {
  //         return { ...player};
  //       }
  //       return player;
  //     })
  //   })
  // }

  render() {
    return (
      <div className="App">
        <h1 className="App_title">Scorekeeper</h1>
        
        <AddPlayer onPlayerAdd={this.onPlayerAdd} />
        <PlayersList players={this.state.players} onScoreUpdate={this.onScoreUpdate} onPlayerRemove={this.onPlayerRemove} onPlayerUpdate={this.onPlayerUpdate} />
      </div>
    );
  }
}

export default App;
