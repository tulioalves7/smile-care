import React, { useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: '', // Define um título vazio
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Área superior com logo */}
      <View style={styles.header}>
        <Image source={require('@/assets/images/smile.png')} style={styles.logo} />
      </View>

      {/* Conteúdo principal com fundo preto e bordas arredondadas */}
      <View style={styles.content}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Fundo claro no topo
  },
  header: {
    alignItems: 'center',
    paddingVertical: 30,
    marginBottom: 20,
  },
  logo: {
    width: 140,  // Aumentando o tamanho da logo
    height: 140,
    resizeMode: 'contain',
  },
  content: {
    flex: 1,
    backgroundColor: '#2F3737', // Fundo escuro
    borderTopLeftRadius: 140, // Adicionando borda arredondada no topo do fundo preto
    borderTopRightRadius: 120,
    paddingTop: 100,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3FB3B5',
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
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
    color: '#28DDE0',
    fontWeight: 'bold',
  },
});
