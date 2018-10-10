import React from 'react';
import { View, StyleSheet, ScrollView, FlatList, AsyncStorage, ActivityIndicator } from 'react-native';
import { Meeting, Button } from '../components';
import { Text } from 'react-native-elements';
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
        return this.turbo.fetch('Meeting', { attendants: key })
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

        {this.state.loading ? <ActivityIndicator size='large' /> : null}
        {this.state.meetings.length <= 0 && !this.state.loading ?

          <View style={{ alignItems: 'center', width: '100%' }}>
            <View style={{ width: '100%' }}>
              <View style={styles.listTitleContainer}>
                <Text style={styles.listTitleText}>Du har inga möten bokade</Text>
              </View>
              <Button
                buttonStyle={styles.buttons}
                title='refresh'
                onPress={() => { this.fetchMeetings() }}
              />
            </View>
          </View>
          :
          <View style={{ paddingBottom: 15 }}>
            <View style={styles.listTitleContainer}>
              <Text style={styles.listTitleText}>Idag, 12e Okt</Text>
            </View>
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
            <Button
              buttonStyle={styles.buttons}
              title='refresh'
              onPress={() => { this.fetchMeetings() }}
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
    backgroundColor: 'white',
    width: '100%',
  },
  listTitleContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: '80%',
    alignSelf: 'center'
  },
  listTitleText: {
    fontFamily: 'notoserif',
    fontSize: 20,
    margin: 5,
    letterSpacing: 1,
    alignSelf: 'center'
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
  },
  buttons: {
    width: '100%',
    marginTop: 15,
  }
})