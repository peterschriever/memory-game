import React, { Component } from 'react';

import BoardCard from './board_card';

export default class GameBoardRow extends Component {

  render() {
    const rowCards = this.props.row.map((col, i) => {
      return (
        <BoardCard key={i} col={col.col} row={col.row} />
      );
    });
    return (
      <div>
        {rowCards}
        <br />
      </div>
    );
  }

};
