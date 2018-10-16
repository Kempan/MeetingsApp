import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator, AsyncStorage } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import { Button } from '../components';
import { Images } from '../resources/images';
import Turbo from 'turbo360';
import config from '../config';

export default class MeetingScreen extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      meeting: null,
      loading: true,
      attendants: [],
      meetingIsBooked: false
    }
    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {
    this.fetchMeeting();
  }

  fetchMeeting = () => {
    const meetingId = this.props.navigation.state.params.id;
    this.turbo.fetchOne('meeting', meetingId)
      .then(data => {
        this.setState({
          meeting: data,
          loading: false,
          attendants: data.attendants
        })
      })
      .then(() => {
        AsyncStorage.getItem(config.userIdKey)
          .then(key => {
            this.state.attendants.forEach(item => {
              if (item === key) {
                this.setState({
                  meetingIsBooked: true
                })
              } else {
                this.setState({
                  meetingIsBooked: false
                })
              }
            })
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  //UPPDATERAR EJ USER MEETING SCREEN, FIX
  bookMeeting() {
    AsyncStorage.getItem(config.userIdKey)
      .then(key => {
        const newAttendants = [...this.state.attendants];
        newAttendants.push(key);
        this.turbo.updateEntity('meeting', this.state.meeting.id, { attendants: newAttendants })
          .then(data => {
            this.setState({
              meetingIsBooked: true
            })
          })
          .catch(err => {
            console.log(err);
          })
      });
    alert('Du har bokat ' + this.state.meeting.title + ' med ' + this.state.meeting.leader + '.');
    this.props.navigation.navigate('Meetings');
  }

  //FUNKAR KASST
  cancelMeeting() {
    AsyncStorage.getItem(config.userIdKey)
      .then(key => {
        const filterAttendants = this.state.attendants.filter(item => {
          return item !== key;
        });
        this.turbo.updateEntity('meeting', this.state.meeting.id, { attendants: filterAttendants })
      })
      .catch(err => {
        console.log(err);
      })
    alert('Du har avbokat ' + this.state.meeting.title + ' med ' + this.state.meeting.leader + '.')
    this.navigateMeetings();
  }

  navigateMeetings = () => {
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate('Meetings');
    params.updateScreen();
  }

  render() {

    const { meeting } = this.state;

    const bookedButtonTitle = this.state.meetingIsBooked ? 'Avboka möte' : 'Boka möte';
    const buttonOnpress = this.state.meetingIsBooked ? () => { this.cancelMeeting() } : () => { this.bookMeeting() };

    const bookedButtonStyle = [styles.button];
    const bookedButton = this.state.meetingIsBooked ? { backgroundColor: 'red' } : { backgroundColor: 'green' };
    bookedButtonStyle.push(bookedButton);

    return (

      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator size='large' /> : (
          <View style={styles.container}>
            <View style={styles.mapContainer}>
              <Image source={require('../resources/images/map.png')} style={{ height: '100%', width: '100%' }} />
            </View>

            <View style={styles.content}>

              <View style={styles.meetingTitleContainer}>
                <Text style={styles.meetingTitleText}>{meeting.title}</Text>
              </View>

              <View style={styles.leaderContainer}>

                <Image
                  source={Images.profilPic}
                  style={styles.profilPic}
                />

                <View style={styles.leaderInfo}>
                  <Text style={styles.careerInfoText1}>{meeting.leader}</Text>
                  <Text style={styles.careerInfoText2}>{meeting.leaderDesc}</Text>
                  <Text style={styles.careerInfoText2}>BRT: {meeting.rating}  <Image style={styles.rating} source={Images.rating} /></Text>
                </View>

              </View>

              <View style={styles.meetingDescContainer}>
                <Text style={styles.careerInfoText1}>Mötesbeskrivning</Text>
                {/* <Text style={styles.careerInfoText2}>Jag kommer att hålla en sammankomst för oss med intresse av programmeringsspråket 'React Native' eller generell programmering. Det kommer att vara ett öppet och frispråkigt möte där tanken är att dela med sig och ta del av nya tillvägagångssätt och ideér.</Text> */}
                <Text style={styles.careerInfoText2}>{meeting.meetingDesc}</Text>
              </View>

              <View style={styles.timeAndLocationContainer}>
                <Icon
                  name='clock'
                  type='material-community'
                />
                <Text style={styles.timeAndLocationText}>{meeting.dateTime}</Text>
              </View>

              <View style={styles.timeAndLocationContainer}>
                <Icon
                  name='map-marker'
                  type='material-community'
                />
                <Text style={styles.timeAndLocationText}>{meeting.location}</Text>
              </View>

              <View style={styles.buttonContainer}>
                <Button
                  title={bookedButtonTitle}
                  buttonStyle={bookedButtonStyle}
                  onPress={buttonOnpress}
                />
              </View>

            </View>
          </View>
        )}
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
    width: '100%',
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
    marginTop: 15
  },
  button: {
    width: '100%',
    borderRadius: 5,
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