import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Recommend from "../Components/Recommend";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.3:1337/digital-store-markets")
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const filterResults = Type => {
    return data.filter(result => {
      return result.Type === Type;
    });
  };
  // console.log(filterResults("mobile"));

  return (
    <View style={{ flex: 1, padding: 10 }}>
      {isLoading ? (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <View style={styles.background}>
          <View style={styles.welcomeStyle}>
            <Text style={styles.welcomeTitle}>Welcome to Digital Shoping</Text>
          </View>
          <ScrollView>
            <View style={{ marginBottom: 100 }}>
              <Recommend
                title="Recommend Cell Phones"
                result={filterResults("Mobile")}
              />
              <Recommend
                title="Recommend Laptops"
                result={filterResults("LapTop")}
              />
              <Recommend
                title="Recommend Cameras"
                result={filterResults("Camera")}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  welcomeTitle: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  welcomeStyle: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 25,
    backgroundColor: "#ff8040",
    marginHorizontal: 25,
    padding: 8,
  },
  ActivityIndicator: {
    alignItems: "center",

    justifyContent: "center",
    flex: 1,
  },
  background: {
    backgroundColor: "#fbeee4",
  },
});
