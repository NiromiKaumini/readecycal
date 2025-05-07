import { View, Text, Pressable, TextInput } from 'react-native'
import React, { FC } from 'react'
import { useStyles } from 'react-native-unistyles';
import { phoneStyles } from '@unistyles/phoneStyles';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import CustomText from '@components/global/CustomText';

interface PhoneInputProps {
    value: string;
    onChangeText: (text:string) => void
    onFocus?: () => void;
    onBlur?: () => void;
}

const PhoneInput:FC<PhoneInputProps> = ({value,onChangeText,onBlur,onFocus}) => {
    const {styles} = useStyles(phoneStyles)
  return (
    <View style={styles.container}>
      <Pressable style={styles.countryPickerContainer}>
      <CustomText variant="h4">🇱🇰</CustomText>
      <Icon iconFamily='MaterialIcons' name="arrow-drop-down" color={Colors.lightText} size={18}/>
      </Pressable>
     

      <View style={styles.phoneInputContainer}>
        <CustomText fontFamily='Okra-Bold'>+94</CustomText>
        <TextInput placeholder='Enter Mobile Number' keyboardType='phone-pad' value={value}
        placeholderTextColor={Colors.lightText} onChangeText={onChangeText} onFocus={onFocus}
        onBlur={onBlur} style={styles.input} maxLength={10} />
        
      </View>
    </View>
  )
}

export default PhoneInput
