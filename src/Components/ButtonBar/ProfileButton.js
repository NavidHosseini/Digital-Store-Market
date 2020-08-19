import React, { useState, useEffect } from "react"
import { View, TouchableOpacity } from "react-native"

import Feather from "react-native-vector-icons/Feather"

import { useNavigation } from "@react-navigation/native"

import AsyncStorage from '@react-native-community/async-storage'


const ProfileButton = ({ tintColor, focused }) => {

  // console.log(tintColor)
  const navigation = useNavigation()
  const activeButton = 32
  const inactiveButton = 27
  const [Token, setToken] = useState()


  const Press = async () => {
    const token = await AsyncStorage.getItem("token")
    setToken(token)
    if (Token) {
      //navigate not working
      navigation.push('Profile')
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'SignIn' }],
      })
    }
  }



  return (
    <View>
      <TouchableOpacity onPress={() => Press()}>
        <Feather name="user" size={focused ? activeButton : inactiveButton} color={tintColor} />
      </TouchableOpacity>
    </View>
  )
}
export default ProfileButton
