import React from 'react';
import { View, StyleSheet, TextInput, ActivityIndicator, FlatList, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import { Button, Message } from '../components';
import config from '../config';
import { connect } from 'react-redux';
import utils from '../utils';
import moment from 'moment';

export class MeetingMessageScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      meeting: null,
      comment: {
        user: this.props.user,
        message: '',
        date: null
      },
      loading: true
    }
  }

  componentDidMount() {
    const date = moment(new Date()).format('DD-MM-YYYY');
    this.setState({
      meeting: this.props.navigation.state.params.meeting,
      loading: false,
      comment: {
        ...this.state.comment,
        date: date
      }
    })
  }

  updateText(text) {
    this.setState({
      comment: {
        ...this.state.comment,
        message: text
      }
    })
  }

  submitComment(comment) {
    const newComment = [...this.state.meeting.comments];
    newComment.push(comment);
    return utils.createComment(this.state.meeting.id, newComment)
      .then(resp => {
        this.setState({
          meeting: resp.data,
          ...this.state.comment,
          message: ''
        })
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
    console.log('möte: ' + this.state.meeting)
    return (

      <View style={styles.container}>
        <Text style={styles.commentsText}>KOMMENTARER</Text>
        {this.state.meeting.comments.length <= 0 ?
          <View style={styles.messagesContainer}>
            <Text style={{ alignSelf: 'center', fontSize: 20 }}>Inga meddelanden</Text>
          </View>
          :
          <ScrollView style={styles.messagesContainer}>
            <FlatList
              data={this.state.meeting.comments}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <Message
                  message={item.message}
                  user={item.user}
                  date={item.date}
                />
              }
            />
          </ScrollView>

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
            onPress={() => { this.submitComment(this.state.comment) }}
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