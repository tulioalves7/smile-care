import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../Cuidados/style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';

const CuidadosBucais = () => {
  return (
    <View style={styles.container}>
      
      <CustomHeader />

      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
      <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Cuidados Bucais</Text>
      
      {/* Subtítulo */}
      <Text style={styles.subtitle}>O que é ter uma saúde bucal?</Text>
      
    </View>
       
        <Text style={styles.paragraph}>
          Quando falamos de saúde bucal, não estamos apenas pensando em escovar os dentes e ter um sorriso bonito. Embora dentes alinhados e brancos sejam ótimos,
          a saúde da boca envolve muito mais do que isso.
        </Text>
        <Text style={styles.paragraph}>
          Saúde bucal significa que não há doenças na sua boca. Isso quer dizer que, além de não ter cáries, você também precisa estar livre de outros problemas como gengivite, periodontite, aftas, e até condições mais graves como o câncer de boca.
        </Text>
        <Text style={styles.paragraph}>
          <Text style={styles.link}>Curiosidades:</Text> Cuidar bem da sua boca pode ajudar a prevenir doenças em outras partes do corpo, você sabia disso?
        </Text>

        
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              5 Dicas preventivas para manter a saúde dos dentes em dia
            </Text>
          </TouchableOpacity>
        </View>

        
        <Text style={styles.paragraph}>
          Para manter a saúde dos dentes em dia e evitar doenças bucais, é importante entender como funciona a nossa boca. Além da gengiva, língua e dentes, a boca é o lar de muitos micro-organismos, incluindo bactérias. Algumas dessas bactérias são boas e ajudam na digestão e na proteção contra infecções.
        </Text>
        <Text style={styles.paragraph}>
          No entanto, também há bactérias que podem causar problemas se não forem controladas. Essas bactérias se alimentam dos restos de alimentos na boca e produzem ácidos, o que pode levar a cáries, doenças gengivais e mau hálito.
        </Text>
        <Text style={styles.paragraph}>
          A melhor maneira de combater essas bactérias ruins é manter uma boa rotina de higiene bucal. Aqui estão <Text style={styles.highlightText}>5 dicas simples</Text> para ajudar você a cuidar dos seus dentes e manter a saúde bucal em dia:
        </Text>

       
        <TouchableOpacity style={styles.tipButton}>
          <Text style={styles.tipButtonText}>1. Tudo começa na escovação</Text>
        </TouchableOpacity>

        <Text style={styles.paragraph}>
          A escovação regular dos dentes, especialmente após as refeições, é fundamental para remover a placa bacteriana, prevenir o mau hálito e manter a gengiva saudável.
        </Text>

        <Text style={styles.paragraph}>
          Esse hábito simples não só contribui para a sua saúde dental, removendo manchas superficiais, mas também ajuda a deixar seu sorriso mais bonito e radiante!
        </Text>

        
        <Image
          source={require('../Cuidados/images/smileCare.png')} 
          style={styles.image}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.tipButton}>
          <Text style={styles.tipButtonText}>2. Faça do fio dental um aliado </Text>
        </TouchableOpacity>

        <Text style={styles.paragraph}>
        Usar o fio dental regularmente é outro cuidado básico para tirar a placa bacteriana e os restos de alimentos nas áreas que a escova de dente não consegue alcançar. 

        </Text>
      
        <Text style={styles.paragraph}>
        Basta segurar o fio dental entre os dedos e deslizar com movimentos suaves de vaivém entre os dentes.
        </Text>

        <TouchableOpacity style={styles.tipButton}>
          <Text style={styles.tipButtonText}>3. Complemente com um bom enxaguante bucal </Text>
        </TouchableOpacity>

        <Text style={styles.paragraph}>
        Esse é um produto para complementar a higiene bucal, que ajuda a reduzir a quantidade de bactérias na boca e deixar um hálito super refrescante. 
        </Text>
      
        <Text style={styles.paragraph}>
        Ele pode ser usado após a escovação e o fio dental, basta fazer um bochecho de até 1 minuto e pronto: sua boca já estará protegida!
        </Text>

        <TouchableOpacity style={styles.tipButton}>
          <Text style={styles.tipButtonText}>4. Priorize produtos com flúor em sua composição </Text>
        </TouchableOpacity>

        <Text style={styles.paragraph}>
        Você sabia que o flúor é ótimo para fortalecer os dentes e torná-los mais resistentes às cáries?
        </Text>
      
        <Text style={styles.paragraph}>
        Uma maneira simples de garantir essa proteção é escolher produtos com flúor para sua rotina de higiene bucal. Veja como incluir ele no seu dia a dia:
        <View style={styles.listContainer}>
        <Text style={styles.listItem}>• Opte por cremes dentais com flúor para uso diário;</Text>
        <Text style={styles.listItem}>• Utilize enxaguantes bucais com flúor;</Text>
        <Text style={styles.listItem}>• Fale com o seu dentista sobre aplicações de flúor periódicas.</Text>
      </View>
      </Text>

      <TouchableOpacity style={styles.tipButton}>
          <Text style={styles.tipButtonText}>5. Visite o dentista regularmente </Text>
        </TouchableOpacity>

        <Text style={styles.paragraph}>
        Vale lembrar que, mesmo mantendo uma rotina de cuidados com a boca em casa, é fundamental ir ao dentista regularmente. No consultório, você poderá fazer uma limpeza profissional, eliminando totalmente a placa bacteriana e o tártaro dos dentes. 
        </Text>
      
        <Text style={styles.paragraph}>
        Além disso, fica mais fácil detectar doenças gengivais, evitando que elas evoluam para uma possível gengivite ou, em casos mais graves, para uma periodontite.
        </Text>

        <View style={styles.container}>
      <Text style={styles.text}>
        Se você ainda não marcou a sua consulta, a hora é agora!
      </Text>
    </View>


      </ScrollView>

     
      <FooterMenu />
    </View>
  );
};

export default CuidadosBucais;
