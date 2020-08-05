import React from 'react'
import { View, TouchableOpacity } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { useNavigation } from '@react-navigation/native'

const HomeButton = ({ tintColor }) => {

  const navigation = useNavigation()

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <MaterialCommunityIcons name="home-outline" style={{ fontSize: 30 }} color={tintColor} />
      </TouchableOpacity>
    </View>
  )
}
export default HomeButton
