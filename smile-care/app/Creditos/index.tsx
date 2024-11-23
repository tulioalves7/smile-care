import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../Creditos/style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';

const Creditos = () => {
  return (
    <View style={styles.container}>
      
      <CustomHeader />

      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
      <View style={styles.container}>
      <Text style={styles.title}>Créditos</Text>
      

      <Text style={styles.subtitle}>Fabrica de Software: Desenvolvimento de WebSites, Aplicativos e Jogos</Text>
      
    </View>
       
        <Text style={styles.content}>
          <Text style={styles.initContent}>Prof. Cordenador:</Text> Prof. Dr. Elvio Gilberto da Silva 
        </Text>
        <Text style={styles.content}>
          <Text style={styles.initContent}>Prof. Colaborador:</Text> Prof. Luís Filipe Grael Tinós
        </Text>
        <Text style={styles.content}>
          <Text style={styles.initContent}>Equipe:</Text> Alicia Gomes Dias, Guilherme Gazzola Pilatos, Isaque de Campos Miassaca, João Matheus Marques, Leandro Brosco Camanforte, Túlio Braga Alves
        </Text>
       
        <Text style={styles.subtitle}>Apoio:</Text>

      <View style={styles.imagens}>
      <Image
        source={require('../../assets/images/unisagrado.png')}
        style={styles.image}
      ></Image>
       <Image
        source={require('../../assets/images/unisagrado.png')}
        style={styles.image}
      ></Image>
      </View>

      </ScrollView>
      <FooterMenu />
    </View>
  );
};

export default Creditos;
