import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoriResultComponent = ({ item }) => {
  // const filterResults = Type => {
  //   return item.filter(result => {
  //     return result.Type === Type;
  //   });
  // };
  // console.log(filterResults("Mobile"));
  return (
    <View>
      <Text>{item.name}</Text>
    </View>
  );
};
export default CategoriResultComponent;

const styles = StyleSheet.create({});
