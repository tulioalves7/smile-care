import React from 'react';
import styles from './style';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importa a navegação

const CustomHeader = () => {
  const navigation = useNavigation(); // Hook para a navegação

    return (
        <View style={styles.largeSemiCircle}>
        <View style={styles.smallSemiCircle}>
            {/* Botão com imagem de seta */}
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Home')} // Navega para a página Home
            >
            <Image 
                source={require('../../assets/images/seta_esquerda.png')} 
                style={styles.setaEsquerda} 
            />
            </TouchableOpacity>

            {/* Logo no canto direito */}
            <Image 
            source={require('../../assets/images/smile_escrita.png')} 
            style={styles.logo} 
            />
        </View>
        </View>
    );
};

export default CustomHeader;
