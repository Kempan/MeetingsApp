import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Meeting } from '../../components';
import { connect } from 'react-redux';
import { MeetingActions } from '../../redux/MeetingsRedux';

export class UserMadeMeetingScreen extends React.Component {

  static navigationOptions = {
    title: 'Dina möten'
  }

  componentDidMount() {
    console.log(this.props.createdMeetings);
  }


  navigateMeeting(item) {
    this.props.navigation.navigate('MeetingScreen', { id: item.id });
  }

  navigateEntrants(item) {
    this.props.navigation.navigate('EntrantScreen', { meeting: item });
  }

  test() {
    console.log('state :', this.props.createdMeetings)
  }

  render() {

    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.createdMeetings}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <Meeting
              key={item.id}
              {...item}
              navigateMeeting={this.navigateMeeting.bind(this, { ...item })}
              navigateEntrants={() => { this.navigateEntrants({ ...item }) }}
            />
          }
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    createdMeetings: state.meetings.createdMeetings
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMeetings: (data) => dispatch((MeetingActions.getMeetings(data)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMadeMeetingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})