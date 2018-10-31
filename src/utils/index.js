import config from '../config';
import functions from '../functions';
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

  fetchUserMadeMeetings: (userId) => {
    return Turbo({ site_id: config.turboAppId }).fetch('meeting', { userId: userId })
      .then(resp => {
        return resp;
      })
      .catch(err => {
        console.log(err);
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
      .then(user => {
        const newCredentials = Object.assign(user);
        newCredentials['firstName'] = functions.upperCase(user.firstName);
        newCredentials['lastName'] = functions.upperCase(user.lastName);
        newCredentials['email'] = functions.upperCase(user.email);
        newCredentials['address'] = functions.upperCase(user.address);

        return newCredentials;
      })
      .catch(err => {
        console.log(err);
      })
  },

  updateUser(userId, cred) {
    return Turbo({ site_id: config.turboAppId }).updateUser(userId, cred)
      .then(updatedUser => {
        return updatedUser;
      })
      .catch(err => {
        console.log(err);
      })
  }
}