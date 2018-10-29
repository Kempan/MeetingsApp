import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Meeting, Button } from '../../components';
import { connect } from 'react-redux';
import { MeetingActions } from '../../redux/MeetingsRedux';

export class UserMadeMeetingScreen extends React.Component {

  static navigationOptions = {
    title: 'Dina möten'
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

        {this.props.createdMeetings.length <= 0 ?

          <View style={{ alignItems: 'center', width: '100%' }}>
            <View style={{ width: '100%' }}>
              <View style={styles.listTitleContainer}>
                <Text style={styles.listTitleText}>Du har inga skapade möten</Text>
              </View>
              <Button
                buttonStyle={styles.buttons}
                title='refresh'
                onPress={() => { }}
              />
            </View>
          </View>

          :

          <View style={{ paddingBottom: 15 }}>
            <View style={styles.listTitleContainer}>
              <Text style={styles.listTitleText}>Idag, 24e Okt</Text>
            </View>
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
            <Button
              buttonStyle={styles.buttons}
              title='refresh'
              onPress={() => { }}
            />
          </View>
        }



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
    flex: 1,
    padding: 16
  },
  listTitleText: {
    fontFamily: 'notoserif',
    fontSize: 20,
    margin: 5,
    letterSpacing: 1,
    alignSelf: 'center'
  },
  buttons: {
    width: '100%',
    marginTop: 15,
    backgroundColor: 'rgb(66, 134, 244)'
  },
  listTitleContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    alignSelf: 'center'
  }
})