import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importando telas
import SplashScreen from './src/screens/splashScreen';
import LoginScreen from './src/screens/loginScreen';
import RegisterScreen from './src/screens/registerScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
    
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>

        <Stack.Screen name="Login"component={LoginScreen}options={{ headerShown: false }}/>
        
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
