import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileButton from '../Components/ProfileButton';
import CartButton from '../Components/CartButton';

import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import Cart from '../Screens/Cart';
import HomeButton from '../Components/HomeButton';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'profile',

          tabBarIcon: () => {
            return <ProfileButton />;
          },
        }}>
        {(props) => <Profile {...props} />}
      </Tab.Screen>

      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'home',
          tabBarIcon: () => {
            return <HomeButton />;
          },
        }}>
        {(props) => <Home {...props} />}
      </Tab.Screen>

      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: () => {
            return <CartButton />;
          },
        }}>
        {(props) => <Cart {...props} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;
