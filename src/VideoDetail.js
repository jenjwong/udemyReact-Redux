import React from 'react';

const VideoDetail = (props) => {
  const {video} = props;
  console.log(video)
  if (!video) {
    return <div>Videos Loading</div>
  }
  const URL = `https://www.youtube.com/embed/${video.Id}`;
  return (
    <div>
      <iframe src={URL} frameborder="0"></iframe>
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  )
};

export default VideoDetail;
