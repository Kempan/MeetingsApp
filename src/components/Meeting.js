import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import { Images } from '../resources/images';
import Colors from '../styles/Colors';

export class Meeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <TouchableOpacity
        key={this.props.attendants.length}
        style={styles.meetingContainer}
        onPress={() => {
          this.props.navigateMeeting()
        }}
      >

        <Image source={{ uri: this.props.image }} style={styles.profilPic} />

        <View style={styles.content}>

          <View style={styles.infoRow1}>
            <Text style={styles.titleText}>{this.props.title}</Text>
            <Text style={styles.textStyle}>{this.props.dateTime}</Text>
          </View>

          <View style={styles.infoRow1}>
            <Text style={styles.textStyle}>{this.props.leader}</Text>

            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Text style={styles.textStyle}>Rating: {this.props.rating}</Text>
              <Image source={Images.rating} style={{ height: 10, width: 50 }} />
            </View>

          </View>

          <Divider style={styles.divider} />

          <View style={styles.infoRowBot}>

            <TouchableOpacity style={styles.chatContainer} onPress={() => { this.props.navigateEntrants() }}>
              <Image source={Images.users} style={styles.usersImage} />
              <Text style={styles.textStyle}>{this.props.attendants.length}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.chatContainer} onPress={() => { this.props.navigateMessage() }}>
              <Image source={Images.chat} style={styles.chatImage} />
              <Text>2</Text>
            </TouchableOpacity>

          </View>

        </View>

      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  meetingContainer: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    backgroundColor: Colors.white,
    borderColor: 'grey',
    marginTop: 20,
    flexDirection: 'row',
    padding: 5,
    elevation: 1,
    flexWrap: 'wrap',
    padding: 16
  },
  content: {
    flex: 1,
    paddingLeft: 16
  },
  infoRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  divider: {
    marginVertical: 10
  },
  textStyle: {
    color: 'rgb(45,48,71)',
    fontSize: 12
  },
  profilPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  titleText: {
    fontSize: 18,
    color: 'rgb(66, 134, 244)',
    fontWeight: 'bold',
  },
  usersImage: {
    height: 25,
    width: 25,
    marginRight: 5
  },
  chatImage: {
    height: 35,
    width: 35,
    marginRight: 5
  },
  infoRowBot: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})