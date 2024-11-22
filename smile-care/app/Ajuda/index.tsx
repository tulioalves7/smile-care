import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from './style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';

const TelaAjuda = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <CustomHeader />
        <Text style={styles.title}>Ajuda</Text>
        <Text style={styles.sectionTitle}>Cuidados Bucais</Text>
        <Text style={styles.description}>Explica a importância da saúde bucal para além da estética, abordando problemas como cáries e doenças gengivais. Apresenta cinco dicas práticas de higiene: escovação, uso de fio dental, enxaguante bucal, produtos com flúor e a importância das visitas regulares ao dentista.</Text>

        <Text style={styles.sectionTitle}>Guias Práticos</Text>
        <Text style={styles.description}>Seção com instruções detalhadas sobre higiene bucal. Ensina a escovação correta, o uso do fio dental e oferece dicas sobre a frequência de cuidados para manter os dentes e gengivas saudáveis.</Text>

        <Text style={styles.sectionTitle}>Vídeos Práticos</Text>
        <Text style={styles.description}>Disponibiliza vídeos educativos sobre técnicas de escovação, uso do fio dental e benefícios do flúor, facilitando a visualização dos cuidados necessários para uma boa saúde bucal.</Text>

        <Text style={styles.sectionTitle}>Diagnóstico Bucal</Text>
        <Text style={styles.description}>Um questionário interativo que avalia os hábitos de saúde bucal do usuário, atribuindo uma pontuação com base em respostas sobre escovação, uso de fio dental, visitas ao dentista, entre outros. A pontuação final classifica a saúde bucal como "Péssima", "Regular" ou "Ótima".</Text>
        </ScrollView>
        <FooterMenu />
    </View>
  );
};

export default TelaAjuda;