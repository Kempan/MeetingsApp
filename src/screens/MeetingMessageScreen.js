import React from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator, FlatList } from 'react-native';
import { Text } from 'react-native-elements';
import { Button, Message } from '../components';
import { connect } from 'react-redux';
import utils from '../utils';
import { MeetingActions } from '../redux/MeetingsRedux';
import Turbo from 'turbo360';


export class MeetingMessageScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      meeting: null,
      comments: null,
      newComment: '',
      loading: true
    }
    this.turbo = Turbo({ site_id: config.turboAppId });
  }

  componentDidMount() {
    this.setState({
      meeting: this.props.navigation.state.params.meeting
    }, () => {
      this.fetchComments(this.state.meeting.id);
    })
  }

  updateText(text) {
    this.setState({
      newComment: text
    })
  }

  fetchComments(id) {
    this.turbo.fetch('kommentar', { meeting: id })
      .then(resp => {
        this.setState({
          comments: resp,
          loading: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  submitComment(meetingId, comment, fromUser) {
    Turbo({ site_id: config.turboAppId }).create('kommentar', { meeting: meetingId, text: comment, fromUser: fromUser })
      .then(() => {
        this.fetchComments(this.state.meeting.id);
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    if (this.state.loading == true) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }

    return (

      <View style={styles.container}>
        <Text style={styles.commentsText}>KOMMENTARER</Text>
        {this.state.comments.length <= 0 ?
          <View style={styles.messagesContainer}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>Inga meddelanden</Text>
          </View>
          :
          <FlatList
            style={styles.messagesContainer}
            data={this.state.comments}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <Message
                comment={item}
                user={this.props.user}
                fetchComments={() => { this.fetchComments(this.state.meeting.id) }}
              />
            }
          />
        }


        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            underlineColorAndroid='transparent'
            onChangeText={(text) => { this.updateText(text) }}
          />
          <Button
            title='kommentera'
            buttonStyle={styles.buttons}
            onPress={() => { this.submitComment(this.state.meeting.id, this.state.newComment, this.props.user) }}
          />
          {/* <Button
            title='kommentera'
            buttonStyle={styles.buttons}
            onPress={() => {
              this.fetchComments(this.state.meeting.id)
            }}
          /> */}
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
    getMeetings: () => dispatch((MeetingActions.getMeetings()))
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
    width: '100%',
    paddingRight: 5
  },
  inputContainer: {
    marginTop: 10,
    width: '100%'
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
  }
})