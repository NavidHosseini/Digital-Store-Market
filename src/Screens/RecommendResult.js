import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";
import { useRoute } from "@react-navigation/native";

const RecommendResult = ({ navigation }) => {
  const route = useRoute();
  const { addCart } = useContext(Context);

  const data = route.params.data;

  const title = route.params.data.name;
  const url = route.params.data.picCover.url;
  const price = route.params.data.price;
  // console.log(data);
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            style={{ width: "100%", height: 250 }}
            source={{
              uri: `http://192.168.1.5:1337${url}`,
            }}
          />
        </View>
        <View style={styles.ViewText}>
          <Text style={styles.TextStyle}>{title}: نام محصول</Text>
          <Text style={styles.TextStyle}>قیمت :{price} تومان </Text>
          <Text style={styles.TextStyle}>توضیحات :</Text>
          <Text style={styles.TextStyle}>{data.detail}</Text>
          <TouchableOpacity
            onPress={() => {
              addCart({ title, url, price });
              //navigation.navigate("Cart");
              alert("به سبد خرید اضافه شد");
            }}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#ff8040",
                padding: 18,
                marginTop: 20,
                marginBottom: 40,
              }}
            >
              <Text style={{ fontFamily: "Sans", color: "#fff", fontSize: 17 }}>
                اضافه به سبد خرید
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default RecommendResult;

const styles = StyleSheet.create({
  TextStyle: {
    textAlign: "right",
    fontFamily: "Sans",
    fontSize: 15,
  },
  ViewText: {
    marginHorizontal: 15,
  },
});
