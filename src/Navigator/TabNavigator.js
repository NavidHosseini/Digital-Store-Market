import React from "react";

import CartButton from "../Components/ButtonBar/CartButton";
import CategoriButton from "../Components/ButtonBar/CategoriButton";
import HomeButton from "../Components/ButtonBar/HomeButton";
import ProfileButton from "../Components/ButtonBar/ProfileButton";

import Cart from "../Screens/Cart";
import CategoriList from "../Screens/CategoriList";
import Home from "../Screens/Home";
import Signin from "../Screens/SignIn";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"

      tabBarOptions={{
        //activeBackgroundColor: "#ff7878",
        activeTintColor: "#ff4b0f",
        inactiveTintColor: 'black',

        showLabel: false,
        style: { backgroundColor: "#ffe6d6" }
      }}
    >
      <Tab.Screen
        name="SignIn"
        options={{
          tabBarLabel: "پروفایل",
          tabBarIcon: ({ color }) => {
            return <ProfileButton tintColor={color} />;
          },
        }}
      >
        {props => <Signin {...props} />}
      </Tab.Screen>

      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "منو اصلی",
          tabBarIcon: ({ color }) => {
            return <HomeButton tintColor={color} />;
          },
        }}
      >
        {props => <Home {...props} />}
      </Tab.Screen>

      <Tab.Screen
        name="Categori"
        options={{
          tabBarLabel: "دسته یندی",
          tabBarIcon: ({ color }) => {
            return <CategoriButton tintColor={color} />;
          },
        }}
      >
        {props => <CategoriList {...props} />}
      </Tab.Screen>

      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: "سبد خرید",
          tabBarIcon: ({ color }) => {
            return <CartButton tintColor={color} />;
          },
        }}
      >
        {props => <Cart {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
