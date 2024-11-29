import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import styles from './style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';
import Reanimated, { FadeIn, FadeInUp, SlideInUp, SlideOutDown } from 'react-native-reanimated';

const GuiasPraticos = () => {

    const topics = [
        { 
            id: 1,
            title: '1 - Segure a escova em um ângulo de 45° e faça movimentos suaves que vão da gengiva até a ponta dos dentes.',
            image: require('../../assets/images/passo1.png'),  // Caminho para a imagem
        },
        { 
            id: 2,
            title: '2 - Com movimentos circulares, escove as partes dos dentes voltadas para as buchechas, o lado interno e também a superfície usada para mastigar', 
            image: require('../../assets/images/passo2.png'), 
        },
        { 
            id: 3,
            title: '3 - Não se esqueça de escovar a língua com movimentos delicados, ajudando a remover bactérias e mantendo o hálito fresco.', 
            image: require('../../assets/images/passo3.png'), 
        },
        { 
            id: 4,
            title: '4 - Para o uso do fio dental, separe aproximadamente 40 centímetros, deixando uma pequena parte livre entre os dedos.', 
            image: require('../../assets/images/passo4.png'), 
        },
        { 
            id: 5,
            title: '5 - Passe o fio cuidadosamente acompanhando o formato dos dentes.', 
            image: require('../../assets/images/passo5.png'), 
        },
        { 
            id: 6,
            title: '6 - Certifique-se de acompanhar a linha da gengiva, mas sem pressionar o fio com muita força para evitar machucados.', 
            image: require('../../assets/images/passo6.png'), 
        },
    ];

    return (
        <Reanimated.View 
        key={'index0'}
        style={styles.container}
        entering={FadeInUp.duration(500)}
        >
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <CustomHeader />
                <Reanimated.Text 
                key={'index'}
                style={styles.title}
                entering={FadeInUp.duration(500)}
                >
                Guias Práticos
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index2'}
                style={styles.paragraph}
                entering={FadeInUp.duration(500)}
                >{'\n'}Bem-vindo à nossa seção de Guias Práticos para Saúde Bucal,
                    um espaço dedicado a fornecer orientações simples e eficazes para cuidar do seu sorriso.
                    {'\n'}{'\n'}Aqui, você encontrará instruções detalhadas para manter uma
                    boa higiene bucal, previnir doenças e melhorar a saúde dos seus dentes e gengivas.{'\n'}
                </Reanimated.Text>

                <Reanimated.Text
                key={'index3'}
                style={styles.topico}
                entering={FadeInUp.duration(500)}
                >4 Passos para um sorriso brilhante
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index4'}
                style={styles.subtitle}
                entering={FadeInUp.duration(500)}
                >Passo 1:
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index5'}
                style={styles.paragraph}
                entering={FadeInUp.duration(500)}
                >Escove os dentes pelo menos três vezes ao dia, especialmente
                    depois das refeições, usando um creme dental com flúor. Isso ajuda a remover resíduos de comida
                    e proteger seus dentes contra cáries.
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index6'}
                style={styles.subtitle}
                entering={FadeInUp.duration(500)}
                >{'\n'}Passo 2:
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index7'}
                style={styles.paragraph}
                entering={FadeInUp.duration(500)}
                >Use fio dental todos os dias. O fio dental alcança lugares
                    onde a escova não chega, ajudando a limpar entre os dentes e prevenindo problemas nas gengivas.
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index8'}
                style={styles.subtitle}
                entering={FadeInUp.duration(500)}
                >{'\n'}Passo 3:
                </Reanimated.Text>

                <Reanimated.Text 
                key={'inedx9'}
                style={styles.paragraph}
                entering={FadeInUp.duration(500)}
                >Modere nos lanches entre as refeições. Comer com muita frequência
                    aumenta o risco de acúmulo de açúcar nos dentes, o que pode causar cáries.
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index10'}
                style={styles.subtitle}
                entering={FadeInUp.duration(500)}
                >{'\n'}Passo 4:
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index11'}
                style={styles.paragraph}
                entering={FadeInUp.duration(500)}
                >Visite seu dentista regularmente para check-ups e limpezas.
                    Consultas frequentes garantem que sua saúde bucal esteja sempre em dia.{'\n'}{'\n'}
                </Reanimated.Text>

                <Reanimated.Text 
                key={'index12'}
                style={styles.topico}
                entering={FadeInUp.duration(500)}
                >Como escovar seus dentes
                </Reanimated.Text>

                {/* Renderizando os tópicos com imagem e texto */}
                {topics.map((topic) => (
                    <Reanimated.View key={topic.id} style={styles.topicoContainer}>
                        <Reanimated.Image source={topic.image} 
                        key={'indeximage'}
                        entering={FadeInUp.duration(500)}
                        style={styles.image} />

                        <Reanimated.Text 
                        key={'index13'}
                        style={styles.topicoText}
                        entering={FadeInUp.duration(500)}
                        >{topic.title}
                        </Reanimated.Text>
                    </Reanimated.View>
                ))}

            </ScrollView>
            <FooterMenu />
        </Reanimated.View>
         
    );
};

export default GuiasPraticos;
