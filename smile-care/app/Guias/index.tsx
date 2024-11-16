import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import styles from './style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';

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
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <CustomHeader />
                <Text style={styles.title}>Guias Práticos</Text>
                <Text style={styles.paragraph}>{'\n'}Bem-vindo à nossa seção de Guias Práticos para Saúde Bucal,
                    um espaço dedicado a fornecer orientações simples e eficazes para cuidar do seu sorriso.
                    {'\n'}{'\n'}Aqui, você encontrará instruções detalhadas para manter uma
                    boa higiene bucal, previnir doenças e melhorar a saúde dos seus dentes e gengivas.{'\n'}
                </Text>

                <Text style={styles.topico}>4 Passos para um sorriso brilhante</Text>
                <Text style={styles.subtitle}>Passo 1:</Text>
                <Text style={styles.paragraph}>Escove os dentes pelo menos três vezes ao dia, especialmente
                    depois das refeições, usando um creme dental com flúor. Isso ajuda a remover resíduos de comida
                    e proteger seus dentes contra cáries.
                </Text>
                <Text style={styles.subtitle}>{'\n'}Passo 2:</Text>
                <Text style={styles.paragraph}>Use fio dental todos os dias. O fio dental alcança lugares
                    onde a escova não chega, ajudando a limpar entre os dentes e prevenindo problemas nas gengivas.
                </Text>
                <Text style={styles.subtitle}>{'\n'}Passo 3:</Text>
                <Text style={styles.paragraph}>Modere nos lanches entre as refeições. Comer com muita frequência
                    aumenta o risco de acúmulo de açúcar nos dentes, o que pode causar cáries.
                </Text>
                <Text style={styles.subtitle}>{'\n'}Passo 4:</Text>
                <Text style={styles.paragraph}>Visite seu dentista regularmente para check-ups e limpezas.
                    Consultas frequentes garantem que sua saúde bucal esteja sempre em dia.{'\n'}{'\n'}
                </Text>

                <Text style={styles.topico}>Como escovar seus dentes</Text>

                {/* Renderizando os tópicos com imagem e texto */}
                {topics.map((topic) => (
                    <View key={topic.id} style={styles.topicoContainer}>
                        <Image source={topic.image} style={styles.image} />
                        <Text style={styles.topicoText}>{topic.title}</Text>
                    </View>
                ))}

            </ScrollView>
            <FooterMenu />
        </View>
         
    );
};

export default GuiasPraticos;
