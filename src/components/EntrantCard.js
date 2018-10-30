import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import { Images } from '../resources/images';
import Colors from '../styles/Colors';
import Turbo from 'turbo360';
import config from '../config';
import utils from '../utils';

export class EntrantCard extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      entrant: null,
      loading: true
    }

    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {
    const entrantId = this.props.entrantId.item;
    utils.fetchUser(entrantId)
      .then(entrant => {
        this.setState({
          entrant: entrant,
          loading: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  upperCase = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {

    if (this.state.loading == true) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    const { entrant } = this.state;
    let firstName = this.upperCase(entrant.firstName);
    let lastName = this.upperCase(entrant.lastName);
    let email = this.upperCase(entrant.email);

    return (

      <View>
        {this.state.loading ? <ActivityIndicator /> : (
          <TouchableOpacity
            style={styles.meetingContainer}
            onPress={() => { this.props.nav(this.state.entrant) }}
          >
            <Image source={{ uri: entrant.image }} style={styles.profilPic} />

            <View style={styles.content}>

              <View style={styles.infoRow1}>

                <Text style={styles.titleText}>{firstName} {lastName}</Text>

                <View style={styles.ratingContainer}>
                  <Text style={styles.textStyle}>Rating: 97%</Text>
                  <Image source={Images.rating} style={{ height: 10, width: 50 }} />
                </View>

              </View>

              <Divider style={styles.divider} />

              <View style={styles.infoRow1}>
                <Text style={styles.textStyle}>{email}</Text>
              </View>


              <View style={styles.infoRowBot}>

              </View>

            </View>

          </TouchableOpacity>
        )}

      </View>
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
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center'
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
    height: 20,
    width: 20,
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