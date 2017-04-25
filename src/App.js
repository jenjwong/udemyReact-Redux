import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: 'brie',
      videos: [],
      selectedVideo: ''
    }
    this._onVideoSelect = this._onVideoSelect.bind(this);
  }

  componentDidMount() {
    this._getVideos()
  }

  _getVideos() {
    YTSearch({key: 'AIzaSyDC6TUz6AdJTEkZEmtfLs7X_4MBvT8rH9E', term: this.state.searchTerm}, (videos) => { this.setState({videos, selectedVideo: videos[0]});
    });
  }

  _onVideoSelect(video) {
    console.log(video, 'video')
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList videos={this.state.videos} _onVideoSelect={this._onVideoSelect} />
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}

export default App;
