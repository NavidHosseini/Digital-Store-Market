import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const CategoriResultComponent = ({item}) => {
  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );
};
export default CategoriResultComponent;

const styles = StyleSheet.create({});
