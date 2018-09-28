import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Images } from '../resources/images';


export default class Meetings extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      meetings: [
        {
          time: 'Imorgon 11:30, 25e September 2018',
          location: 'Karl Johansgatan 15, Majorna',
          title: 'React-native meeting',
          leader: 'Joakim Edwardh',
          leaderDesc: 'Junior Developer, React Native',
          rating: '96% +',
          id: 1
        },
        {
          time: 'Söndag 11:30, 28e September 2018',
          location: 'Karl Johansgatan 15, Majorna',
          title: 'React-native meeting',
          leader: 'Joakim Edwardh',
          leaderDesc: 'Junior Developer, React Native',
          rating: '96% +',
          id: 2
        },
        {
          time: 'Imorgon 11:30, 25e September 2018',
          location: 'Karl Johansgatan 15, Majorna',
          title: 'React-native meeting',
          leader: 'Joakim Edwardh',
          leaderDesc: 'Junior Developer, React Native',
          rating: '96% +',
          id: 3
        },
        {
          time: 'Imorgon 11:30, 25e September 2018',
          location: 'Karl Johansgatan 15, Majorna',
          title: 'React-native meeting',
          leader: 'Joakim Edwardh',
          leaderDesc: 'Junior Developer, React Native',
          rating: '96% +',
          id: 4
        },
        {
          time: 'Imorgon 11:30, 25e September 2018',
          location: 'Karl Johansgatan 15, Majorna',
          title: 'React-native meeting',
          leader: 'Joakim Edwardh',
          leaderDesc: 'Junior Developer, React Native',
          rating: '96% +',
          id: 5
        },
      ]
    }

  }

  navigateMeeting(meeting) {
    this.props.navigation.navigate('meetingPage', { meeting });
  }

  render() {

    const meetings = this.state.meetings.map((meeting, key) => {

      return (
        <TouchableOpacity
          key={key}
          style={styles.meetingContainer}
          onPress={() => {
            this.navigateMeeting(meeting)
          }}
        >

          <Image source={Images.profilPic} style={styles.profilPic} />


          <View style={styles.infoContainer}>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{meeting.title}</Text>
            </View>
            <View style={styles.userRow}>
              <Text style={styles.textStyle}>När: {meeting.time}</Text>
            </View>
            <View style={styles.userRow}>
              <Text style={styles.textStyle}>Vem: {meeting.leader}</Text>
            </View>
            <View style={styles.userRow}>
              <Text style={styles.textStyle}>Rating: {meeting.rating}</Text>
            </View>

          </View>

        </TouchableOpacity>
      )
    })

    return (


      <ScrollView style={styles.container}>

        <View style={styles.titleContainer}>
          <Text h4 style={{ color: 'rgb(45,48,71)' }}>Dina möten</Text>
        </View>

        <View style={{ paddingBottom: 20 }}>
          {meetings}
        </View>


      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 16,
    backgroundColor: 'white'
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center'
  },
  meetingContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'grey',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    elevation: 1
  },
  userRow: {
    paddingLeft: 10,
    alignItems: 'center'
  },
  textStyle: {
    color: 'rgb(45,48,71)'
  },
  profilPic: {
    height: 75,
    width: 75,
    borderRadius: 20
  },
  infoContainer: {

  },
  titleContainer: {
    width: '100%',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  }
})