import React from "react";

import Signin from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";

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
      <Stack.Screen name="SignIn">
        {props => <Signin {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SignUp">
        {props => <SignUp {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default SwitchNavigator;
