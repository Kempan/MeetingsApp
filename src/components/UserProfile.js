import React from 'react';
import { View, Text, StyleSheet, Image, AsyncStorage } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { Images } from '../resources/images';
import config from '../config';
import Turbo from 'turbo360';


export class UserProfile extends React.Component {

  constructor(props) {
    super(props);

    // this.state = {
    //   user: {}
    // }

    // this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {
    // AsyncStorage.getItem(config.userIdKey)
    //   .then(key => {
    //     console.log(key)
    //     this.turbo.fetchOne('user', key)
    //       .then(resp => {
    //         let newUser = Object.assign(this.state.user);
    //         newUser = resp;
    //         this.setState({
    //           user: newUser
    //         })
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       })
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  render() {

    // const { user } = this.state;

    return (

      <View style={styles.container}>
        <Text>HEJ</Text>
        {/* <View style={styles.curvedView}></View>

        <View style={styles.header}>

          <View style={styles.userContainer}>
            <Image source={Images.profilPic} style={styles.profilPic} />
            <Text style={styles.title}>{user.firstName} {user.lastName}</Text>
            <Text>Junior Developer, React-Native</Text>
            <Text>Inserve Technology</Text>
          </View>

          <View style={styles.iconsContainer}>
            <Icon onPress={() => { console.log(this.state.user) }} iconStyle={styles.bigIcons} size={60} name='linkedin-box' type='material-community' />
            <Icon iconStyle={[styles.bigIcons, { marginHorizontal: 20 }]} size={60} name='facebook-box' type='material-community' />
            <Icon iconStyle={styles.bigIcons} size={60} name='twitter-box' type='material-community' />
          </View>

        </View>

        <View style={styles.body}>

          <View style={styles.infoRow}>
            <Image source={Images.mail} style={styles.smallIcons} />
            <Text style={styles.infoText}>{user.email}</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={Images.phone} style={styles.smallIcons} />
            <Text style={styles.infoText}>{user.phoneNumber}</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={Images.address} style={styles.smallIcons} />
            <Text style={styles.infoText}>{user.address}</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={Images.chatBlue} style={styles.smallIcons} />
            <Text style={styles.infoText}>Create message</Text>
          </View>
          <View style={styles.infoRow}>
            <Image source={Images.addToGroup} style={styles.smallIcons} />
            <Text style={styles.infoText}>Add to group</Text>
          </View>

        </View> */}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    width: '100%',
    height: 280,
    backgroundColor: 'rgb(66, 134, 244)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  curvedView: {
    width: 105,
    height: 50,
    borderRadius: 50,
    transform: [
      { scaleX: 4 }
    ],
    backgroundColor: 'rgb(66, 134, 244)',
    justifyContent: 'center',
    bottom: 250,
    position: 'absolute'
  },
  userContainer: {
    alignItems: 'center'
  },
  profilPic: {
    height: 100,
    width: 100,
    borderRadius: 150 / 2,
    borderWidth: 2,
    borderColor: 'white'
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  bigIcons: {
    color: 'white'
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 35
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10
  },
  smallIcons: {
    height: 30,
    width: 30,
    marginRight: 10
  }
})