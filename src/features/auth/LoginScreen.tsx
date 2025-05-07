import CustomText from "@components/global/CustomText";
import BreakerText from "@components/ui/BreakerText";
import PhoneInput from "@components/ui/PhoneInput";
import SocialLogin from "@components/ui/SocialLogin";
import { loginStyles } from "@unistyles/authStyles";
import { resetAndNavigate } from "@utils/NavigationUtils";
import useKeyboardOffsetHeight from "@utils/useKeyboardOffsetHeight";
import { FC, useEffect, useRef, useState } from "react";
import { ActivityIndicator, Animated, Image, Platform, StatusBar, TouchableOpacity, View } from "react-native";
import { useStyles } from "react-native-unistyles";


const LoginScreen:FC = () => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const keyboardOffsetHeight = useKeyboardOffsetHeight()
    const {styles} = useStyles(loginStyles);
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(()=> {
      if (keyboardOffsetHeight== 0){
        Animated.timing(animatedValue, { toValue:0, duration: 500, useNativeDriver: true }).start();
      } else{
        Animated.timing(animatedValue, { toValue:-keyboardOffsetHeight * 0.25, duration: 500, 
          useNativeDriver: true }).start();
      }
    }, [keyboardOffsetHeight])

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
            resetAndNavigate('UserBottomTab')
        }, 2000)
    }

  return (
    <View style={styles.container}>
        <StatusBar hidden={Platform.OS !== 'android'}/>
        <Image source={require('../../assets/images/logo.png')} style={styles.cover}/>
      <Animated.ScrollView bounces={false} keyboardShouldPersistTaps='handled'
       keyboardDismissMode='on-drag' contentContainerStyle={styles.bottomContainer} style={{transform: [{translateY: animatedValue}]}}>

        <CustomText variant='h5'
         fontFamily="Okra-MediumLight" color='#36009c'>
        Continue Reading Where You Left Off
        </CustomText>
        <BreakerText text='Login or Sign up to Your Library' />

        <PhoneInput onFocus={() => {}} onBlur={() => {}} value={phone} onChangeText={setPhone}/>

        <TouchableOpacity style={styles.buttonContainer} disabled={loading} onPress={handleLogin}
        activeOpacity={0.8}
        >{loading ? (<ActivityIndicator size='small' color='#36009c'/>) :(
            <CustomText color='#ffffff' fontFamily='Okra-Medium' variant='h5'> Continue</CustomText>
        )}</TouchableOpacity>

      <BreakerText text='or' />

      <SocialLogin/>
      </Animated.ScrollView>

      <View style={styles.footer}>
        <CustomText>By continuing, you agree to our</CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms of service</CustomText>
          <CustomText style={styles.footerText}>Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policies</CustomText>
          
        </View>
      </View>

      
    </View>
  )
}

export default LoginScreen