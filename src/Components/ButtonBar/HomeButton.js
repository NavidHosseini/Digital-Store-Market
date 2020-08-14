import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useNavigation } from '@react-navigation/native'

const HomeButton = ({ tintColor, focused }) => {

  const navigation = useNavigation()
  const activeButton = 35
  const inactiveButton = 30

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <MaterialCommunityIcons name="home-outline" size={focused ? activeButton : inactiveButton} color={tintColor} />
      </TouchableOpacity>
    </View>
  )
}
export default HomeButton
