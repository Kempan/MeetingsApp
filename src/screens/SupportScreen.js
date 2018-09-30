import React from 'react';
import { View, Text, StyleSheet, ImageBackground, AsyncStorage } from 'react-native';
import { Button } from '../components';
import config from '../config';

export default class SupportScreen extends React.Component {

  constructor(props) {
    super(props);


  }

  // navRegister() {
  //   this.props.navigation.navigate('register')
  // }

  signout() {
    AsyncStorage.removeItem(config.userIdKey);
    this.props.navigation.navigate('Auth');
  }

  render() {

    return (

      <ImageBackground source={require('../resources/images/meeting.jpg')} style={styles.container}>

        <View style={styles.body}>

          <View style={styles.content}>
            <Button
              title='Sign out'
              onPress={() => { this.signout() }}
              buttonStyle={styles.button}
            />
          </View>

        </View>

      </ImageBackground>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'rgb(66, 134, 244)',
    width: 150,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
  }
})