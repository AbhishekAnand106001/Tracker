import React from 'react'
import { Button, StyleSheet, Text } from 'react-native'
const TrackListScreen = ({navigation}) => {
  return (
    <>
    <Text style={{fontSize:48}}>Track List Screen</Text>
    <Button title="Go to Track Details" 
    onPress={()=>navigation.navigate('TrackDetails')}
    ></Button>
     </>
  )
}
const styles = StyleSheet.create({})
export default TrackListScreen
