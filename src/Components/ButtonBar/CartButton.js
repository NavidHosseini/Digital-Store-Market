import React from 'react'

import { View, TouchableOpacity } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'

import { useNavigation } from '@react-navigation/native'

const CardButton = ({ tintColor }) => {

  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Feather name="shopping-cart" style={{ fontSize: 25 }} color={tintColor} />
      </TouchableOpacity>
    </View>
  )
}
export default CardButton
