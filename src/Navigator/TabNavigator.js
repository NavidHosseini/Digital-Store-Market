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
        activeTintColor: "#fc4e03",
        inactiveTintColor: 'black',
        showLabel: false,
        keyboardHidesTabBar: true,
        style: { backgroundColor: "#ffe6d6", }

      }}
    >
      <Tab.Screen
        name="SignIn"
        component={Auth}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <ProfileButton tintColor={color} focused={focused} />
          },
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <HomeButton tintColor={color} focused={focused} />
          }
        }}
      />

      <Tab.Screen
        name="Categori"
        component={CategoriList}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return <CategoriButton tintColor={color} focused={focused} />
          },
        }}
      />

      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarLabel: "سبد خرید",
          tabBarIcon: ({ color, focused }) => {
            return <CartButton tintColor={color} focused={focused} />
          },
        }}
      />

    </Tab.Navigator>
  )
}

export default TabNavigator
