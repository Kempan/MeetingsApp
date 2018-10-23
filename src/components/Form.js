import React, { Component } from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View } from 'react-native';
import { 
  FormLabel, 
  FormInput, 
  FormValidationMessage 
} from 'react-native-elements';
import { FormItem, FormRow } from './';
// import FormRow from './FormRow';

const styles = StyleSheet.create({
  formContainer: {
    flexDirection: 'column',
    width: '100%',
  },
});


export class Form extends Component {
  constructor(props) {
    super(props);
    this.validate = this.validate.bind(this);
    this.mapChildren = this.mapChildren.bind(this);

    // Component data that at the moment shouldn't trigger a re-render
    this.formData = props.formData ? props.formData : {};
    this.dataOutput = null;
    this.isValid = false;

  }

  // Iterate through- and validate all FormItem children
  validate() {
    // Create new empty data object and default-value validation status
    var newData = {};
    var isValid = true;

    Object.keys(this.refs).forEach((key) => {
      // Validate child form item, store item input and flag if invalid
      const inputValue = this.refs[key].validate();
      newData[key] = inputValue ? inputValue : null;
      if (!inputValue) { isValid = false; }
    });

    this.dataOutput = newData;
    this.isValid = isValid;

    // Return new form data if valid, else null
    return isValid ? newData : null;
  }

  // Map through all form child components
  mapChildren(component) {
    // Return component if no props
    if (!component.hasOwnProperty('props')) return component;

    const { props } = component;

    // Separate children from other properties
    const {children, ...otherProps} = props;

    // Map children to append settings from Form
    const mappedChildren = children == null ? null : React.Children.toArray(children)
    .map((child, index) => {
      const type = child.type && child.type.displayName ? child.type.displayName : null;
      switch(type) {
        case 'FormItem':
          const formKey = child.props.formKey
          const itemData = this.formData.hasOwnProperty(formKey) ? this.formData[formKey] : {};
          const validator = child.props.validator ? child.props.validator : (
            itemData.hasOwnProperty('validator') ? itemData.validator : () => { return null }
          );
          return (
            <FormItem
              {...child.props}
              ref={formKey}
              key={formKey}
              validator={validator}
            />
            
          );
        case 'FormRow':
          return this.mapChildren(child);
        default:
          return this.mapChildren(child);
      }
    });

    // Return clone of child component properties and modified children
    return children == null ? component : React.cloneElement(
      component, otherProps, mappedChildren
    )
  }

  render() {
    // Separate children and remaining properties from Form 
    const mapped = this.mapChildren(this);
    const {children, ...formProps} = mapped.props;
    const style = [styles.formContainer, formProps.style];

    return(
      <View
        {...formProps}
        style={style}
      >
        {children}
      </View>
    );
  }
}

export const FormStyle = styles;
