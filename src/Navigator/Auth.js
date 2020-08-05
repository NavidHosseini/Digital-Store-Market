import React, { useState, useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Signin from "../Screens/SignIn"
import SignUp from "../Screens/SignUp"
import Profile from "../Screens/Profile"
import EditProfile from "../Screens/EditProfile"
//import AsyncStorage from '@react-native-community/async-storage';


const Auth = () => {
    const Stack = createStackNavigator()
    // const [Token, setToken] = useState();

    // const tokenAssignment = async () => {
    //     const token = await AsyncStorage.getItem("token")
    //     setToken(token)
    // }
    // useEffect(() => {
    //     tokenAssignment()
    // });

    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={Signin} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />

        </Stack.Navigator>
    )
}


export default Auth
