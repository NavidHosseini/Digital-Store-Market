import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const Recommend = ({ title, result }) => {
  const picurl = result.map(res => {
    return res.picCover.url;
  });
  console.log(picurl);

  return (
    <View>
      <Text style={styles.text}>{title}</Text>

      <FlatList
        data={result}
        keyExtractor={result => result.id.toString()}
        horizontal
        renderItem={({ item }) => {
          return (
            <View style={styles.FlatList}>
              <Text>{item.name.slice(0, 8)}...</Text>
              <TouchableOpacity>
                <Image
                  style={styles.image}
                  // source={{
                  //   uri: `http://192.168.1.3:1337${pic}`,
                  // }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
export default Recommend;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
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
  },
});
