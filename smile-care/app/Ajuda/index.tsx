import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';
import CustomHeader from '../Cabecalho/CustomHeader';

const TelaAjuda = () => {
  return (
    <View style={styles.container}>
      <CustomHeader />
      <Text style={styles.title}>Tela de Ajuda</Text>
      <Text style={styles.subtitle}>FUNCIONA</Text>
    </View>
  );
};

export default TelaAjuda;
