import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import { Images } from '../resources/images';
import Colors from '../styles/Colors';

export class Message extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.item);

  }

  render() {
    const { user } = this.props;
    return (
      <TouchableOpacity onPress={() => { }} style={styles.messageContainer}>
        <View style={styles.profilPicContainer}>
          <Image
            source={Images.profilPic}
            style={styles.profilPic}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.name}>{user.firstName} {user.lastName}</Text>
          <Text>{this.props.date}</Text>
          <Divider style={styles.divider} />
          <Text>{this.props.message}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  profilPic: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  messageContainer: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15
  },
  profilPicContainer: {
    flex: 0.15,
  },
  contentContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    flex: 0.85
  },
  name: {
    letterSpacing: 0.5,
    fontWeight: 'bold'
  },
  divider: {
    backgroundColor: 'black',
    marginVertical: 10
  }
})