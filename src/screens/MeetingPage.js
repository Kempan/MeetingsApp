import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Icon } from 'react-native-elements';
import { Images } from '../resources/images';

export default class MeetingPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      time: '',
      location: '',
      title: '',
      leader: '',
      leaderDesc: '',
      rating: '',
      id: null
    }
  }

  componentDidMount() {
    const meetingInfo = this.props.navigation.state.params.message;
    this.setState({
      time: meetingInfo.time,
      location: meetingInfo.location,
      title: meetingInfo.title,
      leader: meetingInfo.leader,
      leaderDesc: meetingInfo.leader,
      rating: meetingInfo.rating,
      id: meetingInfo.id
    })
  }

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.mapContainer}>
          <Image source={require('../resources/images/map.png')} style={{ height: '100%', width: '100%' }} />
        </View>

        <View style={styles.content}>

          <View style={styles.meetingTitleContainer}>
            <Text style={styles.meetingTitleText}>{this.state.title}</Text>
          </View>

          <View style={styles.leaderContainer}>

            <Image
              source={Images.profilPic}
              style={styles.profilPic}
            />

            <View style={styles.leaderInfo}>
              <Text style={styles.careerInfoText1}>{this.state.leader}</Text>
              <Text style={styles.careerInfoText2}>{this.state.leaderDesc}</Text>
              <Text style={styles.careerInfoText2}>BRT: {this.state.rating}  <Image style={styles.rating} source={Images.rating} /></Text>
            </View>

          </View>

          <View style={styles.meetingDescContainer}>
            <Text style={styles.careerInfoText1}>Mötesbeskrivning</Text>
            <Text style={styles.careerInfoText2}>Jag kommer att hålla en sammankomst för oss med intresse av programmeringsspråket 'React Native' eller generell programmering. Det kommer vara ett öppet och frispråkigt möte där tanken är att dela med sig och ta del av nya tillvägagångssätt och ideér.</Text>
          </View>

          <View style={styles.timeAndLocationContainer}>
            <Icon
              name='clock'
              type='material-community'
            />
            <Text style={styles.timeAndLocationText}>{this.state.time}</Text>
          </View>

          <View style={styles.timeAndLocationContainer}>
            <Icon
              name='map-marker'
              type='material-community'
            />
            <Text style={styles.timeAndLocationText}>{this.state.location}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button
              title='Boka möte'
              buttonStyle={styles.button}
              onPress={() => { }}
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
  },
  mapContainer: {
    height: mapHeight,
    width: '100%'
  },
  content: {
    flex: 1,
    padding: 15,
    backgroundColor: 'rgb(45,48,71)',
  },
  meetingTitleContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10
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
    paddingTop: 10
  },
  careerInfoText1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10
  },
  careerInfoText2: {
    fontSize: 16,
    color: 'white'
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