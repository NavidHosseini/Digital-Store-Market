import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RecommendResult = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.Text}>
        <Text>{item.name.slice(0, 8)}...</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Image
            source={{
              uri: `http://192.168.1.5:1337${item.picCover.url}`,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RecommendResult;
const styles = StyleSheet.create({
  FlatList: {
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderColor: "red",
    borderWidth: 1,
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
