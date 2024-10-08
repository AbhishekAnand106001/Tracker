import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Updated to @react-navigation/native
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; // Use this for bottom tabs
import SignUpScreen from './src/screens/SignUpScreen';
import SignInScreen from './src/screens/SignInScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';

// Stack navigator for the authentication flow
const Stack = createNativeStackNavigator();
function LoginFlow() {
  return (
    <Stack.Navigator initialRouteName="Signin" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={SignUpScreen} />
      <Stack.Screen name="Signin" component={SignInScreen} />
    </Stack.Navigator>
  );
}

// Stack navigator for track-related screens
function TrackListFlow() {
  return (
    <Stack.Navigator initialRouteName="TrackList" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TrackList" component={TrackListScreen} />
      <Stack.Screen name="TrackDetails" component={TrackDetailsScreen} />
    </Stack.Navigator>
  );
}

// Main flow using bottom tabs
const Tab = createMaterialBottomTabNavigator();
function MainFlow() {
  return (
    <Tab.Navigator initialRouteName="TrackListFlow" shifting={true} barStyle={{ backgroundColor: '#6200EE' }}>
      <Tab.Screen name="TrackListFlow" component={TrackListFlow} />
      <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginFlow" component={LoginFlow} />
        <Stack.Screen name="mainFlow" component={MainFlow} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
