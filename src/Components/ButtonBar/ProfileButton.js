import React from "react"
import { View, TouchableOpacity } from "react-native"

import Feather from "react-native-vector-icons/Feather"

import { useNavigation } from "@react-navigation/native"



const ProfileButton = ({ tintColor, focused }) => {

  // console.log(tintColor)
  const navigation = useNavigation()
  const activeButton = 32
  const inactiveButton = 27



  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Feather name="user" size={focused ? activeButton : inactiveButton} color={tintColor} />
      </TouchableOpacity>
    </View>
  )
}
export default ProfileButton
