import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Context from "../../Context";

const Cart = () => {
  const { cartProduct, deleteCart } = useContext(Context);
  return (
    <View>
      <FlatList
        data={cartProduct}
        keyExtractor={state => state.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.View}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  style={{ height: 100, width: 100 }}
                  source={{ uri: `http://192.168.1.3:1337${item.url}` }}
                />

                <Text
                  style={{
                    textAlign: "right",
                    marginRight: 10,
                    marginTop: 10,
                    fontFamily: "Sans",
                  }}
                >
                  {item.title} : محصول
                </Text>
              </View>
              <Text
                style={{
                  textAlign: "right",
                  fontFamily: "Sans",
                  marginRight: 10,
                }}
              >
                قیمت: {item.price}
              </Text>

              <TouchableOpacity
                style={{ alignItems: "center", backgroundColor: "#ff9494" }}
                onPress={() => deleteCart(item.id)}
              >
                <FontAwesome name="trash" style={{ fontSize: 38 }} />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      <TouchableOpacity
        style={{
          marginHorizontal: 12,
          alignItems: "center",
          backgroundColor: "#00cd00",
          padding: 17,
        }}
      >
        <Text style={{ fontFamily: "Sans" }}>پرداخت</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Cart;

const styles = StyleSheet.create({
  View: {
    marginBottom: 25,
    marginHorizontal: 12,
    marginTop: 25,
    backgroundColor: "#d4d4d4",
  },
});
