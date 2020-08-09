import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import config from '../../../config'

const CategoriResultComponent = ({ item }) => {

  const navigation = useNavigation()

  const [StockNull, setStockNull] = useState('')
  const [StockTrue, setStockTrue] = useState('')


  useEffect(() => {
    if (item.stock === null) {
      setStockNull('عدم موجودی')
    } else {
      setStockTrue('موجود در انبار')
    }
  }, [])

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CategoriProduct', {
      id: item.id,
      name: item.name,
      price: item.price,
      picUrl: item.picCover.url,
      detail: item.detail,
      item: item,
      picturs: item.picturs

    })} >
      <View style={styles.View1} >
        <View style={styles.View2}>

          <View style={styles.View3}>
            <Text style={styles.Text}>{item.name}</Text>
            <Text style={styles.Text}> نام محصول :  </Text>
          </View>
          <View>
            {StockNull ?
              (<Text style={styles.StockNull}>{StockNull}</Text>)
              :
              (<Text style={styles.StockTrue}>{StockTrue}</Text>)}
          </View>
          <Image
            source={{ uri: `${config.BASE_URL}${item.picCover.url}` }}
            style={styles.pic} />
        </View>
      </View>
    </TouchableOpacity>
  )
}
export default CategoriResultComponent

const styles = StyleSheet.create({
  pic: {
    width: '100%',
    height: 150,
    resizeMode: 'center',
    borderRadius: 12
  },
  View2: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10
  },
  View1: {
    borderWidth: 1,
    borderColor: 'red',
    marginVertical: 10,
    borderRadius: 15,
    marginHorizontal: 10,
    backgroundColor: '#ffe4db',
  },
  View3: {
    flexDirection: 'row',
  },
  Text: {
    fontFamily: 'Sans',
    fontSize: 15
  },
  StockNull: {
    color: 'red',
    fontFamily: 'Sans',
    marginBottom: 5,
    textDecorationLine: 'line-through',
    textAlign: 'center'
  },
  StockTrue: {
    color: 'green',
    fontFamily: 'Sans',
    marginBottom: 5
  }
})
