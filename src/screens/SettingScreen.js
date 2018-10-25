import React from 'react';
import { View, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import { Button } from '../components';
import config from '../config';
import { connect } from 'react-redux';

export class SettingScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  signOut() {
    AsyncStorage.removeItem(config.userIdKey)
      .then(resp => {
        this.props.navigation.navigate('Auth');
      })
  }

  navigate(screen) {
    this.props.navigation.navigate(screen);
  }

  render() {

    const { user } = this.props;

    return (

      <View style={styles.container}>

        <View style={styles.row}>
          <Text style={styles.titles}>MITT KONTO</Text>
        </View>
        <Divider style={styles.divider} />

        <TouchableOpacity onPress={() => { this.navigate('NameScreen') }} style={styles.row}>
          <Text style={styles.titles}>Namn</Text>
          <Text style={styles.text}>{user.firstName} {user.lastName}</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />

        <TouchableOpacity onPress={() => { this.navigate('EmailScreen') }} style={styles.row}>
          <Text style={styles.titles}>Email</Text>
          <Text style={styles.text}>{user.email}</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />

        <TouchableOpacity onPress={() => { this.navigate('PhoneScreen') }} style={styles.row}>
          <Text style={styles.titles}>Telefon</Text>
          <Text style={styles.text}>{user.phoneNumber}</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />

        <TouchableOpacity onPress={() => { this.navigate('AddressScreen') }} style={styles.row}>
          <Text style={styles.titles}>Address</Text>
          <Text style={styles.text}>{user.address}</Text>
        </TouchableOpacity>
        <Divider style={styles.divider} />

        <Button
          title='Sign out'
          onPress={() => { this.signOut() }}
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  row: {

  },
  titles: {
    fontSize: 18,
    letterSpacing: 1,
    fontFamily: 'notoserif',
    fontWeight: 'bold',
    marginVertical: 5
  },
  text: {
    fontSize: 16,
    color: 'grey'
  },
  divider: {
    backgroundColor: 'grey',
    marginVertical: 5
  },
  button: {
    width: '100%',
    marginTop: 15,
    backgroundColor: 'red'
  }
})