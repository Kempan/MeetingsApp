import React from 'react';
import { View, StyleSheet, ScrollView, FlatList, AsyncStorage, ActivityIndicator } from 'react-native';
import { Meeting, Button } from '../components';
import { Text } from 'react-native-elements';
import config from '../config';
import Turbo from 'turbo360';
import utils from '../utils';
import { connect } from 'react-redux';
import { MeetingActions } from '../redux/MeetingsRedux';


export class UserMeetingScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    }

    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {
    this.props.getMeetings()
  }

  navigateMeeting(item) {
    this.props.navigation.navigate('MeetingScreen', { id: item.id });
  }

  navigateEntrants(item) {
    this.props.navigation.navigate('EntrantScreen', { meeting: item });
  }

  render() {

    if (this.props.isLoading == null) {
      return (
        <ScrollView style={styles.container}>
          <ActivityIndicator size='large' />
        </ScrollView>
      )
    }

    return (

      <ScrollView style={styles.container}>

        {this.props.bookedMeetings.length <= 0 ?

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
              data={this.props.bookedMeetings}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
                <Meeting
                  key={item.id}
                  {...item}
                  navigateMeeting={this.navigateMeeting.bind(this, { ...item })}
                  navigateEntrants={() => { this.navigateEntrants({ ...item }) }}
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

const mapStateToProps = (state) => {
  return {
    bookedMeetings: state.meetings.bookedMeetings,
    isLoading: state.meetings.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBookedMeetings: (data) => dispatch((MeetingActions.setBookedMeetings(data))),
    getMeetings: () => dispatch((MeetingActions.getMeetings()))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMeetingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
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
    backgroundColor: 'rgb(66, 134, 244)'
  }
})