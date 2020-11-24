import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Spinner from './Spinner';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
    this.onTermSubmit('buildings');
  };

  onTermSubmit = async term => {
    const { data } = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    this.setState({
      videos: data.items,
      selectedVideo: data.items[0],
    });
  };

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo });
  };

  render() {
    return (
      <div className="ui container">
        <div className="ui grid">
          <div className="row">
            <div className="sixteen wide column">
              <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
          </div>
          <div className="row">
            <div className="eleven wide column">
              {this.state.selectedVideo ? (
                <VideoDetail video={this.state.selectedVideo} />
              ) : (
                <Spinner />
              )}
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
