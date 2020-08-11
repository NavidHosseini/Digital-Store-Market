import React, { useContext } from "react"
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  Text
} from "react-native"
import Context from "../../Context"
import CartItemComponent from "../Components/cart/CartItemComponent"


const Cart = () => {

  const { cartProduct } = useContext(Context)
  return (
    <View style={styles.View}>
      <FlatList
        data={cartProduct}
        keyExtractor={state => state.title}
        renderItem={({ item }) => {
          return (
            <CartItemComponent item={item} />
          )
        }}
      />


      <TouchableOpacity
        style={styles.paymentButton}
        onPress={() => alert("پرداخت با موفقیت انجام شد")}>
        <Text style={styles.paymentText}>پرداخت</Text>
      </TouchableOpacity>

    </View>
  )
}
export default Cart

const styles = StyleSheet.create({
  View: {
    flex: 1
  },
  paymentButton: {
    marginHorizontal: 12,
    alignItems: "center",
    backgroundColor: "#ff5050",
    padding: 17,
    marginBottom: 7,
  },
  paymentText: {
    fontFamily: "Sans",
    color: '#fff',
    fontSize: 16
  },
})
