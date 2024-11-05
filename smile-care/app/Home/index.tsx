import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { RootStackParamList } from '../_layout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* Logo e título */}
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
            />
            <Image
                source={require('../../assets/images/smile_escrita.png')}
                style={styles.title}
            />

            {/* Botões */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Diagnóstico Bucal')}
                >
                    <Image
                        source={require('../../assets/images/diagnostico_bucal.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Diagnóstico Bucal</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Cuidados Bucais')}
                >
                    <Image
                        source={require('../../assets/images/cuidados_bucais.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Cuidados Bucais</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Vídeos Interativos')}
                >
                    <Image
                        source={require('../../assets/images/videos_interativos.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Vídeos Práticos</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Guias Práticos')}
                >
                    <Image
                        source={require('../../assets/images/guias_praticos.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Guias práticos</Text>
                </TouchableOpacity>
            </View>

            {/* Ajuda */}
            <TouchableOpacity style={styles.needHelpContainer}>
                <Text style={styles.needHelpText}>Precisando de ajuda?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Tela Ajuda')}
                >
                    <Text style={styles.buttonTextHelp}>Clique aqui</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
