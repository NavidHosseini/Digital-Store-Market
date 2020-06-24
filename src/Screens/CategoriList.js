import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import CategoriComponent from "../Components/CategoriComponent";

const CategoriList = () => {
  return (
    <View style={{ backgroundColor: "#fbeee4" }}>
      <ScrollView>
        <CategoriComponent name="کالاهای دیجیتال" iconname="easel" />
        <CategoriComponent name="آرایشی و بهداشتی" iconname="cut" />
        <CategoriComponent name="ابزار" iconname="hammer" />
        <CategoriComponent name="پوشاک" iconname="shirt" />
        <CategoriComponent name="آشپزخانه" iconname="home" />
        <CategoriComponent name="کتاب" iconname="create" />
        <CategoriComponent name="اسباب بازی" iconname="color-palette" />
        <CategoriComponent name="ورزش و سفر" iconname="bicycle" />
        <CategoriComponent name="خودرو" iconname="car" />
      </ScrollView>
    </View>
  );
};
export default CategoriList;
const styles = StyleSheet.create({});
