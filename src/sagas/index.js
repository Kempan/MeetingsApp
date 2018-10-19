import React from 'react';
import { AsyncStorage } from 'react-native';
import { takeLatest, all, put, call } from 'redux-saga/effects';
import { MeetingActions, MeetingTypes } from '../redux/MeetingsRedux';
import utils from '../utils';

function* getMeetings() {


  try {
    const storedId = yield call(AsyncStorage.getItem, config.userIdKey);
    const responseAllMeetings = yield call(utils.fetchMeetings, 'meeting');
    const responseBookedMeetings = yield call(utils.fetchBookedMeetings, storedId);
    console.log('saga booked meetings', responseBookedMeetings)
    // if (responseBookedMeetings.data != null) {
    // }
    yield put(MeetingActions.setBookedMeetings(responseBookedMeetings))
    yield put(MeetingActions.setMeetings(responseAllMeetings.data))
  }
  catch (error) {
    console.log(error);
  }


}

export default function* rootSaga() {
  yield all([
    takeLatest(MeetingTypes.GET_MEETINGS, getMeetings),
  ])
}