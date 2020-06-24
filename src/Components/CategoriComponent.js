import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Icon from "react-native-ionicons";

const CategoriComponent = ({ name, iconname }) => {
  return (
    <TouchableOpacity>
      <View style={styles.View}>
        <Text style={styles.Text}>{name}</Text>

        <Icon name={iconname} style={styles.Icon} />
      </View>
    </TouchableOpacity>
  );
};

export default CategoriComponent;

const styles = StyleSheet.create({
  View: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 15,
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ff8040",
  },
  Text: {
    fontFamily: "Sans",
    fontSize: 18,
  },
  Icon: {
    marginLeft: 30,
  },
});
