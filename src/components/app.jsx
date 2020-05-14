import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "OkJat1YNdoD3W"
    };
  }

  search = (query) => {
    giphy("1SN7HIsalLCp01QgmLmq3eGiBHD46dDS").search({
      q: query,
      rating: 'g',
      limit: 15
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  chooseGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar
            searchFunction={this.search} />
          <div className="selected-gif">
            <Gif
              id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList
            gifs={this.state.gifs}
            selectGif={this.chooseGif} />
        </div>
      </div>
    );
  }
}

export default App;
