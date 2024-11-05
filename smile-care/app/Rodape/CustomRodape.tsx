// FooterMenu.tsx
import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import styles from '../Rodape/style';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../_layout';

type FooterMenuProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const FooterMenu: React.FC = () => {
    const navigation = useNavigation<FooterMenuProps>();

    return (
        <View style={styles.footer}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Diagnóstico Bucal')}
            >
                <Image
                    source={require('../../assets/images/diagnostico_bucal.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Cuidados Bucais')}
            >
                <Image
                    source={require('../../assets/images/cuidados_bucais.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Vídeos Interativos')}
            >
                <Image
                    source={require('../../assets/images/videos_interativos.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Guias Práticos')}
            >
                <Image
                    source={require('../../assets/images/guias_praticos.png')}
                    style={styles.icon}
                />
            </TouchableOpacity>
        </View>
    );
}

export default FooterMenu;
