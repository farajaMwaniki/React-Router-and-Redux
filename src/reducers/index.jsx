import { combineReducers } from 'redux';
import VideoReducer from './video_reducer.jsx';

const rootReducer = combineReducers({
  video: VideoReducer,
});

export default rootReducer;