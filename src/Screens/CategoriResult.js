import React, { useState } from "react"
import { View, FlatList, Text, Picker, StyleSheet, Button } from "react-native"
import CategoriResultComponent from "../Components/Categori/CategoriResultComponent"
import { useRoute } from "@react-navigation/native"

const CategoriResult = () => {

  const [selectedValue, setSelectedValue] = useState()

  const route = useRoute()
  const data = route.params.data

  const allproduct = data.map(res => {
    return res.digital_store_markets
  })
  const CustomData = allproduct.find(res => {
    return res
  })
  //console.log(CustomData)

  return (
    <View>
      <View>

        <View style={{ alignItems: 'center' }}>

          <Picker
            selectedValue={selectedValue}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="جدیدترین ها" value="js" />
            <Picker.Item label="پر فروش ترین ها" value="js" />
            <Picker.Item label="ارزان ترین ها" value="js" />
            <Picker.Item label="گران ترین ها" value="js" />
          </Picker>



        </View>


      </View>
      <FlatList
        data={CustomData}
        keyExtractor={CustomData => CustomData.id.toString()}
        renderItem={({ item }) => {
          return (<CategoriResultComponent item={item} data={data} />)
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: '#d2d2d2',
    marginHorizontal: 20,
    paddingHorizontal: 40
  },
  filterText: {
    fontFamily: 'Sans',
    marginTop: 10,
    fontSize: 17
  },
  Button: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#ed9a88',
    paddingVertical: 13,
    marginHorizontal: 30,
    marginBottom: 10
  }
})
export default CategoriResult

