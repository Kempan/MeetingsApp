import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FormInput, Text, FormLabel } from 'react-native-elements';
import { Button } from '../components';
import { Images } from '../resources/images';
import Colors from '../styles/Colors';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import utils from '../utils';


export default class CreateMeeting extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      meetingInfo: {
        leader: '',
        leaderDesc: '',
        title: '',
        meetingDesc: '',
        location: '',
        dateTime: '',
        maxAttendants: '',
        rating: '97% +',
        attendants: []
      },
      datePickerVisible: false,
    }
  }

  textUpdate(text, field) {
    const newMeetingInfo = Object.assign(this.state.meetingInfo);
    newMeetingInfo[field] = text;
    this.setState({
      meetingInfo: newMeetingInfo
    });
  }

  _showDatePicker = () => {
    this.setState({
      datePickerVisible: true
    });
  }

  _hideDatePicker = () => {
    this.setState({
      datePickerVisible: false
    })
  }

  _handleDatePicked = (data) => {
    Moment.locale('en');
    var dt = data;
    const newState = Object.assign(this.state.meetingInfo)
    newState['dateTime'] = Moment(dt).format("HH:mm, MM-DD-YYYY");
    this.setState({
      meetingInfo: newState
    })
    this._hideDatePicker();
  }

  createMeeting(data) {
    utils.createMeeting('create/meeting', data)
      .then(resp => {
        console.log(resp)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.inputContainer}>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>Meeting title</FormLabel>
            <FormInput
              underlineColorAndroid='black'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'title') }}
            />
          </View>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>Leader title</FormLabel>
            <FormInput
              underlineColorAndroid='black'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'leader') }}
            />
          </View>

        </View>

        <View style={styles.inputContainer}>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>Meeting desc</FormLabel>
            <FormInput
              underlineColorAndroid='black'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'meetingDesc') }}
            />
          </View>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>Leader desc</FormLabel>
            <FormInput
              underlineColorAndroid='black'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'leaderDesc') }}
            />
          </View>

        </View>

        <View style={styles.inputContainer}>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>Location</FormLabel>
            <FormInput
              underlineColorAndroid='black'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'location') }}
            />
          </View>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>Max attendants</FormLabel>
            <FormInput
              underlineColorAndroid='black'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'maxAttendants') }}
            />
          </View>

        </View>

        <View style={styles.bookingInfoContainer}>
          <TouchableOpacity style={styles.dateContainer} onPress={this._showDatePicker}>
            <Image
              source={Images.date}
              style={{ height: 20, width: 20, marginHorizontal: 5 }}
            />
            <Text style={styles.dateText}>Datum</Text>
            <DateTimePicker
              isVisible={this.state.datePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDatePicker}
              mode='datetime'
            />
          </TouchableOpacity>
        </View>

        <Button
          buttonStyle={styles.button}
          title='Create meeting'
          color='white'
          backgroundColor='rgb(66, 134, 244)'
          onPress={() => { this.createMeeting(this.state.meetingInfo) }}
        />

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: 'center',
    paddingTop: 30
  },
  inputContainer: {
    flexDirection: 'row'
  },
  lable: {
    color: 'black'
  },
  textInputContainer: {
    width: 200
  },
  bookingInfoContainer: {
    marginVertical: 20
  },
  dateContainer: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'rgb(66, 134, 244)',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    borderWidth: 1
  },
  dateText: {
    color: 'white',
    fontSize: 20,
    marginRight: 5
  },
  button: {
    width: 200,
    borderRadius: 5,
    marginTop: 10,
    borderWidth: 1,
  }
})