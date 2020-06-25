import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import CategoriComponent from '../Components/CategoriComponent';

const CategoriList = () => {
  return (
    <View style={{marginTop: 10}}>
      <ScrollView>
        <CategoriComponent name="کالاهای دیجیتال" iconname="tv" />
        <CategoriComponent name="آرایشی و بهداشتی" iconname="cut" />
        <CategoriComponent name="ابزار" iconname="wrench" />
        <CategoriComponent name="پوشاک" iconname="shopping-bag" />
        <CategoriComponent name="آشپزخانه" iconname="home" />
        <CategoriComponent name="کتاب" iconname="pencil-square-o" />
        <CategoriComponent name="اسباب بازی" iconname="gamepad" />
        <CategoriComponent name="ورزش و سفر" iconname="bicycle" />
        <CategoriComponent name="خودرو" iconname="car" />
      </ScrollView>
    </View>
  );
};
export default CategoriList;
const styles = StyleSheet.create({});
