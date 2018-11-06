import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';

export class Message extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      created: false,
    }
  }

  componentDidMount() {
    console.log(this.props)
    if (this.props.messageUser.id == this.props.user.id) {
      this.setState({
        created: true
      })
    }
  }

  removeMessage(id) {

    console.log(id)
  }

  render() {
    const { messageUser } = this.props;

    return (
      <TouchableOpacity onPress={() => { }} style={styles.messageContainer}>
        <View style={styles.profilPicContainer}>
          <Image
            source={{ uri: messageUser.image }}
            style={styles.profilPic}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.topRow}>
            <Text style={styles.name}>{messageUser.firstName} {messageUser.lastName}</Text>
            {this.state.created ? <TouchableOpacity onPress={() => { this.removeMessage() }}><Text style={{ fontSize: 20 }}>X</Text></TouchableOpacity> : null}
          </View>
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
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
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