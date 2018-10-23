import React from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, AsyncStorage } from 'react-native';
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
        password: '',
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
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

  register(cred) {
    this.turbo.createUser(cred)
      .then(resp => {
        return AsyncStorage.setItem(config.userIdKey, resp.id)
      })
      .then(() => {
        this.navigate('MainApp');
      })
      .catch(err => {
        console.log(err)
      })
  }

  navigate(screen) {
    this.props.navigation.navigate(screen)
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
                name='account'
                containerStyle={styles.icon}
              />
              <FormInput
                placeholder='First Name'
                placeholderTextColor='black'
                inputStyle={{ color: 'black' }}
                containerStyle={styles.textInput}
                onChangeText={(text) => { this.textUpdate(text, 'firstName') }}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                type='material-community'
                name='account'
                containerStyle={styles.icon}
              />
              <FormInput
                placeholder='Last Name'
                placeholderTextColor='black'
                inputStyle={{ color: 'black' }}
                containerStyle={styles.textInput}
                onChangeText={(text) => { this.textUpdate(text, 'lastName') }}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                type='material-community'
                name='email'
                containerStyle={styles.icon}
              />
              <FormInput
                placeholder='Email'
                placeholderTextColor='black'
                inputStyle={{ color: 'black' }}
                containerStyle={styles.textInput}
                keyboardType='email-address'
                onChangeText={(text) => { this.textUpdate(text, 'email') }}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                type='material-community'
                name='map-marker'
                containerStyle={styles.icon}
              />
              <FormInput
                placeholder='Address'
                placeholderTextColor='black'
                inputStyle={{ color: 'black' }}
                containerStyle={styles.textInput}
                onChangeText={(text) => { this.textUpdate(text, 'address') }}
                underlineColorAndroid="transparent"
              />
            </View>

            <View style={styles.inputContainer}>
              <Icon
                type='material-community'
                name='cellphone-android'
                containerStyle={styles.icon}
              />
              <FormInput
                placeholder='Phone-number'
                placeholderTextColor='black'
                inputStyle={{ color: 'black' }}
                containerStyle={styles.textInput}
                onChangeText={(text) => { this.textUpdate(text, 'phoneNumber') }}
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
                inputStyle={{ color: 'black' }}
                containerStyle={styles.textInput}
                onChangeText={(text) => { this.textUpdate(text, 'password') }}
                underlineColorAndroid="transparent"
                secureTextEntry
              />
            </View>

          </View>

          <View style={styles.formContent}>
            <Button
              buttonStyle={styles.button}
              title='Submit'
              color='white'
              backgroundColor='rgb(66, 134, 244)'
              onPress={() => { this.register(this.state.credentials) }}
            />
            <Button
              buttonStyle={styles.button}
              title='Return'
              color='rgb(66, 134, 244)'
              backgroundColor='white'
              onPress={() => { this.navigate('AuthScreen') }}
            />
          </View>

        </View>

        <View style={styles.curvedView}></View>

      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    height: 175,
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
    top: 125
  },
  body: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: 70
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
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 2,
    marginBottom: 10,
    width: 280,
    alignItems: 'center'
  },
  icon: {
    marginLeft: 25
  },
  textInput: {
    width: 200,
    borderRadius: 15,
    backgroundColor: 'white',
    alignSelf: 'center'
  }
})