import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const CustomHeader: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            {/* Botão com imagem de seta */}
            <TouchableOpacity
                onPress={() => navigation.navigate('Home' as never)} // Navegação para a página 'Home'
                style={styles.button}
            >
                <Image
                    source={require('../../assets/images/seta_esquerda.png')}
                    style={styles.setaEsquerda}
                />
            </TouchableOpacity>

            {/* Logo no canto direito */}
          
        </View>
    );
};

export default CustomHeader;
