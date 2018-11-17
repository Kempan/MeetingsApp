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
    return new Promise((resolve, reject) => {
      Turbo({ site_id: config.turboAppId }).fetchOne('user', userId)
        .then(user => {
          const newCredentials = Object.assign(user);
          newCredentials['firstName'] = functions.upperCase(user.firstName);
          newCredentials['lastName'] = functions.upperCase(user.lastName);
          newCredentials['email'] = functions.upperCase(user.email);
          newCredentials['address'] = functions.upperCase(user.address);

          resolve(user);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        })
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
  },

  createComment(meetingId, comment, fromUser) {
    console.log(fromUser)
    return Turbo({ site_id: config.turboAppId }).create('comment', { text: comment, subject: fromUser.id, title: meetingId })
      .then(resp => {
        return resp;
      })
      .catch(err => {
        console.log(err);
      })

    //   return fetch(`${config.baseUrl}/create/comment/${meetingId}`, {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'content-type': 'application,json'
    //     },
    //     body: JSON.stringify(newComment)
    //   })
    //     .then(resp => {
    //       return resp.json();
    //     })
  }
}