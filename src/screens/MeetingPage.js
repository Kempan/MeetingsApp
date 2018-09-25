import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      messages: [
        {
          time: 'Imorgon 11:30, 25e September 2018',
          title: 'React-native meeting',
          leader: 'Joakim Edwardh, developer',
          rating: '88% +'
        },
        {
          time: 'Imorgon 11:30, 25e September 2018',
          title: 'React-native meeting',
          leader: 'Joakim Edwardh, developer',
          rating: '88% +'
        },
        {
          time: 'Imorgon 11:30, 25e September 2018',
          title: 'React-native meeting',
          leader: 'Joakim Edwardh, developer',
          rating: '88% +'
        },
      ]
    }

  }

  // navRegister() {
  //   this.props.navigation.navigate('register')
  // }

  render() {

    const meetings = this.state.messages.map((message, key) => {
      return (
        <View style={styles.messageContainer}>
          <View style={styles.userRow}>
            <Text>När: {message.title}</Text>
          </View>
          <View style={styles.userRow}>
            <Text>Vad: {message.time}</Text>
          </View>
          <View style={styles.userRow}>
            <Text>Vem: {message.leader}</Text>
          </View>
          <View style={styles.userRow}>
            <Text>Rating: {message.rating}</Text>
          </View>
        </View>
      )
    })

    return (

      <View style={styles.container}>

        <View>
          <Text h4>Meetings</Text>
        </View>

        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 14 }}>You have <Text style={{ fontSize: 26 }}>3</Text> meetings today</Text>
        </View>

        <View style={styles.meetingContainer}>
          {meetings}
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
    backgroundColor: 'purple'
  },
  messageContainer: {
    borderColor: 'rgb(225,225,225)',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 15,
    marginVertical: 15
  },
  userRow: {
    paddingVertical: 5,
  }
})