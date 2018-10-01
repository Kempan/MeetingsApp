import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-elements';
import { Images } from '../resources/images';

export class Meeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const meetings = this.props.content.map((meeting, key) => {

      return (
        <TouchableOpacity
          key={key}
          style={styles.meetingContainer}
          onPress={() => {
            this.props.nav()
          }}
        >

          <Image source={Images.profilPic} style={styles.profilPic} />



          <View style={styles.infoContainer}>
            <View style={styles.infoRow1}>
              <View>
                <Text style={styles.titleText}>{meeting.title}</Text>
              </View>
              <View>
                <Text style={styles.textStyle}>{meeting.time}</Text>
              </View>
            </View>
            <View style={styles.infoRow1}>
              <Text style={styles.textStyle}>Vem: {meeting.leader}</Text>

              <Text style={styles.textStyle}>Rating: {meeting.rating}</Text>
            </View>
          </View>



        </TouchableOpacity>
      )
    })

    return (


      <ScrollView style={styles.container}>

        <View style={{ paddingBottom: 20 }}>
          {meetings}
        </View>

      </ScrollView>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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