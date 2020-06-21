import React from 'react';

import Cart from '../Screens/Cart';
import Home from '../Screens/Home';

import Profile from '../Screens/Profile';

import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import Signin from '../Screens/SignIn';
import SignUp from '../Screens/SignUp';

const Stack = createStackNavigator();

const SwitchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        options={{
          title: 'Digital Market',
          headerTitleAlign: 'center',
          headerShown: false,
        }}>
        {(props) => <TabNavigator {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SignIn">
        {(props) => <Signin {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SignUp">
        {(props) => <SignUp {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default SwitchNavigator;
