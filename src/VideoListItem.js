import React from 'react';
import VideoDetail from './VideoDetail';

const VideoListItem = (props) => {
  const {video, _onVideoSelect} = props;
  return (
    <div>
      <p onClick={() => _onVideoSelect(video)}>
        {video.snippet.title}
      </p>
    </div>
  )
}

export default VideoListItem;
