import config from '../config';
import Turbo from 'turbo360';

export default {
  fetchMeetings: (endpoint) => {
    return fetch(`${config.baseUrl}/${endpoint}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      }
    })
      .then(response => {
        return response.json();
      })
  },

  fetchBookedMeetings: (userId) => {
    return Turbo({ site_id: config.turboAppId }).fetch('meeting', { attendants: userId })
      .then(resp => {
        return resp;
      })
      .catch(err => {
        console.log(err.message);
      })
  },

  createMeeting: (endpoint, credentials) => {
    return fetch(`${config.baseUrl}/${endpoint}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(response => {
        return response.json();
      })
  },

  fetchUser: (userId) => {
    return Turbo({ site_id: config.turboAppId }).fetchOne('user', userId)
      .then(resp => {
        return resp;
      })
      .catch(err => {
        console.log(err);
      })
  }
}