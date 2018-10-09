import config from '../config';

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
  }
}