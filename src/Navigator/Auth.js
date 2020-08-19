import React, { useState, useEffect } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import Signin from "../Screens/SignIn"
import SignUp from "../Screens/SignUp"
import Profile from "../Screens/Profile"
import EditProfile from "../Screens/EditProfile"


const Auth = () => {
    const Stack = createStackNavigator()


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
