import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { useStyles } from 'react-native-unistyles'
import { splashStyles } from '../../../unistyles/authStyles'

const SplashScreen:FC = () => {

  const {styles} = useStyles(splashStyles)
  return (
    <View style={styles.container}>
      
    </View>
  )
}

export default SplashScreen