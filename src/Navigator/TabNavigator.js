import React from "react"

import CartButton from "../Components/ButtonBar/CartButton"
import CategoriButton from "../Components/ButtonBar/CategoriButton"
import HomeButton from "../Components/ButtonBar/HomeButton"
import ProfileButton from "../Components/ButtonBar/ProfileButton"

import Cart from "../Screens/Cart"
import CategoriList from "../Screens/CategoriList"
import Home from "../Screens/Home"
import Auth from "./Auth"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#ff4b0f",
        inactiveTintColor: 'black',
        showLabel: false,
        style: { backgroundColor: "#ffe6d6" }
      }}
    >
      <Tab.Screen
        name="SignIn"
        component={Auth}
        options={{
          tabBarIcon: ({ color }) => {
            return <ProfileButton tintColor={color} />
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <HomeButton tintColor={color} />
          }
        }}
      />

      <Tab.Screen
        name="Categori"
        component={CategoriList}
        options={{
          tabBarIcon: ({ color }) => {
            return <CategoriButton tintColor={color} />
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "سبد خرید",
          tabBarIcon: ({ color }) => {
            return <CartButton tintColor={color} />
          },
        }}
      />

    </Tab.Navigator>
  )
}

export default TabNavigator
