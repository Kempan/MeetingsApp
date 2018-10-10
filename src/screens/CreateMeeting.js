import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Icon, FormInput } from 'react-native-elements';
import { Button } from '../components';
import { Images } from '../resources/images';

export default class CreateMeeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.formContainer}>

          <View style={styles.inputContainer}>
            <Image
              source={Images.linesTitle}
            />
            <FormInput
              placeholder='Meeting title'
              placeholderTextColor='black'
              containerStyle={styles.textInput}
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'email') }}
              underlineColorAndroid="transparent"
            />
          </View>

          {/* <View style={styles.inputContainer}>
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
          </View> */}

        </View>

        {/* <View style={styles.formContent}>
          <Button
            buttonStyle={styles.button}
            title='Login'
            color='rgb(66, 134, 244)'
            backgroundColor='white'
            onPress={() => { }}
          />
          <Button
            buttonStyle={styles.button}
            title='Signup'
            color='white'
            backgroundColor='rgb(66, 134, 244)'
            onPress={() => { }}
          />
        </View> */}


      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContent: {
    alignItems: 'center',
  },
  button: {
    width: 200,
    borderRadius: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
  formContainer: {
    marginBottom: 15
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 10,
    width: 280,
    height: 60,
    alignItems: 'center'
  },
  textInput: {
    width: 200,
    borderRadius: 15,
    backgroundColor: 'white',
    marginVertical: 10
  }
})