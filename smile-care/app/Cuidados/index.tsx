import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import styles from './style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';

const CuidadosBucais = () => {
    return (
        <View style={styles.container}>
           <ScrollView contentContainerStyle={styles.scrollContent}>
                <CustomHeader />
                <Text style={styles.title}>Cuidados Bucais</Text>
                <Text style={styles.subtitle}>FUNCIONA</Text>
            </ScrollView>
            <FooterMenu />
        </View>
    );
};

export default CuidadosBucais;
