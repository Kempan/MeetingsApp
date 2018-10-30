import React from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { FormInput, FormLabel } from 'react-native-elements';
import { Button } from '../components';
import Colors from '../styles/Colors';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import Turbo from 'turbo360';
import { connect } from 'react-redux';
import { MeetingActions } from '../redux/MeetingsRedux';


export class EditMeetingScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      meeting: null,
      loading: true,
      datePickerVisible: false,
    }

    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {
    this.setState({
      meeting: this.props.navigation.state.params.meeting,
      loading: false
    })
  }

  textUpdate(text, field) {
    const newMeetingInfo = Object.assign(this.state.meeting);
    newMeetingInfo[field] = text;
    this.setState({
      meeting: newMeetingInfo
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

  createMeeting(meetingId, newMeeting) {
    this.turbo.updateEntity('meeting', meetingId, newMeeting)
      .then(resp => {
        alert('Ditt möte har uppdaterats');
        this.props.getMeetings();
        this.props.navigation.goBack();
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {

    const { meeting } = this.state;

    return (

      <ScrollView style={styles.container}>
        {this.state.loading ? <ActivityIndicator size='large' /> : (
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
                placeholder={meeting.title}
                underlineColorAndroid='grey'
                inputStyle={{ color: 'black' }}
                onChangeText={(text) => { this.textUpdate(text, 'title') }}
              />
            </View>

            <View style={styles.textInputContainer}>
              <FormLabel labelStyle={styles.lable}>MÖTES BESK</FormLabel>
              <FormInput
                placeholder={meeting.meetingDesc}
                underlineColorAndroid='grey'
                inputStyle={{ color: 'black' }}
                onChangeText={(text) => { this.textUpdate(text, 'meetingDesc') }}
              />
            </View>

            <View style={styles.textInputContainer}>
              <FormLabel labelStyle={styles.lable}>VÄRDENS NAMN</FormLabel>
              <FormInput
                placeholder={meeting.leader}
                underlineColorAndroid='grey'
                inputStyle={{ color: 'black' }}
                onChangeText={(text) => { this.textUpdate(text, 'leader') }}
              />
            </View>

            <View style={styles.textInputContainer}>
              <FormLabel labelStyle={styles.lable}>VÄRDENS BESK</FormLabel>
              <FormInput
                placeholder={meeting.leaderDesc}
                underlineColorAndroid='grey'
                inputStyle={{ color: 'black' }}
                onChangeText={(text) => { this.textUpdate(text, 'leaderDesc') }}
              />
            </View>

            <View style={styles.textInputContainer}>
              <FormLabel labelStyle={styles.lable}>ADRESS</FormLabel>
              <FormInput
                placeholder={meeting.location}
                underlineColorAndroid='grey'
                inputStyle={{ color: 'black' }}
                onChangeText={(text) => { this.textUpdate(text, 'location') }}
              />
            </View>

            <View style={styles.textInputContainer}>
              <FormLabel labelStyle={styles.lable}>MAX DELTAGARE</FormLabel>
              <FormInput
                placeholder={meeting.maxAttendants}
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
              title='SPARA MÖTE'
              color='white'
              backgroundColor='rgb(66, 134, 244)'
              onPress={() => { this.createMeeting(meeting.id, meeting) }}
            />

          </View>
        )}

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMeetings: (data) => dispatch((MeetingActions.getMeetings(data)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMeetingScreen);

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