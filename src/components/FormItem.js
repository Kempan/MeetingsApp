import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { ColorTheme, Fonts } from '../styles/AppTheme';
import Colors from '../styles/Colors';

const FORM_RADIUS = 0;
const PADDING_HORIZONTAL = 12;

const LABEL_HEIGHT = 20;
const INPUT_HEIGHT = 36;
const ERROR_HEIGHT = 20;

const CONTENT_HEIGHT_TOP = (LABEL_HEIGHT + INPUT_HEIGHT);
const CONTENT_HEIGHT_BOTTOM = (ERROR_HEIGHT);

const styles = StyleSheet.create({
  itemContainer: {
    // Placeholder
  },
  itemContentTop: {
    height: CONTENT_HEIGHT_TOP,
    borderTopLeftRadius: FORM_RADIUS,
    borderTopRightRadius: FORM_RADIUS,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.25)',
    backgroundColor: Colors.white,
  },
  itemContentBottom: {
    height: CONTENT_HEIGHT_BOTTOM,
  },

  labelContainer: {
    height: LABEL_HEIGHT,
    paddingLeft: PADDING_HORIZONTAL,
    paddingRight: PADDING_HORIZONTAL,
    justifyContent: 'flex-end',
  },
  labelText: StyleSheet.flatten([
    Fonts.caption,
    {
      margin: 0,
      padding: 0,
    }
  ]),
  inputContainer: {
    height: INPUT_HEIGHT,
    paddingLeft: PADDING_HORIZONTAL,
    paddingRight: PADDING_HORIZONTAL,
  },
  inputText: StyleSheet.flatten([
    Fonts.label,
    {
      margin: 0,
      padding: 0,
      textAlignVertical: 'bottom',
    }
  ]),

  errorContainer: {
    height: ERROR_HEIGHT,
    paddingLeft: PADDING_HORIZONTAL,
    paddingRight: PADDING_HORIZONTAL,
    justifyContent: 'center',
  },
  errorText: StyleSheet.flatten([
    Fonts.caption,
    {
      margin: 0,
      padding: 0,
      color: ColorTheme.error,
      textAlignVertical: 'bottom',
    }
  ]),
});

export class FormItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: null,
    }
    this.validate = this.validate.bind(this);
    this.setError = this.setError.bind(this);
  }

  setValue(text) {
    this.setState((prevState) => ({
      ...prevState, value: text
    }));
  }

  setError(error) {
    this.setState((prevState) => ({
      ...prevState, error: error,
    }));
  }

  // Compares state value using validator property
  validate() {
    if (this.props.validator == null) return null;

    const validationError = this.props.validator(this.state.value);
    if (validationError) {
      this.setError(validationError);
      return null;
    } else {
      this.setError(null);
      return this.state.value;
    }
  }

  render() {
    // Merge default component style with custom styles
    const containerStyle = [
      styles.itemContainer,
      this.props.style
    ];

    const Label = this.props.hasOwnProperty('hide-label') ? null : (
      <View
        style={styles.labelContainer}
      >
        <Text style={styles.labelText}>
          {this.props.label ? this.props.label : ''}
        </Text>
      </View>
    );

    const Input = (
      <View style={styles.inputContainer}>
        <TextInput
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrect={false}
          {...this.props}
          style={styles.inputText}
          value={this.state.value}
          onChangeText={(input) => this.setValue(input)}
          underlineColorAndroid={'transparent'}
        />
      </View>
    );

    const Validation = this.props.hasOwnProperty('hide-error') ? null : (
      <View
        style={styles.errorContainer}
      >
        <Text style={styles.errorText}>
          {this.state.error ? this.state.error : ''}
        </Text>
      </View>
    );

    const styleContentTop = [styles.itemContentTop, (Label ? {} : {
      height: INPUT_HEIGHT
    })]

    return (
      <View style={containerStyle}>

        <View style={styleContentTop}>
          {Label}
          {Input}
        </View>

        <View style={styles.itemContentBottom}>
          {Validation}
        </View>

      </View>
    );
  }
}

export const FormItemStyle = styles;
