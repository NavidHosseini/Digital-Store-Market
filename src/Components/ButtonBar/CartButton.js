import React from 'react'

import { View, TouchableOpacity } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'

const CardButton = ({ tintColor, focused }) => {

  const navigation = useNavigation()
  const activeButton = 30
  const inactiveButton = 25

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Feather name="shopping-cart" size={focused ? activeButton : inactiveButton} color={tintColor} />
      </TouchableOpacity>
    </View>
  )
}
export default CardButton
