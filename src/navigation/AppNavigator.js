import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import ScioperiScreen from '../screens/ScioperiScreen';
import AnnunciScreen from '../screens/AnnunciScreen';
import TempoLiberoScreen from '../screens/TempoLiberoScreen';
import BenefitsScreen from '../screens/BenefitsScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Scioperi" component={ScioperiScreen} />
      <Stack.Screen name="Annunci" component={AnnunciScreen} />
      <Stack.Screen name="TempoLibero" component={TempoLiberoScreen} />
      <Stack.Screen name="Benefits" component={BenefitsScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  );
  }
