import React from 'react';
import { useDispatch } from 'react-redux';
import { selectedVideo } from '../actions/video-actions.jsx';

const VideoListItem = (props) => {
  
  const dispatch = useDispatch();
  const imgUrl = props.video.snippet.thumbnails.default.url;

  return (
    <div className="list-item" onClick={() => dispatch(selectedVideo(props.video))}>
      <img src={imgUrl} alt="video" />
      <div>{props.video.snippet.title}</div>
    </div>
  );
};

export default VideoListItem;