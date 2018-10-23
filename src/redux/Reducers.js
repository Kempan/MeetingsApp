import { combineReducers } from 'redux';
import { meetingsReducer } from './MeetingsRedux';
import { userReducer } from './SetUserRedux';


export const rootReducer = combineReducers({
  meetings: meetingsReducer,
  user: userReducer
})