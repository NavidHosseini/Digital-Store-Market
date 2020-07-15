import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Context from "../../../Context";
import { useNavigation } from "@react-navigation/native";

const CategoriResultComponent = ({ item }) => {
  const navigation = useNavigation();

  const { baseUrl } = useContext(Context)
  //console.log(item.detail)
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
          <Text> {item.id} </Text>
          <Image source={{ uri: `${baseUrl}${item.picCover.url}` }} style={styles.pic} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default CategoriResultComponent;

const styles = StyleSheet.create({
  pic: {
    width: "95%",
    height: 120,
    resizeMode: 'center'
  },
  View2: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 10
  },
  View1: {
    borderWidth: 2,
    borderColor: 'red',
    marginVertical: 10
  },
  View3: {
    flexDirection: 'row'
  },
  Text: {
    fontFamily: 'Sans',
    fontSize: 15
  }
});
