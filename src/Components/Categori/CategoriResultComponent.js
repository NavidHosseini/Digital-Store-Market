import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Context from "../../../Context";
import { useNavigation } from "@react-navigation/native";

const CategoriResultComponent = ({ item }) => {
  const navigation = useNavigation();

  // const [Stock, setStock] = useState('')

  const { baseUrl } = useContext(Context)
  //console.log(item.stock)

  return (
    <TouchableOpacity onPress={() => navigation.navigate('CategoriProduct', {
      id: item.id,
      name: item.name,
      price: item.price,
      picUrl: item.picCover.url,
      detail: item.detail

    })} >
      <View style={styles.View1} >
        <View style={styles.View2}>


          <View style={styles.View3}>
            <Text style={styles.Text}>{item.name}</Text>
            <Text style={styles.Text}> نام محصول :  </Text>
          </View>

          <Image
            source={{ uri: `${baseUrl}${item.picCover.url}` }}
            style={styles.pic} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CategoriResultComponent;

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
    //opacity: 0.7
  },
  View3: {
    flexDirection: 'row',
    marginBottom: 10
  },
  Text: {
    fontFamily: 'Sans',
    fontSize: 15
  }
});
