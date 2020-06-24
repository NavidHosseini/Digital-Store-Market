import React from "react";
import { View, TouchableOpacity } from "react-native";

import Icon from "react-native-ionicons";

import { useNavigation } from "@react-navigation/native";

const CategoriButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Categori")}>
        <Icon name="list" style={{ color: "#00bcbc" }} />
      </TouchableOpacity>
    </View>
  );
};
export default CategoriButton;
