import React, { FC } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DeliveryScreen from '@features/auth/delivery/DeliveryScreen'
import ReadingScreen from '@features/reading/ReadingScreen'
import LiveScreen from '@features/live/LiveScreen'
import RereadingScreen from '@features/rereading/RereadingScreen'

const Tab = createBottomTabNavigator()

const UseBottomTab: FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen name="Delivery" component={DeliveryScreen} />
      <Tab.Screen name="Reading" component={ReadingScreen} />
      <Tab.Screen name="History" component={RereadingScreen} />
      <Tab.Screen name="Live" component={LiveScreen} />
    </Tab.Navigator>
  )
}

export default UseBottomTab
