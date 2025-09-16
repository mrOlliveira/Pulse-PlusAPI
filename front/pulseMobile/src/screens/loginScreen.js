import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import HeaderLogo from '../components/HeaderLogo';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <HeaderLogo />

      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.forgotText}>Esqueci a senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          Ainda não criou uma conta?{' '}
          <Text
            style={styles.registerLink}
            onPress={() => navigation.navigate('Register')}
          >
            Registre agora
          </Text>
        </Text>

        <Text style={styles.orText}>Ou logue com:</Text>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../images/google.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../images/apple.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Image source={require('../images/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 25 },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  forgotText: { alignSelf: 'flex-start', marginBottom: 20, color: '#00A86B' },
  loginButton: {
    backgroundColor: '#00C851',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  registerText: { marginBottom: 20, fontSize: 14, color: '#444' },
  registerLink: { color: '#00A86B', fontWeight: 'bold' },
  orText: { marginBottom: 10, fontSize: 14, color: '#555' },
  socialContainer: { flexDirection: 'row', justifyContent: 'center' },
  socialButton: { marginHorizontal: 10 },
  socialIcon: { width: 40, height: 40, resizeMode: 'contain' },
});
