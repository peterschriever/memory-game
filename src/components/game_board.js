import React, { Component } from 'react';
import { connect } from 'react-redux';

import BoardCard from './board_card';

class GameBoard extends Component {
  render() {
    console.log(this.props.cards);
    return (
      <div>
        TODO: game board
        <BoardCard flipped={1} />
        <BoardCard />
      </div>
    );
  }
}

const mapStateToProps = ({game}) => {
  return { cards: [] };
};

export default connect(mapStateToProps, null)(GameBoard);
