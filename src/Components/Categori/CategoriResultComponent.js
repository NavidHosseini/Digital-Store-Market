import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoriResultComponent = ({ item, data }) => {




  //console.log(filterResults('Mobile'))
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};
export default CategoriResultComponent;

const styles = StyleSheet.create({});
