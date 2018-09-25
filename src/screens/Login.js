import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class Login extends React.Component {

  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }
  }

  navRegister() {
    this.props.navigation.navigate('register')
  }

  render() {

    return (

      <ImageBackground source={require('../resources/images/meeting.jpg')} style={styles.container}>

        <View style={styles.body}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>Welcome to #Ibusinez</Text>
          </View>

          <View style={styles.formContent}>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 28 }}>LOGIN</Text>
            <TextInput
              style={styles.input}
              placeholder='Email..'
            />
            <TextInput
              style={styles.input}
              placeholder='Password..'
            />

            <View style={styles.buttonContainer}>
              <Button buttonStyle={styles.button} title='SUBMIT' onPress={() => { }} />
              <Button buttonStyle={styles.button} title='REGISTER' onPress={() => this.navRegister()} />
            </View>
            
          </View>

        </View>

      </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  titleContainer: {
    marginTop: 70
  },
  title: {
    color: 'orange',
    fontSize: 38,
    fontWeight: 'bold'
  },
  formContent: {
    marginTop: 190,
    alignItems: 'center',
  },
  input: {
    padding: 10,
    fontSize: 18,
    height: 50,
    width: 200,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10
  },
  buttonContainer: {
    paddingTop: 10,
    flexDirection: 'row'
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'orange'
  }
})