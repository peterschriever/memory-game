import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardCard from './board_card';
import GameBoardRow from './game_board_row';

class GameBoard extends Component {
  renderCards(cards) {
    return cards.map((row, i) => {
      return (
        <GameBoardRow key={i} row={row} />
      );
    });
  }

  renderNoCards() {
    return (
      <span>Start a game to generate the board..</span>
    );
  }

  render() {
    const boardStyle = {
      background: '#ccc',
      padding: 15,
      marginTop: 10,
      marginLeft: 80,
      width: '60%'
    };
    return (
      <div style={boardStyle}>
        { this.props.cards.length == 0
          ? this.renderNoCards()
          : this.renderCards(this.props.cards) }
      </div>
    );
  }
}

const mapStateToProps = ({game}) => {
  return { cards: game.board.cards, hash: JSON.stringify(game).hashCode() };
};

export default connect(mapStateToProps)(GameBoard);
