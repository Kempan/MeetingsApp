import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Icon, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { Images } from '../resources/images';

export default class MeetingPageScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      meetingInformation: {
        time: '',
        location: '',
        title: '',
        leader: '',
        leaderDesc: '',
        rating: '',
        id: null
      }
    }
  }

  componentDidMount() {
    const meetingInfo = this.props.navigation.state.params.meeting;
    this.setState({
      meetingInformation: {
        time: meetingInfo.time,
        location: meetingInfo.location,
        title: meetingInfo.title,
        leader: meetingInfo.leader,
        leaderDesc: meetingInfo.leaderDesc,
        rating: meetingInfo.rating,
        id: meetingInfo.id
      }
    })
  }

  navigateReviewMeeting(meetingInformation) {
    this.props.navigation.navigate('ReviewMeetingScreen', { meetingInformation });
  }

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.mapContainer}>
          <Image source={require('../resources/images/map.png')} style={{ height: '100%', width: '100%' }} />
        </View>

        <View style={styles.content}>

          <View style={styles.meetingTitleContainer}>
            <Text style={styles.meetingTitleText}>{this.state.meetingInformation.title}</Text>
          </View>

          <View style={styles.leaderContainer}>

            <Image
              source={Images.profilPic}
              style={styles.profilPic}
            />

            <View style={styles.leaderInfo}>
              <Text style={styles.careerInfoText1}>{this.state.meetingInformation.leader}</Text>
              <Text style={styles.careerInfoText2}>{this.state.meetingInformation.leaderDesc}</Text>
              <Text style={styles.careerInfoText2}>BRT: {this.state.meetingInformation.rating}  <Image style={styles.rating} source={Images.rating} /></Text>
            </View>

          </View>

          <View style={styles.meetingDescContainer}>
            <Text style={styles.careerInfoText1}>Mötesbeskrivning</Text>
            <Text style={styles.careerInfoText2}>Jag kommer att hålla en sammankomst för oss med intresse av programmeringsspråket 'React Native' eller generell programmering. Det kommer att vara ett öppet och frispråkigt möte där tanken är att dela med sig och ta del av nya tillvägagångssätt och ideér.</Text>
          </View>

          <View style={styles.timeAndLocationContainer}>
            <Icon
              name='clock'
              type='material-community'
            />
            <Text style={styles.timeAndLocationText}>{this.state.meetingInformation.time}</Text>
          </View>

          <View style={styles.timeAndLocationContainer}>
            <Icon
              name='map-marker'
              type='material-community'
            />
            <Text style={styles.timeAndLocationText}>{this.state.meetingInformation.location}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title='Boka möte'
              buttonStyle={styles.button}
              onPress={() => { this.navigateReviewMeeting(this.state.meetingInformation) }}
            />
          </View>

        </View>

      </View >

    )
  }
}

const mapHeight = 150;
const imageSize = 80;
const imagePosition = mapHeight - (imageSize / 2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  mapContainer: {
    height: mapHeight,
    width: '100%'
  },
  content: {
    flex: 1,
    padding: 15,
  },
  meetingTitleContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  meetingTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'green'
  },
  profilPic: {
    height: imageSize,
    width: imageSize,
    borderRadius: 20,
    marginRight: 10
  },
  leaderContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leaderInfo: {
    flexDirection: 'column',
  },
  meetingDescContainer: {
    flexDirection: 'column',
    paddingTop: 10,
    marginBottom: 5
  },
  careerInfoText1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(45,48,71)',
    marginBottom: 3
  },
  careerInfoText2: {
    fontSize: 16,
    color: 'rgb(45,48,71)'
  },
  rating: {
    height: 40,
    width: 250
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    bottom: 0
  },
  button: {
    width: 200,
    borderRadius: 5,
    backgroundColor: 'green'
  },
  timeAndLocationContainer: {
    flexDirection: 'row',
    padding: 8,
  },
  timeAndLocationText: {
    color: 'green',
    marginLeft: 10
  }
})