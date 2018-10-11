import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, FlatList, ActivityIndicator, AsyncStorage } from 'react-native';
import { Text } from 'react-native-elements';
import Colors from '../styles/Colors';
import { Images } from '../resources/images';
import { Meeting } from '../components';
import Turbo from 'turbo360';
import config from '../config';
import utils from '../utils';

export default class HomeScreen extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      meetings: [],
      loading: true,
    }

    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {
    this.fetchMeetings();
  }

  fetchMeetings = () => {
    utils.fetchMeetings('meeting')
      .then(responseJson => {
        this.setState({
          meetings: responseJson.data,
          loading: false
        })
      })
      .catch(err => {
        console.log(err);
        this.setState({
          loading: false
        })
      })
  }

  navigateMeeting(item) {
    this.props.navigation.navigate('MeetingScreen', { id: item.id, updateScreen: this.fetchMeetings.bind(this) });
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

        <View style={{ marginBottom: 20, paddingBottom: 5 }}>
          {this.state.loading ? <ActivityIndicator size='large' /> : null}
          <FlatList
            style={{ width: '100%' }}
            data={this.state.meetings}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Meeting
                {...item}
                nav={this.navigateMeeting.bind(this, { ...item })}
              />
            }
          />
        </View>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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