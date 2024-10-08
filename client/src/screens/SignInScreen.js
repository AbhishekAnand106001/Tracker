import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
const SignInScreen = ({navigation}) => {
  return (
    <>
         <Text style={{fontSize:48}}>SignInScreen</Text>
         <Button title='Go To SignUp' onPress={()=>navigation.navigate('Signup')}></Button>
    </>
  )
}
const styles = StyleSheet.create({})
export default SignInScreen
