import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GuiasPraticos = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guias Práticos</Text>
      <Text style={styles.subtitle}>FUNCIONA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default GuiasPraticos;
