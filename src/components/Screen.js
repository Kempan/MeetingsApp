import React, { Component } from 'react';
import { Platform, StyleSheet, View, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  }
});

export class Screen extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    // Get default container style
    var containerStyle = [styles.container];

    // If specified as props...
    // ...append padding
    if (this.props.padding != null) {
      containerStyle = [
        containerStyle, {
          paddingLeft: this.props.padding,
          paddingRight: this.props.padding,
          paddingTop: this.props.padding,
          paddingBottom: this.props.padding,
        }
      ]
    }
    // ...append horizontal padding
    if (this.props.paddingHorizontal != null) {
      containerStyle = [
        containerStyle, {
          paddingLeft: this.props.paddingHorizontal,
          paddingRight: this.props.paddingHorizontal,
        }
      ]
    }
    // ...append vertical padding
    if (this.props.paddingVertical != null) {
      containerStyle = [
        containerStyle, {
          paddingTop: this.props.paddingVertical,
          paddingBottom: this.props.paddingVertical,
        }
      ]
    }

    const { style, ...otherProps } = this.props;

    const contentStyle = [styles.content, style];

    const scrolling = this.props.hasOwnProperty('scrolling');
    const contentView = scrolling ? <ScrollView {...otherProps} contentContainerStyle={[contentStyle, { flex: 0 }]} /> : <View {...otherProps} style={contentStyle} />;

    return (
      <View style={containerStyle}>
        {contentView}
      </View>
    );
  }

}

export const ScreenStyle = styles;