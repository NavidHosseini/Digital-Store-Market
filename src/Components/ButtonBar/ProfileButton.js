import React from "react"
import { View, TouchableOpacity } from "react-native"

import Feather from "react-native-vector-icons/Feather"

import { useNavigation } from "@react-navigation/native"

const ProfileButton = ({ tintColor }) => {

  // console.log(tintColor)
  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Feather name="user" style={{ fontSize: 27 }} color={tintColor} />
      </TouchableOpacity>
    </View>
  )
}
export default ProfileButton
