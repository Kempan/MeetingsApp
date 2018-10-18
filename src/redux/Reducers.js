import { combineReducers } from 'redux';
import { meetingsReducer } from './MeetingsRedux';

export const rootReducer = combineReducers({
  meetings: meetingsReducer
})