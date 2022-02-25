import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SignupForm from '../components/auth/SignupForm'

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer} >
          <Image 
            source={{uri: 'https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png', height: 100, width: 100}} 
  
          />
      </View>

      {/* Login Form */}
      <SignupForm navigation={navigation} />
      
    </View>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50, 
        paddingHorizontal: 12
    },
    logoContainer:{
        alignItems: 'center',
        marginTop: 60
    }
})