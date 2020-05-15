import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      return this.props.selectGif(this.props.id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media3.giphy.com/media/${id}/giphy.gif`;
    return (
      <img src={src} alt="yoda music" className="gif" onClick={this.handleClick}/>
    );
  }
}

export default Gif;
