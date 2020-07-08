import React, { useContext } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Context from "../../../Context";

const RecommendItem = ({ item }) => {
  const navigation = useNavigation();
  const { baseUrl } = useContext(Context);

  return (
    <View>
      <View style={styles.Text}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("RecommendResult", {
              id: item.id,
              name: item.name,
              price: item.price,
              detail: item.detail,
              data: item,
              picCover: item.picCover.url,
            })}
        >
          <Image
            source={{
              uri: `${baseUrl}${item.picCover.url}`,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RecommendItem;
const styles = StyleSheet.create({
  FlatList: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginLeft: 15,
  },
  View: {
    alignItems: "center",
  },
  Text: {
    alignItems: "center",
    justifyContent: "center",
  },
});
