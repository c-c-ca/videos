import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    const {
      data: { items },
    } = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({ videos: items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <p>I have {this.state.videos.length} videos.</p>
      </div>
    );
  }
}

export default App;
