import React, { Component } from 'react';

export default class BoardCard extends Component {
  constructor(props) {
    super();
    // console.log(props);
    this.flipped = '';
    if (props.flipped) {
      this.flipped = 'flipped';
    }
  }

  render() {
    return (
      <div>
        This is a {this.flipped} single card!
      </div>
    );
  }
};
