import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, FlatList, ActivityIndicator, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import Colors from '../styles/Colors';
import { Images } from '../resources/images';
import { Meeting } from '../components';
import Turbo from 'turbo360';
import config from '../config';
import { connect } from 'react-redux';
import { MeetingActions } from '../redux/MeetingsRedux';

class HomeScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      listCategories: [
        { image: Images.business, id: 1 },
        { image: Images.politics, id: 2 },
        { image: Images.programming, id: 3 }
      ]
    }

    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {
    this.props.getMeetings();
    this.props.setUser();
  }

  navigateMeeting(item) {
    this.props.navigation.navigate('MeetingScreen', { id: item.id });
  }

  navigateEntrants(item) {
    this.props.navigation.navigate('EntrantScreen', { meeting: item });
  }


  render() {

    return (

      <ScrollView style={styles.container}>
        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Topp-betyg</Text>
        </View>

        <View>

          <FlatList
            data={this.state.listCategories}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            renderItem={({ item }) =>
              <TouchableOpacity onPress={() => { console.log(this.props.user) }} style={styles.cardContainer}>
                <Image source={item.image} style={styles.image} resizeMode='stretch' />
              </TouchableOpacity>
            }
          />

        </View>

        <Divider style={{ marginVertical: 10 }} />

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Populära kategorier</Text>
        </View>

        <View>

          <FlatList
            data={this.state.listCategories}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            renderItem={({ item }) =>
              <TouchableOpacity style={styles.cardContainer}>
                <Image source={item.image} style={styles.image} resizeMode='stretch' />
              </TouchableOpacity>
            }
          />

        </View>

        <Divider style={{ marginVertical: 10 }} />

        <View style={styles.categoriesContainer}>
          <Text style={styles.categoriesText}>Förslag i Göteborg</Text>
        </View>

        <View style={{ marginBottom: 20, paddingBottom: 5 }}>
          {this.props.isLoading ? <ActivityIndicator size='large' /> : null}
          <FlatList
            style={{ width: '100%' }}
            data={this.props.homePageMeetings}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <Meeting
                key={item.id}
                {...item}
                navigateMeeting={this.navigateMeeting.bind(this, { ...item })}
                navigateEntrants={() => { this.navigateEntrants({ ...item }) }}
              />
            }
          />
        </View>

      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    homePageMeetings: state.meetings.homePageMeetings,
    isLoading: state.meetings.isLoading,
    user: state.meetings.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMeetings: (data) => dispatch((MeetingActions.getMeetings(data))),
    setUser: (data) => dispatch((MeetingActions.setUser(data))),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F8F8F8',
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
    marginRight: 10,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 10
  }
})