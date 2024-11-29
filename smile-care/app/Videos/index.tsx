import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import Modal from 'react-native-modal';
import YouTubePlayer from 'react-native-youtube-iframe';
import styles from './style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';
import Reanimated, { FadeIn, FadeInUp, SlideInUp, SlideOutDown } from 'react-native-reanimated';

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
                <Reanimated.Text 
                key={'index'}
                style={styles.title}
                entering={FadeInUp.duration(500)}
                >
                    Vídeos Práticos
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index2'}
                style={styles.paragraph}
                entering={FadeInUp.duration(500)}
                >
                    Acompanhar orientações práticas pode fazer toda a diferença na sua rotina de cuidados bucais. Nesta seção, você encontrará vídeos em português elaborados por especialistas, que demonstram de forma clara e acessível as melhores práticas para manter a saúde da sua boca.
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index3'}
                style={styles.paragraph}
                entering={FadeInUp.duration(500)}
                >
                    Desde a técnica correta de escovação até o uso adequado do fio dental, os vídeos oferecem instruções detalhadas para garantir uma higiene completa e eficiente. Além disso, você também aprenderá sobre a importância do flúor, como evitar doenças bucais e a melhor maneira de manter um hálito fresco e saudável.

                    Aproveite esses recursos e torne sua rotina de cuidados bucais ainda mais eficaz!
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index4'}
                style={styles.sectionTitle}
                entering={FadeInUp.duration(500)}
                >Assista aos vídeos abaixo:

                </Reanimated.Text>

                <Reanimated.Text 
                key={'index5'}
                style={styles.subtitle}
                entering={FadeInUp.duration(500)}
                >Missão: Saúde Bucal

                </Reanimated.Text>
                
                <TouchableOpacity style={styles.videoButton} onPress={() => openVideo('SszM4uz1NO4')}>
                    
                    <Reanimated.Text 
                    key={'index6'}
                    style={styles.videoText}
                    entering={FadeInUp.duration(500)}
                    >Assista Agora
                    </Reanimated.Text>
                </TouchableOpacity>

                <Reanimated.Text 
                key={'index7'}
                style={styles.subtitle}
                entering={FadeInUp.duration(500)}
                >Alimentação Saudável e Saúde Bucal
                </Reanimated.Text>

                <TouchableOpacity style={styles.videoButton} onPress={() => openVideo('Ht2mN4x8pEQ')}>
                    <Reanimated.Text 
                    key={'index8'}
                    style={styles.videoText}
                    entering={FadeInUp.duration(500)}
                  
                    >Assista Agora
                    </Reanimated.Text>
                </TouchableOpacity>

                <Reanimated.Text 
                key={'index9'}
                style={styles.subtitle}
                entering={FadeInUp.duration(500)}
                >WebEducativa: Educação em Saúde Bucal - Conceitos e Princípios

                </Reanimated.Text>

                <TouchableOpacity style={styles.videoButton} onPress={() => openVideo('KA2GtLCD2AU')}>
                    <Reanimated.Text 
                    key={'index10'}
                    style={styles.videoText}
                    entering={FadeInUp.duration(500)}
                    >Assista Agora
                    </Reanimated.Text>

                </TouchableOpacity>

                <Reanimated.Text 
                key={'index11'}
                style={styles.subtitle}
                entering={FadeInUp.duration(500)}
                >Saúde bucal na adolescência #Odontologia
                </Reanimated.Text>

                <TouchableOpacity style={styles.videoButton} onPress={() => openVideo('xjRIkN3SL7s')}>

                    <Reanimated.Text
                    key={'index12'} 
                    style={styles.videoText}
                    entering={FadeInUp.duration(500)}
                    >Assista Agora
                    
                    </Reanimated.Text>
                </TouchableOpacity>

            </ScrollView>
            <FooterMenu />
        </View>
    );
};

export default VideosInterativos;
