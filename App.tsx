import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./screens/home";
import Details from "./screens/details";
//Styles
import styles from "./globalStyles"

const Stack = createStackNavigator();

export default function App() {
  const headerOptions = {headerStyle: styles.headerHome, headerTintColor: "white"}
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokedex" component={Home} options={headerOptions} />
        <Stack.Screen name="Details" component={Details} options={headerOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

