import { View, Text, StatusBar, Platform, Image } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useStyles } from 'react-native-unistyles'
import { splashStyles } from '../../../unistyles/authStyles'
import Animated, {FadeInDown}  from 'react-native-reanimated'
import CustomText from '@components/global/CustomText'
import { resetAndNavigate } from '@utils/NavigationUtils'

const SplashScreen:FC = () => {

  const {styles} = useStyles(splashStyles)

  useEffect (()=>{
    const timeOutId = setTimeout(() =>{
      resetAndNavigate('LoginScreen')
    },3000)

    return () =>clearTimeout(timeOutId)
  },[])
  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'}/>
      <Image source={require('../../../assets/images/logo_t.png')} style={styles.logoImage}/>
      <Animated.View style={styles.animatedContainer} entering={FadeInDown.delay(400).duration(800)}>
        <Image source={require('../../../assets/images/book.png')} style={styles.bookImage}/>

        <CustomText variant='h5' style={styles.msgText}
         fontFamily="Okra-MediumLight" color='#36009c'>
        Find your Dream Book  !
        </CustomText>
      </Animated.View>
    </View>
  )
}

export default SplashScreen
