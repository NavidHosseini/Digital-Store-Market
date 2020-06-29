import React from "react";

import CategoriResult from "../Screens/CategoriResult";
import Profile from "../Screens/Profile";

import RecommendResult from "../Screens/RecommendResult";
import Signin from "../Screens/SignIn";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const SwitchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          title: "Digital Market",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      >
        {props => <TabNavigator {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SignIn" options={{ headerShown: false }}>
        {props => <Signin {...props} />}
      </Stack.Screen>

      <Stack.Screen name="RecommendResult" options={{ headerShown: false }}>
        {props => <RecommendResult {...props} />}
      </Stack.Screen>
      <Stack.Screen name="CategoriResult" options={{ headerShown: false }}>
        {props => <CategoriResult {...props} />}
      </Stack.Screen>
      <Stack.Screen name="Profile" options={{ headerShown: false }}>
        {props => <Profile {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default SwitchNavigator;
