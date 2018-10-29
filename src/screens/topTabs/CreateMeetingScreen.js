import React from 'react';
import { View, StyleSheet, AsyncStorage, ScrollView } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';
import { Button } from '../../components';
import { Images } from '../../resources/images';
import Colors from '../../styles/Colors';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import utils from '../../utils';
import { connect } from 'react-redux';
import { MeetingActions } from '../../redux/MeetingsRedux';
import config from '../../config';


export class CreateMeetingScreen extends React.Component {

  static navigationOptions = {
    title: 'skapa möte'
  }

  constructor(props) {
    super(props);

    this.state = {
      meetingInfo: {
        userId: null,
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

  componentDidMount() {
    AsyncStorage.getItem(config.userIdKey)
      .then(key => {
        const newState = Object.assign(this.state.meetingInfo);
        newState['userId'] = key;
        this.setState({
          meetingInfo: newState
        })
      })
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
        alert('Ditt möte har skapats');
        this.props.getMeetings();
        this.props.navigation.navigate('Home')
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    return (

      <ScrollView style={styles.container}>
        <View style={{ marginBottom: 40 }}>

          <DateTimePicker
            isVisible={this.state.datePickerVisible}
            onConfirm={this._handleDatePicked}
            onCancel={this._hideDatePicker}
            mode='datetime'
          />

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>MÖTES NAMN</FormLabel>
            <FormInput
              underlineColorAndroid='grey'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'title') }}
            />
          </View>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>MÖTES BESK</FormLabel>
            <FormInput
              underlineColorAndroid='grey'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'meetingDesc') }}
            />
          </View>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>VÄRDENS NAMN</FormLabel>
            <FormInput
              underlineColorAndroid='grey'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'leader') }}
            />
          </View>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>VÄRDENS BESK</FormLabel>
            <FormInput
              underlineColorAndroid='grey'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'leaderDesc') }}
            />
          </View>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>ADRESS</FormLabel>
            <FormInput
              underlineColorAndroid='grey'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'location') }}
            />
          </View>

          <View style={styles.textInputContainer}>
            <FormLabel labelStyle={styles.lable}>MAX DELTAGARE</FormLabel>
            <FormInput
              underlineColorAndroid='grey'
              inputStyle={{ color: 'black' }}
              onChangeText={(text) => { this.textUpdate(text, 'maxAttendants') }}
            />
          </View>

          <Button
            buttonStyle={styles.button}
            onPress={this._showDatePicker}
            title='datum & tid'
            backgroundColor='rgb(66, 134, 244)'
          />
          <Button
            buttonStyle={styles.button}
            title='skapa möte'
            color='white'
            backgroundColor='rgb(66, 134, 244)'
            onPress={() => { this.createMeeting(this.state.meetingInfo) }}
          />

        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMeetings: (data) => dispatch((MeetingActions.getMeetings(data)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateMeetingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16
  },
  lable: {
    color: 'black'
  },
  textInputContainer: {
    marginRight: 5
  },
  dateContainer: {
    width: '100%',
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'rgb(66, 134, 244)',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
  },
  dateText: {
    color: 'white',
    fontSize: 20,
    marginRight: 5
  },
  button: {
    width: '100%',
    marginTop: 15,
    backgroundColor: 'rgb(66, 134, 244)',
    alignItems: 'center'
  }
})