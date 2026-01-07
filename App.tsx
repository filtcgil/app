import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import FolderScreen from './src/screens/FolderScreen';

export type RootStackParamList = {
  Home: undefined;
  Folder: { title?: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'UnionHub' }}
        />
        <Stack.Screen
          name="Folder"
          component={FolderScreen}
          options={({ route }) => ({
            title: route.params?.title ?? 'Cartella',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
