import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import SearchBar from './search_bar.jsx';
import YoutubeSearch from '../youtube-api.jsx';
import { setVideos } from '../actions/video-actions.jsx';

const Home = (props) => {
const dispatch = useDispatch();
  const navigate = useNavigate();
  const routeChange = (event) => { 
    let path = `/videos`; 
    navigate(path);
  }
  const input = '';

  const search = (text) => {
    YoutubeSearch(text).then((videos) => {
      dispatch(setVideos(videos));
    });
  };
  
  return (
    <div className="home-body">
      <h1>Welcome</h1>
      <SearchBar onSearchChange={search} />
      <button onClick={routeChange} >
        View videos
      </button>
    </div>
  )};

export default Home;