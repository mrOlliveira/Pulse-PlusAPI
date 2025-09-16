import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< HEAD

// Importando telas
=======
import RegisterScreen from './src/screens/registerScreen';
>>>>>>> c7a0aea873061b53b6cfdb8f7e11741a28d79c2d
import SplashScreen from './src/screens/splashScreen';
import LoginScreen from './src/screens/loginScreen';
import RegisterScreen from './src/screens/registerScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
<<<<<<< HEAD
    
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }}/>

        <Stack.Screen name="Login"component={LoginScreen}options={{ headerShown: false }}/>
        
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }}/>

        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>

=======
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
>>>>>>> c7a0aea873061b53b6cfdb8f7e11741a28d79c2d
      </Stack.Navigator>
    </NavigationContainer>
  );
}
