import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const CategoriComponent = ({ name, iconname, data }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.Viewasli}
      onPress={() => {
        if (data) {
          navigation.navigate('CategoriResult', { data: data })
        } else {
          alert('بزودی')
        }
      }
      }>
      <Text style={styles.Text}>{name}</Text>
      <FontAwesome name={iconname} style={styles.Icon} />
    </TouchableOpacity>
  )
}

export default CategoriComponent

const styles = StyleSheet.create({

  Text: {
    fontFamily: 'Sans',
    fontSize: 18,
    marginBottom: 13,

  },
  Icon: {
    marginLeft: 35,
    fontSize: 32,
    alignSelf: 'center',
    marginBottom: 13,
    marginRight: 18


  },
  Viewasli: {
    marginTop: 13,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ff8040',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})
