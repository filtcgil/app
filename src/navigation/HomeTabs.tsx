import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import AnnunciScreen from '../screens/AnnunciScreen';
import ScioperiScreen from '../screens/ScioperiScreen';
import NewsScreen from '../screens/NewsScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Documenti' }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatScreen}
      />
      <Tab.Screen
        name="Annunci"
        component={AnnunciScreen}
      />
      <Tab.Screen
        name="Scioperi"
        component={ScioperiScreen}
      />
      <Tab.Screen
        name="News"
        component={NewsScreen}
      />
    </Tab.Navigator>
  );
}
