import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeTabs from './HomeTabs';
import FolderScreen from '../screens/FolderScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Folder"
          component={FolderScreen}
          options={({ route }: any) => ({
            title: route.params?.title ?? 'Cartella',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
