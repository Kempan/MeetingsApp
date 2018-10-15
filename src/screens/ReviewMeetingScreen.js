import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Button, Text, FormInput, FormLabel } from 'react-native-elements';
import { Images } from '../resources/images';
import config from '../config';
import Turbo from 'turbo360';

export default class ReviewMeetingScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      meeting: null,
      loading: false,
      comment: ''
    }
    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {
    // const meetingId = this.props.navigation.state.params;
    // this.turbo.fetchOne('meeting', meetingId)
    //   .then(resp => {
    //     this.setState({
    //       meeting: resp,
    //       loading: false
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err.message)
    //   })
  }

  render() {

    const { meeting } = this.state;

    return (

      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator size='large' /> : (
          <View style={styles.content}>

            <View style={styles.meetingTitleContainer}>
              <Text style={styles.meetingTitleText}>{meeting.title}</Text>
            </View>

            <View style={styles.leaderInfoContainer}>

              <Image
                source={Images.profilPic}
                style={styles.profilPic}
              />

              <View style={styles.leaderInfo}>
                <Text style={styles.careerInfoText1}>{meeting.leader}</Text>
                <Text style={styles.careerInfoText2}>{meeting.leaderDesc}</Text>
              </View>

            </View>

            <View style={styles.formContainer}>
              <Image source={Images.rating} style={{ height: 40, width: 250, marginBottom: 20 }} />
              <FormLabel>Övriga kommentarer</FormLabel>
              <FormInput />
            </View>

            <View style={styles.buttonContainer}>
              <Button
                title='Skicka recension'
                buttonStyle={styles.button}
                onPress={() => { }}
              />
            </View>

          </View>
        )}

      </View >
    )
  }
}

const imageSize = 80;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 15,
    backgroundColor: 'white',
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
    color: 'rgb(66, 134, 244)'
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
    color: 'black',
    marginBottom: 5
  },
  careerInfoText2: {
    fontSize: 16,
    color: 'black'
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