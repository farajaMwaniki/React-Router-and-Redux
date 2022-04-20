import React, { useEffect, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import SearchBar from './search_bar.jsx';
import YoutubeSearch from '../youtube-api.jsx';
import VideoPlayer from './video_player.jsx';
import VideoList from './video_list.jsx';
import { setVideos } from '../actions/video-actions.jsx';

const Youtube = (props) => {

  const dispatch = useDispatch();

  const search = (text) => {
    YoutubeSearch(text).then((videos) => {
      dispatch(setVideos(videos));
    });
  };

  // useEffect(() => {
  //   search('pixar');
  // }, []);

  const debouncedSearch = useCallback(debounce(search, 300), []);

  return (
    <div className="videos-body">
      <h1>Videos</h1>
      <SearchBar onSearchChange={debouncedSearch} />
      <div className="video-player-and-list">
        <VideoPlayer />
        <VideoList />
      </div>
    </div>
  );
};

export default Youtube;
