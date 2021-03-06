import React from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList, Text } from 'react-native';
import { EntrantCard } from '../components';
import Turbo from 'turbo360';
import config from '../config';

export default class EntrantScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      entrants: null,
      loading: true
    }
  }

  componentWillMount() {
    const entrants = this.props.navigation.state.params.meeting.attendants;
    this.setState({
      entrants: entrants,
      loading: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loading ? <ActivityIndicator size='large' /> : null}
        {!this.state.loading && this.state.entrants.length > 0 ?
          <FlatList
            data={this.state.entrants}
            keyExtractor={item => item.id}
            renderItem={(entrantId) =>
              <EntrantCard entrantId={entrantId} />
            }
          />

          :

          <View><Text>Inga deltagare</Text></View>

        }




      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})