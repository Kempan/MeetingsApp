import { combineReducers } from 'redux';
import { setMeetings } from './MeetingsRedux';

export const rootReducer = combineReducers({
  meetings: setMeetings
})