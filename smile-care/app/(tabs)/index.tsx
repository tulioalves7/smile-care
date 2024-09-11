import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Logo no topo */}
      <View style={styles.logoContainer}>
        <Image source={require('@/assets/images/smile.png')} style={styles.logo} />
        {/* <Text style={styles.logoText}>SmileCare</Text> */}
      </View>

      {/* Botões principais */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Diagnóstico Bucal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cuidados Bucais</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Vídeos Interativos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Guias práticos</Text>
        </TouchableOpacity>
      </View>

      {/* Ajuda na parte inferior */}
      <View style={styles.helpContainer}>
        <Text style={styles.helpText}>Precisando de ajuda?</Text>
        <TouchableOpacity>
          <Text style={styles.helpLink}>Clique aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2F3737', // Cor de fundo escura
    padding: 20,
    justifyContent: 'space-between',
  },
  logoContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3FB3B5', // Cor do botão (turquesa)
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF', // Cor do texto dos botões
    fontWeight: '600',
  },
  helpContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  helpText: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  helpLink: {
    fontSize: 14,
    color: '#4ECCA3',
    fontWeight: 'bold',
  },
});
