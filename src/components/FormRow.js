import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  formRow: {
    flexDirection: 'row',
  },
});

export class FormRow extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // Merge default component style with custom style
    const rowStyle = [styles.formRow, this.props.style];
    const rowItemMargin = {
      marginRight: (this.props.margin != null ? this.props.margin : 4)
    }

    // Map row children to append row-specific style
    const {children, ...otherProps} = this.props;
    const array = children ? React.Children.toArray(children) : [];

    // Map children to append settings from Form
    const mappedChildren = array.map((child, index) => {
      // Separate style from other properties
      const { style } = child.props;

      // Add right-margin to all but the last child
      var appendStyle = { 
        flex: 1,
        ...(index < (array.length - 1) ? rowItemMargin : {})
      }
      const modifiedStyle = [style, appendStyle];
      const modifiedProps = {...child.props, style: modifiedStyle};

      // Return child with modified props
      return React.cloneElement(child, modifiedProps);
    });

    return(
      <View
        {...otherProps}
        style={rowStyle}
      >
        {mappedChildren}
      </View>
    )
  }
}

export const FormRowStyle = styles;