// Diagnostico/index.js (Diagnóstico Bucal)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DiagnosticoBucal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Diagnóstico Bucal</Text>
      {<h1>wwwwww</h1>}
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
  },
});

export default DiagnosticoBucal;
