import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useRoute } from "@react-navigation/native";

const RecommendResult = () => {
  const route = useRoute();
  const name = route.params.name;
  const price = route.params.price;
  const detail = route.params.detail;
  const data = route.params.data;
  // console.log(data);
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            style={{ width: "100%", height: 250 }}
            source={{
              uri: `http://192.168.1.5:1337${data.picCover.url}`,
            }}
          />
        </View>
        <View style={styles.ViewText}>
          <Text style={styles.TextStyle}>{name}: نام محصول</Text>
          <Text style={styles.TextStyle}>قیمت :{price} تومان </Text>
          <Text style={styles.TextStyle}>توضیحات :</Text>
          <Text style={styles.TextStyle}>{detail}</Text>
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
