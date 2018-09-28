import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from '../components';
import Turbo from 'turbo360';

export default class AuthScreen extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: '',
        password: ''
      }
    }

    this.turbo = Turbo({ site_id: '5bae1cf2816748001356ffa9' });
  }

  register() {
    this.turbo.createUser(this.state.credentials)
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  skip() {
    this.props.navigation.navigate('HomeScreen')
  }

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.header}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>#iBusinez</Text>
          </View>

        </View>

        <View style={styles.body}>

          <View style={styles.formContent}>
            <Button
              buttonStyle={styles.button}
              title='Login'
              color='rgb(66, 134, 244)'
              backgroundColor='white'
            />
            <Button
              buttonStyle={styles.button}
              title='Signup'
              color='white'
              backgroundColor='rgb(66, 134, 244)'
              fontSize={12}
            />
            <TouchableOpacity onPress={() => { this.skip() }}>
              <Text>Skip</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.curvedView}></View>


      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    height: 400,
    width: '100%',
    backgroundColor: 'rgb(66, 134, 244)',
    justifyContent: 'center'
  },
  curvedView: {
    width: 105,
    height: 100,
    borderRadius: 50,
    transform: [
      { scaleX: 4 }
    ],
    backgroundColor: 'rgb(66, 134, 244)',
    position: 'absolute',
    top: 350
  },
  body: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 90
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 38,
    fontWeight: 'bold',
    color: 'white'
  },
  formContent: {
    alignItems: 'center',
  },
  buttonContainer: {
    paddingTop: 10,
    flexDirection: 'row'
  },
  button: {
    width: 200,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
  }
})