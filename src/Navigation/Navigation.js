import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../Screens/SignInScreen';
import SplashScreen from '../Screens/SplashScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen';
import WatchScreen from '../Screens/WatchScreen';
import Withdraw from '../Screens/Withdraw';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="WatchNow" component={WatchScreen} />
        <Stack.Screen name="Withdraw" component={Withdraw} />
       



      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation