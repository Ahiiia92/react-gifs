import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "OkJat1YNdoD3W"
    };
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
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
          <p className="copyright">Powered by GIPHY</p>
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
