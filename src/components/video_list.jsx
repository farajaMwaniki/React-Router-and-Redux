import React from 'react';
import { connect } from 'react-redux';
import VideoListItem from './video_list_item.jsx';

const mapStateToProps = (reduxState) => ({
  videos: reduxState.video.list,
});

const VideoList = (props) => {
  
  const videoItems = props.videos.map((video) => {
    return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />;
  });
  return (
    <div className="video-list">
      {videoItems}
    </div>
  );
};

export default connect(mapStateToProps, null)(VideoList);