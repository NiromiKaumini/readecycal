import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SplashScreen from '../features/auth/delivery/SplashScreen';
import LoginScreen from '@features/auth/LoginScreen';
import UseBottomTab from '@features/tabs/UseBottomTab';
import { navigationRef } from '@utils/NavigationUtils';

const Stack = createNativeStackNavigator()

const Navigation:FC = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName='SplashScreen' screenOptions={{headerShown:false}}>
        <Stack.Screen name='SplashScreen' component={SplashScreen}/>
        <Stack.Screen options={{animation:'fade'}} name='LoginScreen' component={LoginScreen}></Stack.Screen>
        <Stack.Screen options={{animation:'fade'}} name='UserBottomTab' component={UseBottomTab}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation
