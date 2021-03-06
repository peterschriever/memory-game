import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderGameInfo from './header_game_info';
import GameBoard from './game_board';
import SideBar from './sidebar';

export default class App extends Component {
  render() {    
    return (
      <div>
        <header>
          <h2>Javascript memory</h2>
          <HeaderGameInfo />
        </header>
        <div id="main">
          <GameBoard />
          <SideBar />
        </div>
      </div>
    );
  }
}
