import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text >Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}  // Use setEmail directly for cleaner code
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"  // Optimized for email input
      />
      <Spacer />
      <Input
        label="Password"
        value={password}
        onChangeText={setPassword}  // Use setPassword directly for cleaner code
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer />
      <Button
        title="Sign Up"
        onPress={() => {
          // Add the logic for sign up
        }}
      />
      <Spacer />
     
    </View>
  );
};

// Use 'navigationOptions' function for screen-specific options
SignUpScreen.navigationOptions = {
  headerShown: false,  // Directly set 'headerShown' to false
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 14,
  },
});

export default SignUpScreen;
