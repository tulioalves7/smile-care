import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomHeader from '../Cabecalho/CustomHeader'; 
import styles from './style';
import FooterMenu from '../Rodape/CustomRodape';

const DiagnosticoBucal = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Text style={styles.title}>Diagnóstico Bucal</Text>
      <Text style={styles.subtitle}>FUNCIONA</Text>
      <FooterMenu />
    </View>
  );
};

export default DiagnosticoBucal;
