import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './splashscreen';
import Login from './login';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialrouteName="Splashscreen">
        <Stack.Screen name ="Splashscreen" component={SplashScreen}/>
        <Stack.Screen name ="login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
