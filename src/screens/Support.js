import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default class Home extends React.Component {

  constructor(props) {
    super(props);


  }

  // navRegister() {
  //   this.props.navigation.navigate('register')
  // }

  render() {

    return (

      <ImageBackground source={require('../resources/images/meeting.jpg')} style={styles.container}>

        <View style={styles.body}>

          <View style={styles.content}>
            <Text>SUPPORT</Text>
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
  content: {

  }

})