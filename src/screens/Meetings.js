import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Screen } from '../components/Screen';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [
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
          time: 'Imorgon 11:30, 25e September 2018',
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

  navigateMeeting(message) {
    this.props.navigation.navigate('meetingPage', { message });
  }

  render() {

    const meetings = this.state.messages.map((message, key) => {
      return (
        <TouchableOpacity
          key={key}
          style={styles.messageContainer}
          onPress={() => {
            this.navigateMeeting(message)
          }}
        >
          <View style={styles.userRow}>
            <Text>{message.title}</Text>
          </View>
          <View style={styles.userRow}>
            <Text>När: {message.time}</Text>
          </View>
          <View style={styles.userRow}>
            <Text>Vem: {message.leader}</Text>
          </View>
          <View style={styles.userRow}>
            <Text>Rating: {message.rating}</Text>
          </View>
        </TouchableOpacity>
      )
    })

    return (

      <ScrollView style={styles.container}>

        <View style={styles.titleContainer}>
          <Text h4 style={{ color: 'white' }}>Meetings</Text>
        </View>
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 14, color: 'white' }}>You have <Text style={{ fontSize: 26, color: 'white' }}>5</Text> meetings today</Text>
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
    backgroundColor: 'rgb(45,48,71)',
  },
  titleContainer: {
    paddingTop: 50
  },
  messageContainer: {
    borderColor: 'rgb(225,225,225)',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginVertical: 10
  },
  userRow: {
    paddingVertical: 5,
  }
})