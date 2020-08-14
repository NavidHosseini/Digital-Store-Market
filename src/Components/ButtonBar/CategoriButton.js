import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useNavigation } from '@react-navigation/native'

const CategoriButton = ({ tintColor, focused }) => {

  const activeButton = 35
  const inactiveButton = 30

  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Categori')}>
        <MaterialCommunityIcons name="layers-outline" size={focused ? activeButton : inactiveButton} color={tintColor} />
      </TouchableOpacity>
    </View>
  )
}
export default CategoriButton
