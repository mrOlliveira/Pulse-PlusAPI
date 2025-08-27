import { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { styles } from '../styles/splashStyles';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/login'); // Vai para login após 3 segundos
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        PULSE<Text style={styles.plus}>+</Text>
      </Text>
      <Image 
        source={require('../assets/images/logo.png')} 
        style={styles.logo}
      />
    </View>
  );
}