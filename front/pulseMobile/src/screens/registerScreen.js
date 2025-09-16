import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeaderLogo from '../components/HeaderLogo';

export default function RegisterScreen({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      <HeaderLogo />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Cadastrar</Text>

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="nome@email.com" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Cpf</Text>
        <TextInput style={styles.input} placeholder="999.999.999-99" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Data de Nascimento</Text>
        <TextInput style={styles.input} placeholder="01/01/2001" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Telefone</Text>
        <TextInput style={styles.input} placeholder="(19) 91234-5678" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Crie uma senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={22} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirme a senha"
            placeholderTextColor="#aaa"
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={22} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.checkboxContainer}>
          <TouchableOpacity style={styles.checkbox} />
          <Text style={styles.termsText}>
            Eu li e aceito os <Text style={styles.link}>Termos e Condições</Text> e as{' '}
            <Text style={styles.link}>Políticas de Privacidade</Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Cadastrar</Text>
        </TouchableOpacity>

        <Text style={styles.backToLoginText}>
          Já tem uma conta?{' '}
          <Text
            style={styles.backToLoginLink}
            onPress={() => navigation.navigate('Login')}
          >
            Voltar para Login
          </Text>
        </Text>

        <Text style={styles.orText}>Ou cadastre com:</Text>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 30, alignItems: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 20 },
  label: { alignSelf: 'flex-start', fontSize: 14, fontWeight: 'bold', marginTop: 10 },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginTop: 5,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  passwordInput: { flex: 1, fontSize: 16 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: 15 },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1.5,
    borderColor: '#333',
    borderRadius: 5,
    marginRight: 10,
  },
  termsText: { flex: 1, fontSize: 13, color: '#444' },
  link: { color: '#00A86B', fontWeight: 'bold' },
  registerButton: {
    backgroundColor: '#00C851',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  backToLoginText: { marginBottom: 20, fontSize: 14, color: '#444' },
  backToLoginLink: { color: '#00A86B', fontWeight: 'bold' },
  orText: { marginBottom: 10, fontSize: 14, color: '#555' },
  socialContainer: { flexDirection: 'row', justifyContent: 'center' },
  socialButton: { marginHorizontal: 10 },
  socialIcon: { width: 40, height: 40, resizeMode: 'contain' },
});
