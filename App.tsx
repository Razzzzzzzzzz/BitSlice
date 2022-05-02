import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './Screen/Login';
import SignupScreen from './Screen/Signup';
import ChatScreen from './Screen/Chat';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{
          
          headerStyle: {
            backgroundColor: '#f2f2f2',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{
          
          headerStyle: {
            backgroundColor: '#f2f2f2',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}/>
        <Stack.Screen name="Chat" component={ChatScreen}options={{
          
          headerStyle: {
            backgroundColor: '#f2f2f2',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


