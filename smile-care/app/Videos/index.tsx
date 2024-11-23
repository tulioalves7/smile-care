import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Modal from 'react-native-modal';
import YouTubePlayer from 'react-native-youtube-iframe';
import styles from './style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';

const VideosInterativos = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [currentVideoId, setCurrentVideoId] = useState('');

    const openVideo = (videoId: string) => {
        const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;
        Linking.openURL(youtubeUrl).catch((err) => console.error('Erro ao abrir o vídeo:', err));
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <CustomHeader />
                <Text style={styles.title}>Vídeos Práticos</Text>

                <Text style={styles.paragraph}>
                    Acompanhar orientações práticas pode fazer toda a diferença na sua rotina de cuidados bucais. Nesta seção, você encontrará vídeos em português elaborados por especialistas, que demonstram de forma clara e acessível as melhores práticas para manter a saúde da sua boca.
                </Text>

                <Text style={styles.paragraph}>
                    Desde a técnica correta de escovação até o uso adequado do fio dental, os vídeos oferecem instruções detalhadas para garantir uma higiene completa e eficiente. Além disso, você também aprenderá sobre a importância do flúor, como evitar doenças bucais e a melhor maneira de manter um hálito fresco e saudável.

                    Aproveite esses recursos e torne sua rotina de cuidados bucais ainda mais eficaz!
                </Text>

                <Text style={styles.sectionTitle}>Assista aos vídeos abaixo:</Text>

                <Text style={styles.subtitle}>Missão: Saúde Bucal</Text>
                <TouchableOpacity style={styles.videoButton} onPress={() => openVideo('SszM4uz1NO4')}>
                    <Text style={styles.videoText}>Assista Agora</Text>
                </TouchableOpacity>

                <Text style={styles.subtitle}>Alimentação Saudável e Saúde Bucal</Text>
                <TouchableOpacity style={styles.videoButton} onPress={() => openVideo('Ht2mN4x8pEQ')}>
                    <Text style={styles.videoText}>Assista Agora</Text>
                </TouchableOpacity>

                <Text style={styles.subtitle}>WebEducativa: Educação em Saúde Bucal - Conceitos e Princípios</Text>
                <TouchableOpacity style={styles.videoButton} onPress={() => openVideo('KA2GtLCD2AU')}>
                    <Text style={styles.videoText}>Assista Agora</Text>
                </TouchableOpacity>

                <Text style={styles.subtitle}>Saúde bucal na adolescência #Odontologia</Text>
                <TouchableOpacity style={styles.videoButton} onPress={() => openVideo('xjRIkN3SL7s')}>
                    <Text style={styles.videoText}>Assista Agora</Text>
                </TouchableOpacity>

            </ScrollView>
            <FooterMenu />
        </View>
    );
};

export default VideosInterativos;
