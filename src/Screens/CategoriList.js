import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView, ActivityIndicator } from "react-native";

import CategoriComponent from "../Components/Categori/CategoriComponent";

const CategoriList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.6:1337/categories")
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const filterResults = name => {
    return data.filter(result => {
      return result.name === name;
    });
  };

  return (
    <View>
      {isLoading ? (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator
            size="large"
            color="red"
            style={styles.ActivityIndicator}
          />
        </View>
      ) : (
        <View style={{ marginTop: 10 }}>
          <ScrollView>
            <CategoriComponent
              name="کالاهای دیجیتال"
              iconname="tv"
              data={filterResults("Digital")}
            />
            <CategoriComponent
              name="آرایشی و بهداشتی"
              iconname="cut"
              data={filterResults("Cosmetics")}
            />
            <CategoriComponent
              name="ابزار"
              iconname="wrench"
              data={filterResults("Tools")}
            />
            <CategoriComponent name="پوشاک" iconname="shopping-bag" />
            <CategoriComponent name="آشپزخانه" iconname="home" />
            <CategoriComponent name="کتاب" iconname="pencil-square-o" />
            <CategoriComponent name="اسباب بازی" iconname="gamepad" />
            <CategoriComponent name="ورزش و سفر" iconname="bicycle" />
            <CategoriComponent name="خودرو" iconname="car" />
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default CategoriList;
const styles = StyleSheet.create({
  ActivityIndicator: {
    alignItems: "center",

    justifyContent: "center",
    flex: 1,
  },
});
