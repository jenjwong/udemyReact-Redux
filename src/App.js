import React, { Component } from 'react';
import logo from './logo.svg';
import SearchBar from './SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import {debounce} from 'lodash';


import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: '',
      videos: [],
      selectedVideo: ''
    }
    this._onVideoSelect = this._onVideoSelect.bind(this);
    this._onVideoSearch = debounce(this._onVideoSearch.bind(this), 100);
  }

  componentDidMount() {
    this._onVideoSearch('brie')
  }

  _onVideoSearch(searchTerm) {
    YTSearch({key: 'AIzaSyDC6TUz6AdJTEkZEmtfLs7X_4MBvT8rH9E', term: searchTerm}, (videos) => { this.setState({videos, selectedVideo: videos[0]});
    });
  }

  _onVideoSelect(video) {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="App">
        <SearchBar _onVideoSearch={this._onVideoSearch}/>
        <VideoList videos={this.state.videos} _onVideoSelect={this._onVideoSelect} />
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}

export default App;
