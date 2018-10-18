import React from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Text } from 'react-native';
import { EntrantCard } from '../components';


export default class EntrantScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      entrants: [],
      loading: true
    }
  }

  componentWillMount() {
    const entrants = this.props.navigation.state.params.meeting.attendants;
    console.log(entrants)
    this.setState({
      entrants: entrants,
      loading: false
    })
  }

  navigateToProfileScreen(userId) {
    this.props.navigation.navigate('UserProfileScreen', { userId: userId })
  }

  render() {

    return (

      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator size='large' /> : null}
        {!this.state.loading && this.state.entrants.length > 0 ?
          <FlatList
            data={this.state.entrants}
            keyExtractor={(index) => index.toString()}
            renderItem={(entrantId) =>
              <EntrantCard
                entrantId={entrantId}
                nav={() => this.navigateToProfileScreen(entrantId.item)}
              />
            }
          />

          :

          <View style={styles.container2}><Text style={styles.text}>Inga deltagare</Text></View>

        }
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontFamily: 'notoserif',
    fontSize: 20,
    marginTop: 15,
    letterSpacing: 1,
    alignSelf: 'center'
  }
})