import config from '../config';
import { AsyncStorage } from 'react-native';

export default {
  fetchUserMeetings: () => {
    return AsyncStorage.getItem(config.userIdKey)
      .then(key => {
        this.turbo.fetch('Meeting', { attendants: key })
          .then(data => {
            this.setState({
              meetings: data,
              loading: false,
            })
          })
          .catch(err => {
            console.log(err);
            this.setState({
              loading: false
            })
          })
      })
      .catch(err => {
        this.setState({
          loading: false
        })
        console.log(err.message);
      })
  }
}