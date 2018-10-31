import React from 'react';
import { View, StyleSheet, AsyncStorage, TouchableOpacity, TextInput, Image } from 'react-native';
import { Text, Divider } from 'react-native-elements';
import { Button } from '../components';
import config from '../config';
import { connect } from 'react-redux';
import { Images } from '../resources/images';

export class MeetingMessageScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: [
        'Träffade mycket nytt intressant folk och och coachen var grym. Kul med mycket folk sist, hoppas lika många dyker upp denna gången!',
        'Kul med mycket folk sist, hoppas lika många dyker upp denna gången!'
      ],
      message: ''
    }
  }

  componentDidMount() {
    // console.log(this.props.navigation.state.params.meeting)
  }

  updateText(text) {
    this.setState({
      message: text
    })
  }

  render() {

    const { user } = this.props;

    return (

      <View style={styles.container}>
        <Text style={styles.commentsText}>KOMMENTARER</Text>
        {this.state.comments.length <= 0 ?
          <View style={styles.messagesContainer}>
            <Text>Inga meddelanden</Text>
          </View>
          :
          <View style={styles.messagesContainer}>

            <View style={styles.messageContainer}>
              <View style={styles.profilPicContainer}>
                <Image
                  source={Images.profilPic}
                  style={styles.profilPic}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text>Joakim Edwardh</Text>
                <Text>2 weeks ago</Text>
                <Divider style={styles.divider} />
                <Text>{this.state.comments[0]}</Text>
              </View>
            </View>

            <View style={styles.messageContainer}>
              <View style={styles.profilPicContainer}>
                <Image
                  source={Images.profilPic}
                  style={styles.profilPic}
                />
              </View>
              <View style={styles.contentContainer}>
                <Text>Joakim Edwardh</Text>
                <Text>2 weeks ago</Text>
                <Divider style={styles.divider} />
                <Text>{this.state.comments[0]}</Text>
              </View>
            </View>
          </View>

        }
        <Divider style={styles.divider} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(text) => { this.updateText(text) }}
          />
          <Button
            title='kommentera'
            buttonStyle={styles.buttons}
            onPress={() => { console.log(this.state.message) }}
          />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(MeetingMessageScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  commentsText: {
    fontFamily: 'notoserif',
    fontSize: 20,
    margin: 5,
    letterSpacing: 1,
    marginBottom: 20
  },
  messagesContainer: {
    minHeight: 150,
    borderRadius: 5,
    width: '100%'
  },
  inputContainer: {
    marginTop: 10,
    width: '100%'
  },
  divider: {
    backgroundColor: 'black',
    marginVertical: 5
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    padding: 10,
  },
  buttons: {
    marginTop: 10,
    backgroundColor: 'rgb(66, 134, 244)',
  },
  profilPic: {
    height: 40,
    width: 40,
    borderRadius: 50
  },
  messageContainer: {
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10
  },
  profilPicContainer: {
    flex: 0.15,
    alignItems: 'center',
    paddingTop: 5
  },
  contentContainer: {
    padding: 5,
    flex: 0.85
  }
})