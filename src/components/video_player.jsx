import React from 'react';
import { useSelector } from 'react-redux';

const VideoPlayer = () => {
  const video = useSelector((state) => state.video.selected);

  if (!video) {
    return <div>Loading...</div>;
  } else {
    console.log(video);
    const { videoId } = video.id;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div id="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} title="video-player" />
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
};

export default VideoPlayer;