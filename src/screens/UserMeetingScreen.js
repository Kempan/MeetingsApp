import React from 'react';
import { View, StyleSheet, ScrollView, FlatList, AsyncStorage, Text } from 'react-native';
import { Meeting } from '../components';
import config from '../config';
import Turbo from 'turbo360';
import functions from '../functions';


export default class UserMeetingScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      meetings: [],
      loading: true
    }

    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {
    this.fetchMeetings();
  }

  fetchMeetings = () => {
    AsyncStorage.getItem(config.userIdKey)
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

  navigateMeeting(item) {
    this.props.navigation.navigate('MeetingScreen', { id: item.id, updateScreen: this.fetchMeetings.bind(this) });
  }

  render() {

    return (

      <ScrollView style={styles.container}>
        {this.state.meetings.length <= 0 && !this.state.loading ?
          <View style={{ alignItems: 'center' }}><Text style={{ fontWeight: 'bold' }}>Du har inga möten bokade</Text></View>
          :
          <View style={{ paddingBottom: 20 }}>
            <FlatList
              data={this.state.meetings}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
                <Meeting
                  {...item}
                  nav={this.navigateMeeting.bind(this, { ...item })}
                />
              }
            />
          </View>
        }

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white'
  },
  meetingContainer: {
    borderWidth: 0.3,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderColor: 'grey',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    elevation: 5,
    position: 'relative',
    flexWrap: 'wrap'
  },
  infoContainer: {
    flex: 1
  },
  infoRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5
  },
  textStyle: {
    color: 'rgb(45,48,71)',
    fontSize: 15
  },
  profilPic: {
    height: 75,
    width: 75,
    borderRadius: 20
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 18,
    color: 'rgb(66, 134, 244)',
    fontWeight: 'bold',
  }
})