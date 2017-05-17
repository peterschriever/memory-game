import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  openCard
} from '../actions/index';

class BoardCard extends Component {
  render() {
    const colors = this.props.colors;
    const cardObj = this.props.cards[this.props.row][this.props.col];

    // case 'closed':
    let displayChar = this.props.hiddenChar;
    let bgColor = colors.closed;
    switch (cardObj.state) {
      case 'opened':
        displayChar = cardObj.char;
        bgColor = colors.opened;
        break;
      case 'paired':
        displayChar = cardObj.char;
        bgColor = colors.paired;
        break;
    }
    console.log('render:', cardObj);

    const cardStyle = {
      width: 50,
      height: 50,
      margin: 5,
      paddingTop: 10,
      paddingBottom: 10,
      display: 'inline-block',
      background: bgColor
    }
    return (
      <div style={cardStyle}
        onClick={() => this.props.openCard(this.props.row, this.props.col)}>
        {displayChar}
      </div>
    );
  }
};

const mapStateToProps = ({colors, game}) => {
  return {
    colors: colors,
    cards: game.board.cards,
    hiddenChar: game.board.char,
    // make sure to update state when game object changes
    hash: JSON.stringify(game).hashCode()
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      openCard
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardCard);
