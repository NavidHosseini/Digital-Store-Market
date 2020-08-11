import React from "react"
import CategoriResult from "../Screens/CategoriResult"
import RecommendResult from "../Screens/RecommendResult"
import TabNavigator from "./TabNavigator"

import { createStackNavigator } from "@react-navigation/stack"
import CategoriProduct from "../Screens/CategoriProduct"
import BrandResult from "../Screens/BrandResult"
import BrandProduct from '../Screens/BrandProduct'
const Stack = createStackNavigator()

const SwitchNavigator = () => {


  return (
    <Stack.Navigator>

      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          title: "Digital Market",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen name="RecommendResult" component={RecommendResult}
        options={{ headerShown: false }} />
      <Stack.Screen name="CategoriResult" component={CategoriResult}
        options={{ headerShown: false }} />
      <Stack.Screen name="CategoriProduct" component={CategoriProduct}
        options={{ headerShown: false }} />
      <Stack.Screen name="BrandResult" component={BrandResult}
        options={{ headerShown: false }} />
      <Stack.Screen name="BrandProduct" component={BrandProduct}
        options={{ headerShown: false }} />

    </Stack.Navigator>
  );

};

export default SwitchNavigator;
