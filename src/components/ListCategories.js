import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';

const ListCategories = props => {

  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Image source={props.image} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    height: 100,
    width: 200,
    borderRadius: 10,
    marginRight: 10,
  }
});

export default ListCategories;