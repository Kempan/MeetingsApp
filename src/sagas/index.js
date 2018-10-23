import { AsyncStorage } from 'react-native';
import { takeLatest, all, put, call } from 'redux-saga/effects';
import { MeetingActions, MeetingTypes } from '../redux/MeetingsRedux';
import utils from '../utils';

function* getMeetings() {
  try {
    const storedId = yield call(AsyncStorage.getItem, config.userIdKey);

    const responseAllMeetings = yield call(utils.fetchMeetings, 'meeting');
    const responseBookedMeetings = yield call(utils.fetchBookedMeetings, storedId);

    yield put(MeetingActions.setBookedMeetings(responseBookedMeetings));
    yield put(MeetingActions.setMeetings(responseAllMeetings.data));

    yield put(MeetingActions.getMeetingsSuccess());
  }
  catch (error) {
    yield put(MeetingActions.getMeetingsFailure());
    console.log(error);
  }
}

function* setUser() {
  try {
    const userId = yield call(AsyncStorage.getItem, config.userIdKey);
    const user = yield call(utils.fetchUser, userId);

    yield put(MeetingActions.setUser(user));
  }
  catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(MeetingTypes.GET_MEETINGS, getMeetings),
    takeLatest(MeetingTypes.SET_USER, setUser),
  ])
}