import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, Icon, FormInput, FormLabel } from 'react-native-elements';
import { Images } from '../resources/images';

export default class ReviewMeeting extends React.Component {

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
    const meetingInfo = this.props.navigation.state.params.meetingInformation;
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

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.content}>

          <View style={styles.meetingTitleContainer}>
            <Text style={styles.meetingTitleText}>{this.state.meetingInformation.title}</Text>
          </View>

          <View style={styles.leaderInfoContainer}>

            <Image
              source={Images.profilPic}
              style={styles.profilPic}
            />

            <View style={styles.leaderInfo}>
              <Text style={styles.careerInfoText1}>{this.state.meetingInformation.leader}</Text>
              <Text style={styles.careerInfoText2}>{this.state.meetingInformation.leaderDesc}</Text>
            </View>

          </View>

          <View style={styles.formContainer}>

            <Image source={Images.rating} style={{ height: 40, width: 250, marginBottom: 20 }} />

            {/* <FormLabel>Vad var bra med mötet?</FormLabel>
            <FormInput

            />
            <FormLabel>Vad var mindre bra med mötet?</FormLabel>
            <FormInput

            /> */}
            <FormLabel>Övriga kommentarer</FormLabel>
            <FormInput

            />
          </View>


          <View style={styles.buttonContainer}>
            <Button
              title='Skicka recension'
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
  content: {
    flex: 1,
    padding: 15,
    backgroundColor: 'rgb(45,48,71)',
    justifyContent: 'center'
  },
  meetingTitleContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20
  },
  meetingTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white'
  },
  profilPic: {
    height: imageSize,
    width: imageSize,
    borderRadius: 20,
    marginRight: 10
  },
  leaderInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leaderInfo: {
    flexDirection: 'column',
  },
  careerInfoText1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5
  },
  careerInfoText2: {
    fontSize: 16,
    color: 'white'
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
  formContainer: {
    paddingTop: 20,
    marginBottom: 20,
    alignItems: 'center'
  }
})