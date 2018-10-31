import { AsyncStorage } from 'react-native';
import { takeLatest, all, put, call } from 'redux-saga/effects';
import { MeetingActions, MeetingTypes } from '../redux/MeetingsRedux';
import { UserActions, UserTypes } from '../redux/SetUserRedux';
import utils from '../utils';

function* getMeetings() {
  try {
    const storedId = yield call(AsyncStorage.getItem, config.userIdKey);

    const responseAllMeetings = yield call(utils.fetchMeetings, 'meeting');
    const responseBookedMeetings = yield call(utils.fetchBookedMeetings, storedId);
    const responseCreatedMeetings = yield call(utils.fetchUserMadeMeetings, storedId);

    yield put(MeetingActions.setMeetings(responseAllMeetings.data));
    yield put(MeetingActions.setBookedMeetings(responseBookedMeetings));
    yield put(MeetingActions.setCreatedMeetings(responseCreatedMeetings));

    yield put(MeetingActions.getMeetingsSuccess());
  }
  catch (error) {
    yield put(MeetingActions.getMeetingsFailure());
    console.log(error);
  }
}

function* getUser() {
  try {
    const userId = yield call(AsyncStorage.getItem, config.userIdKey);
    const user = yield call(utils.fetchUser, userId);
    console.log('User id in setUser saga: ' + userId);
    yield put(UserActions.setUser(user));
  }
  catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(MeetingTypes.GET_MEETINGS, getMeetings),
    takeLatest(UserTypes.GET_USER, getUser),
  ])
}