import React from 'react';

import RecommendResult from '../Screens/RecommendResult';
import Signin from '../Screens/SignIn';

import SignUp from '../Screens/SignUp';
import CategoriResult from '../Screens/CategoriResult';
import TabNavigator from './TabNavigator';
import {createStackNavigator} from '@react-navigation/stack';

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
      <Stack.Screen name="SignIn" options={{headerShown: false}}>
        {(props) => <Signin {...props} />}
      </Stack.Screen>
      <Stack.Screen name="SignUp" options={{headerShown: false}}>
        {(props) => <SignUp {...props} />}
      </Stack.Screen>
      <Stack.Screen name="RecommendResult" options={{headerShown: false}}>
        {(props) => <RecommendResult {...props} />}
      </Stack.Screen>
      <Stack.Screen name="CategoriResult" options={{headerShown: false}}>
        {(props) => <CategoriResult {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default SwitchNavigator;
