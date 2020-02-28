import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/Main';
import Training from './pages/Training';

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Main" screenOptions={{ headerStyle: { backgroundColor: '#FFE700'}, headerTintColor: '#333'}}>
      <Stack.Screen name="Main" component={Main} options={{ title: 'Início' }} />
      <Stack.Screen name="Training" component={Training} />
    </Stack.Navigator>
  );
}

export default Routes;

