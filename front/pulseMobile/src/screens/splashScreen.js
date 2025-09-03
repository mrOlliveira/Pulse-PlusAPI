import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Timer para navegar para a tela de login após 3 segundos
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.pulseText}>PULSE</Text>
        <Text style={styles.plusText}>+</Text>
      <Image
        source={{uri: './images/simbolosplash.png' }}
        style={{ width: 100, height:100}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Fundo preto como na imagem
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  pulseText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff', // Texto branco
  },
  plusText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ff0000', // Sinal de + em vermelho
    marginLeft: 5,
  },
  timeText: {
    position: 'absolute',
    top: 50,
    right: 20,
    fontSize: 16,
    color: '#fff',
  },
  fgText: {
    position: 'absolute',
    bottom: 30,
    fontSize: 16,
    color: '#fff',
  },
});