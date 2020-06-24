import React from "react";
import { View, TouchableOpacity } from "react-native";

import Icon from "react-native-ionicons";

import { useNavigation } from "@react-navigation/native";

const ProfileButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
        <Icon name="person" color="#004991" />
      </TouchableOpacity>
    </View>
  );
};
export default ProfileButton;
