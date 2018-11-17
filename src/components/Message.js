import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import Turbo from 'turbo360';

export class Message extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      created: false,
    }
    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {

    console.log(this.props.comment)
    //KÖRS BARA EN GÅNG, NÄR MAN GÖR NY COMMENT ANVÄNDS SENASTE SUBJECT ID
    //ANVÄNDER SENASTE ID INTE DET SOM GÖRS
    // utils.fetchUser(this.props.comment.subject)
    //   .then(resp => {
    //     console.log(resp)
    //     this.setState({
    //       fromUser: resp,
    //       loading: false
    //     })
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   })
  }

  removeComment(id) {
    this.turbo.removeEntity('kommentar', id)
      .then(resp => {
        alert('Kommentaren har tagits bort');
        this.props.fetchComments();
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {

    const myMessage = this.props.comment.fromUser.id == this.props.user.id;
    if (this.state.loading == true) {
      return null;
    }


    return (
      <TouchableOpacity onPress={() => { }} style={styles.messageContainer}>
        <View style={styles.profilPicContainer}>
          <Image
            source={{ uri: this.props.comment.fromUser.image }}
            style={styles.profilPic}
          />
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.topRow}>
            <Text style={styles.name}>{this.props.comment.fromUser.firstName} {this.props.comment.fromUser.lastName}</Text>
            {myMessage ? <TouchableOpacity onPress={() => { this.removeComment(this.props.comment.id) }}><Text style={{ fontSize: 20 }}>X</Text></TouchableOpacity> : null}
          </View>
          <Text>{this.props.comment.timestamp}</Text>
          <Divider style={styles.divider} />
          <Text>{this.props.comment.text}</Text>
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