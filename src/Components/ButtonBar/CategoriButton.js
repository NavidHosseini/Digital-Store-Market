import React from "react";
import { View, TouchableOpacity } from "react-native";

import Icon from "react-native-ionicons";

import { useNavigation } from "@react-navigation/native";

const CategoriButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon name="list" />
      </TouchableOpacity>
    </View>
  );
};
export default CategoriButton;
