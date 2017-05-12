import React, { Component } from 'react';
import { CompactPicker } from 'react-color';

export default class MyColorPicker extends Component {
  state = {
    displayColorPicker: false
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  }

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  }

  render() {
    const popover = {
      position: 'absolute',
      zIndex: '2',
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px',
    }
    return (
      <div>
        <button style={{'background': this.props.color}} onClick={this.handleClick} className="btn btn-default">
          {this.props.title}
        </button>
        { this.state.displayColorPicker ?
        <div style={popover}>
          <div style={cover} onClick={this.handleClose} />
            <CompactPicker color={this.props.color} onChangeComplete={ this.props.callback }/>
          </div> : null }
        </div>
    );
  }
}
