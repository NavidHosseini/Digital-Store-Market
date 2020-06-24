import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-ionicons";

const CategoriComponent = ({ name, iconname }) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
          margin: 15,
          alignItems: "center",
          borderBottomWidth: 1,
          borderBottomColor: "red",
        }}
      >
        <Text
          style={{
            fontFamily: "Sans",
            fontSize: 18,
          }}
        >
          {name}
        </Text>

        <Icon name={iconname} style={{ marginLeft: 30 }} />
      </View>
    </TouchableOpacity>
  );
};
export default CategoriComponent;
const styles = StyleSheet.create({});
