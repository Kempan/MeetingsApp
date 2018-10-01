import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { Images } from '../resources/images';
import { Meeting } from '../components';
import config from '../config';
import Turbo from 'turbo360';


export default class UserMeetingScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      meetings: [
        {
          time: '11:30, 25 Sep 2018',
          location: 'Karl Johansgatan 15, Majorna',
          title: 'React-native',
          leader: 'Joakim Edwardh',
          leaderDesc: 'Junior Developer, React Native',
          rating: '96% +',
          id: 1
        },
        {
          time: '09:30, 28 Sep 2018',
          location: 'Bokvägen 11, Mölnlycke',
          title: 'React-native',
          leader: 'Joakim Edwardh',
          leaderDesc: 'Junior Developer, React Native',
          rating: '96% +',
          id: 2
        },
        {
          time: '17:30, 2 Okt 2018',
          location: 'Magasinsgatan 7, Göteborg',
          title: 'React-native',
          leader: 'Joakim Edwardh',
          leaderDesc: 'Junior Developer, React Native',
          rating: '96% +',
          id: 3
        }
      ]
    }

    this.turbo = Turbo({ site_id: config.turboAppId });

  }

  componentDidMount() {
    // const { meetings } = this.state;
    // this.turbo.create('Meeting', { meetings })
    //   .then(resp => {
    //     console.log(resp)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })

    // this.turbo.fetchOne('Meeting', '5bb209effc93910014b0ea96')
    //   .then(resp => {
    //     console.log(resp)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   })
  }

  navigateMeeting(meeting) {
    this.props.navigation.navigate('MeetingScreen', { meeting });
  }

  render() {

    // const meetings = this.state.meetings.map((meeting, key) => {

    //   return (
    //     <TouchableOpacity
    //       key={key}
    //       style={styles.meetingContainer}
    //       onPress={() => {
    //         this.navigateMeeting(meeting)
    //       }}
    //     >

    //       <Image source={Images.profilPic} style={styles.profilPic} />



    //       <View style={styles.infoContainer}>
    //         <View style={styles.infoRow1}>
    //           <View>
    //             <Text style={styles.titleText}>{meeting.title}</Text>
    //           </View>
    //           <View>
    //             <Text style={styles.textStyle}>{meeting.time}</Text>
    //           </View>
    //         </View>
    //         <View style={styles.infoRow1}>
    //           <Text style={styles.textStyle}>Vem: {meeting.leader}</Text>

    //           <Text style={styles.textStyle}>Rating: {meeting.rating}</Text>
    //         </View>
    //       </View>



    //     </TouchableOpacity>
    //   )
    // })

    return (


      <ScrollView style={styles.container}>

        <View style={{ paddingBottom: 20 }}>
          <Meeting content={this.state.meetings} nav={() => { this.navigateMeeting(this.state.meetings) }} />
        </View>

      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white'
  },
  meetingContainer: {
    borderWidth: 0.3,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderColor: 'grey',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    elevation: 5,
    position: 'relative',
    flexWrap: 'wrap'
  },
  infoContainer: {
    flex: 1
  },
  infoRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 5
  },
  textStyle: {
    color: 'rgb(45,48,71)',
    fontSize: 15
  },
  profilPic: {
    height: 75,
    width: 75,
    borderRadius: 20
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center'
  },
  titleText: {
    fontSize: 18,
    color: 'rgb(66, 134, 244)',
    fontWeight: 'bold',
  }
})