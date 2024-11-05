import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';

const GuiasPraticos = () => {
    return (
        <View style={styles.container}>
            <CustomHeader />
            <Text style={styles.title}>Guias Práticos</Text>
            <Text style={styles.subtitle}>FUNCIONA</Text>
            <FooterMenu />
        </View>
    );
};

export default GuiasPraticos;
