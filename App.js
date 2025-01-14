

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import intro from "./intro";

import { app, auth } from './firebase'; // Import app and auth from firebase

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          initialParams={{ auth: auth }} // Pass the 'auth' object as initialParams
        />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
