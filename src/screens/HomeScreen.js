import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator } from 'react-native';
import { Button, Text } from 'react-native-elements';
import config from '../config';
import Colors from '../styles/Colors';
import { Images } from '../resources/images';

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true
    }
  }

  componentDidMount() {

  }

  render() {

    return (

      <View style={styles.container}>

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

      </View >
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