import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Images } from '../resources/images';

export default class Home extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {

    return (

      <View style={styles.container}>

        <Text>HEJ</Text>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})