import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginLogo from './components/LoginLogo';
import LoginView from './components/LoginView';


const Stack = createNativeStackNavigator();
//const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginLogo} />
        <Stack.Screen name="LoginView" component={LoginView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;