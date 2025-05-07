import { View, Text, Image } from 'react-native'
import React from 'react'
import { emptyStyles } from '@unistyles/emptyStyles';
import { useStyles } from 'react-native-unistyles';

const ReadingScreen = () => {
     const {styles} = useStyles(emptyStyles);
  return (
    <View style={styles.container(false)}>
          <Image source={require('../../assets/images/coming_soon2.png')} style={styles.emptyImage}/>
        </View>
  )
}

export default ReadingScreen