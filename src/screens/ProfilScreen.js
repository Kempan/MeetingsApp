import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Images } from '../resources/images';

export default class ProfilScreen extends React.Component {

  constructor(props) {
    super(props);


  }

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.curvedView}></View>

        <View style={styles.header}>

          <View style={styles.userContainer}>
            <Image source={Images.profilPic} style={styles.profilPic} />
            <Text style={styles.title}>Joakim Edwardh</Text>
            <Text>Junior Developer, React-Native</Text>
            <Text>Inserve Technology</Text>
          </View>

          <View style={styles.iconsContainer}>
            <Icon iconStyle={styles.icon} size={60} name='linkedin-box' type='material-community' />
            <Icon iconStyle={[styles.icon, { marginHorizontal: 20 }]} size={60} name='facebook-box' type='material-community' />
            <Icon iconStyle={styles.icon} size={60} name='twitter-box' type='material-community' />
          </View>

        </View>



      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    height: 280,
    width: '100%',
    backgroundColor: 'rgb(66, 134, 244)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  curvedView: {
    width: 105,
    height: 50,
    borderRadius: 50,
    transform: [
      { scaleX: 4 }
    ],
    backgroundColor: 'rgb(66, 134, 244)',
    justifyContent: 'center',
    bottom: 250,
    position: 'absolute'
  },
  userContainer: {
    alignItems: 'center'
  },
  profilPic: {
    height: 100,
    width: 100,
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: 'white'
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: 10
  },
  icon: {
    color: 'white'
  }
})