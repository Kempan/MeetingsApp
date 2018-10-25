import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';
import { Button } from '../../components';
import utils from '../../utils';
import config from '../../config';


export default class EmailScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        email: ''
      }
    }
  }

  onTextUpdate(text, field) {
    const newCred = Object.assign(this.state.credentials);
    newCred[field] = text;
    this.setState({
      credentials: newCred
    })
  }

  onSubmit(cred) {
    AsyncStorage.getItem(config.userIdKey)
      .then(key => {
        utils.updateUser(key, cred)
          .then(resp => {
            this.props.navigation.goBack();
          })
          .catch(err => {
            console.log(err);
          })
      })
  }

  render() {

    return (

      <View style={styles.container}>

        <FormLabel labelStyle={styles.labelStyle}>Email</FormLabel>
        <FormInput
          placeholderTextColor='grey'
          containerStyle={styles.inputContainerStyle}
          inputStyle={styles.inputStyle}
          placeholder='Enter new email..'
          underlineColorAndroid='grey'
          onChangeText={(text) => { this.onTextUpdate(text, 'email') }}
        />

        <View style={styles.buttonContainer}>
          <Button
            title='SAVE'
            onPress={() => { this.onSubmit(this.state.credentials) }}
            buttonStyle={styles.button}
          />
        </View>

      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainerStyle: {
    height: 60,
  },
  inputStyle: {
    color: 'black',
    marginLeft: 6
  },
  labelStyle: {
    fontSize: 22,
    letterSpacing: 1,
    color: 'black',
  },
  buttonContainer: {
    paddingHorizontal: 20
  },
  button: {
    width: '100%',
    marginTop: 15,
    backgroundColor: 'rgb(66, 134, 244)'
  }
})