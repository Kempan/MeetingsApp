import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-elements';
import Colors from '../styles/Colors';
import { Images } from '../resources/images';
import { Meeting } from '../components';

export default class HomeScreen extends React.Component {



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
  }

  navigateMeeting(meeting) {
    this.props.navigation.navigate('MeetingScreen', { meeting });
  }

  render() {

    return (

      <ScrollView style={styles.container}>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Topp-betyg</Text>
        </View>

        <View>

          <ScrollView style={styles.genreContainer} horizontal={true}>

            <TouchableOpacity style={styles.cardContainer}>
              <ImageBackground source={Images.business} style={styles.image} resizeMode='stretch'>

              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardContainer}>
              <ImageBackground source={Images.politics} style={styles.image}>

              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardContainer}>
              <ImageBackground source={Images.programming} style={styles.image}>

              </ImageBackground>
            </TouchableOpacity>

          </ScrollView>

        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Populära kategorier</Text>
        </View>

        <View>

          <ScrollView style={styles.genreContainer} horizontal={true}>

            <TouchableOpacity style={styles.cardContainer}>
              <ImageBackground source={Images.business} style={styles.image} resizeMode='stretch'>

              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardContainer}>
              <ImageBackground source={Images.politics} style={styles.image}>

              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cardContainer}>
              <ImageBackground source={Images.programming} style={styles.image}>

              </ImageBackground>
            </TouchableOpacity>

          </ScrollView>

        </View>

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Förslag</Text>
        </View>

        <View>

          <View style={styles.categoriesContainer}>
            <Meeting content={this.state.meetings} nav={() => { this.navigateMeeting(this.state.meetings) }} />
          </View>

        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 16,
    backgroundColor: 'white',
  },
  categoriesText: {
    fontSize: 20,
    color: Colors.blue,
    marginBottom: 10
  },
  genreContainer: {
    height: 110,
    marginBottom: 20
  },
  cardContainer: {
    height: 100,
    width: 200,
    borderRadius: 10,
    marginRight: 10
  },
  image: {
    height: '100%',
    width: '100%',
  }
})