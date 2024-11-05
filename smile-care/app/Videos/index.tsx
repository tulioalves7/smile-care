import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';

const VideosInterativos = () => {
    return (
        <View style={styles.container}>
            <CustomHeader />
            <Text style={styles.title}>Vídeos Interativos</Text>
            <Text style={styles.subtitle}>FUNCIONA</Text>
            <FooterMenu />
        </View>
    );
};

export default VideosInterativos;
