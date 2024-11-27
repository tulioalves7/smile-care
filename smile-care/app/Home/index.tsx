import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { RootStackParamList } from '../_layout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Reanimated, { FadeIn, FadeInUp, SlideInUp, SlideOutDown } from 'react-native-reanimated';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Reanimated.Image
                key={'index'}
                entering={FadeInUp.duration(500)}
                source={require('../../assets/images/logosmile.png')}
                style={styles.logo}
            />
            <Reanimated.Image
                key={'index2'}
                entering={FadeInUp.duration(500)}
                source={require('../../assets/images/smile_escrita.png')}
                style={styles.title}
            />

                <TouchableOpacity onPress={() => navigation.navigate('Creditos')}>
                    <View>
                        <Text style={styles.credits}>Gostou? Confira os <Text style={styles.creditsunder}>créditos</Text> </Text>
                    </View>
                </TouchableOpacity>   

            {/* Botão */}

            <Reanimated.View 
                style={styles.buttonContainer}
                entering={FadeIn.duration(1000)}
            >
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
            </Reanimated.View>

            {/* Ajuda */}
            <TouchableOpacity onPress={() => navigation.navigate('Tela Ajuda')} style={styles.needHelpContainer}>
                
                <Text style={styles.needHelpText}>Precisando de ajuda?</Text>

                    <Text style={styles.buttonTextHelp}>Clique aqui</Text>
                </TouchableOpacity>
        </View>
    );
};

export default HomeScreen;
