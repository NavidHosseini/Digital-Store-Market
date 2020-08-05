import React, { useContext } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Context from "../../../Context"
import config from '../../../config'
const CartItemComponent = ({ item }) => {

  const { deleteCart } = useContext(Context)

  return (
    <View style={styles.View}>
      <View style={styles.View2} >
        <Image
          style={styles.image}
          source={{ uri: `${config.BASE_URL}${item.url}` }}
        />

        <Text style={styles.Text}>
          {item.title.slice(0, 10)}.... : محصول
        </Text>
      </View>
      <Text style={styles.Text2} >
        قیمت: {item.price}
      </Text>

      <TouchableOpacity
        style={styles.trash}
        onPress={() => deleteCart(item.id)}
      >
        <FontAwesome name="trash" style={styles.icon} />
      </TouchableOpacity>
    </View>
  )
}
export default CartItemComponent

const styles = StyleSheet.create({
  View: {
    marginBottom: 25,
    marginHorizontal: 12,
    marginTop: 25,
    backgroundColor: "#ffe4db",
  },
  View2: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: {
    height: 100,
    width: 100,
    marginTop: 15,
    marginLeft: 13
  },
  Text: {
    textAlign: "right",
    marginRight: 10,
    marginTop: 10,
    fontFamily: "Sans",
  },
  Text2: {
    textAlign: "right",
    fontFamily: "Sans",
    marginRight: 10,
  },
  trash: {
    alignItems: "center",
    backgroundColor: "#fc9572",
    marginHorizontal: 10
  },
  icon: {
    fontSize: 38
  }
})
