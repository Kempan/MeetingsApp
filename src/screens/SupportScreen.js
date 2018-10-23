import React from 'react';
import { View, StyleSheet, AsyncStorage, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import { Button } from '../components';
import config from '../config';
import { connect } from 'react-redux';

export class SupportScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  signout() {
    AsyncStorage.removeItem(config.userIdKey);
    this.props.navigation.navigate('Auth');
  }

  render() {

    const { user } = this.props;

    return (

      <View style={styles.container}>

        <View style={styles.row}>
          <Text style={styles.titles}>MITT KONTO</Text>
        </View>
        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.titles}>Namn</Text>
          <Text style={styles.text}>{user.firstName} {user.lastName}</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.titles}>Email</Text>
          <Text style={styles.text}>{user.email}</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.titles}>Telefon</Text>
          <Text style={styles.text}>{user.phoneNumber}</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.titles}>Address</Text>
          <Text style={styles.text}>{user.address}</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />

        <Button
          title='Sign out'
          onPress={() => { this.signout() }}
          buttonStyle={styles.button}
        />
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SupportScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  row: {

  },
  titles: {
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: 'notoserif',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 16,
  },
  divider: {
    backgroundColor: 'grey',
    marginVertical: 5
  },
  button: {
    backgroundColor: 'rgb(66, 134, 244)',
    width: 150,
    borderRadius: 15,
    borderWidth: 2,
  }
})