import React from "react";

import CartButton from "../Components/ButtonBar/CartButton";
import CategoriButton from "../Components/ButtonBar/CategoriButton";
import HomeButton from "../Components/ButtonBar/HomeButton";
import ProfileButton from "../Components/ButtonBar/ProfileButton";

import Cart from "../Screens/Cart";
import CategoriList from "../Screens/CategoriList";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: "#fff0e1",
        },
      }}
    >
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: "پروفایل",

          tabBarIcon: () => {
            return <ProfileButton />;
          },
        }}
      >
        {props => <Profile {...props} />}
      </Tab.Screen>

      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: "منو اصلی",
          tabBarIcon: () => {
            return <HomeButton />;
          },
        }}
      >
        {props => <Home {...props} />}
      </Tab.Screen>

      <Tab.Screen
        name="Categori"
        options={{
          tabBarLabel: "دسته یندی",
          tabBarIcon: () => {
            return <CategoriButton />;
          },
        }}
      >
        {props => <CategoriList {...props} />}
      </Tab.Screen>

      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: "سبد خرید",
          tabBarIcon: () => {
            return <CartButton />;
          },
        }}
      >
        {props => <Cart {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
