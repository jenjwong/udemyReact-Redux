import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const {videos, _onVideoSelect} = props;
  return (
    <ul>
      {videos.map((video) => <li> <VideoListItem video={video} _onVideoSelect={_onVideoSelect}/></li>)}
    </ul>
  )
};

export default VideoList;
