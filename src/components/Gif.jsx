import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    return this.props.id;
  }

  render() {
    const src = `https://media3.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} alt="yoda music" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;