import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { FormInput, Icon } from 'react-native-elements';
import { Button } from '../components';
import config from '../config';
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

    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  textUpdate(text, field) {
    const newCredentials = Object.assign(this.state.credentials);
    newCredentials[field] = text;
    this.setState({
      credentials: newCredentials
    });
  }

  login() {
    this.turbo.login(this.state.credentials)
      .then(resp => {
        return AsyncStorage.setItem(config.userIdKey, resp.id)
          .then(() => {
            config.setUserId(resp.id)
            this.navigate('MainApp');
          })
      })
      .catch(err => {
        alert(err.message);
      })

  }

  navigate(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {

    return (

      <KeyboardAvoidingView behavior='padding' style={styles.container}>

        <View style={styles.header}>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>#iBusinez</Text>
          </View>

        </View>

        <View style={styles.body}>

          <View style={styles.formContainer}>

            <View style={styles.inputContainer}>
              <Icon
                type='material-community'
                name='email'
                containerStyle={styles.icon}
              />
              <FormInput
                placeholder='Email'
                placeholderTextColor='black'
                containerStyle={styles.textInput}
                inputStyle={{ color: 'black' }}
                onChangeText={(text) => { this.textUpdate(text, 'email') }}
                keyboardType='email-address'
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                type='material-community'
                name='key'
                containerStyle={styles.icon}
              />
              <FormInput
                placeholder='Password'
                placeholderTextColor='black'
                containerStyle={styles.textInput}
                inputStyle={{ color: 'black' }}
                onChangeText={(text) => { this.textUpdate(text, 'password') }}
                secureTextEntry
                underlineColorAndroid="transparent"
              />
            </View>

          </View>

          <View style={styles.formContent}>
            <Button
              buttonStyle={styles.button}
              title='Login'
              color='rgb(66, 134, 244)'
              backgroundColor='white'
              onPress={() => { this.login() }}
            />
            <Button
              buttonStyle={styles.button}
              title='Signup'
              color='white'
              backgroundColor='rgb(66, 134, 244)'
              onPress={() => { this.navigate('RegisterScreen') }}
            />
            <TouchableOpacity onPress={() => { this.navigate('MainApp') }}>
              <Text>Skip</Text>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.curvedView}></View>


      </KeyboardAvoidingView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    height: 250,
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
    top: 200
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
  button: {
    width: 200,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 2,
  },
  formContainer: {
    marginBottom: 15
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
    width: 280,
    height: 60,
    alignItems: 'center'
  },
  icon: {
    marginLeft: 25
  },
  textInput: {
    width: 200,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 10
  }
})