import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class Register extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
    }
  }

  updateText(text, field) {
    let newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials
    })
    console.log(this.state.credentials)
  }

  render() {

    return (

      <ImageBackground source={require('../resources/images/meeting.jpg')} style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, marginBottom: 30 }}>REGISTER</Text>
          <TextInput
            style={styles.input}
            placeholder='Firstname..'
            value={this.state.firstName}
            onChangeText={(text) => { this.updateText(text, 'firstName') }}
          />
          <TextInput
            style={styles.input}
            placeholder='Lastname..'
            value={this.state.lastName}
            onChangeText={(text) => { this.updateText(text, 'lastName') }}
          />
          <TextInput
            style={styles.input}
            placeholder='Email..'
            value={this.state.email}
            onChangeText={(text) => { this.updateText(text, 'email') }}
          />
          <TextInput
            style={styles.input}
            placeholder='Password..'
            value={this.state.password}
            onChangeText={(text) => { this.updateText(text, 'password') }}
          />
          <Button buttonStyle={styles.button} title='SUBMIT' onPress={() => { }} />
        </View>
      </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    padding: 10,
    fontSize: 18,
    height: 50,
    width: 200,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 5
  }
})