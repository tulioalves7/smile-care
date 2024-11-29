import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import styles from '../Cuidados/style';
import CustomHeader from '../Cabecalho/CustomHeader';
import FooterMenu from '../Rodape/CustomRodape';
import Reanimated, { FadeIn, FadeInUp, SlideInUp, SlideOutDown } from 'react-native-reanimated';

const CuidadosBucais = () => {
  return (
   <Reanimated.View
     style={styles.container}
    >
    
      <CustomHeader/>
      <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
      <Reanimated.Text entering={FadeInUp.duration(500)}>   
        <Text style={styles.title}>Cuidados Bucais</Text>
      </Reanimated.Text>
      
    </View>
       <Reanimated.Text>
        <Reanimated.Text
         key={'index'}
         style={styles.paragraph}
         entering={FadeInUp.duration(1000)}
         >
          Quando falamos de saúde bucal, não estamos apenas pensando em escovar os dentes e ter um sorriso bonito. Embora dentes alinhados e brancos sejam ótimos, a saúde da boca envolve muito mais do que isso.
        </Reanimated.Text>

        <Reanimated.Text 
        style={styles.paragraph}
        key={'index2'}
          entering={FadeInUp.duration(1000)}
          >
          Saúde bucal significa que não há doenças na sua boca. Isso quer dizer que, além de não ter cáries, você também precisa estar livre de outros problemas como gengivite, periodontite, aftas, e até condições mais graves como o câncer de boca.
        </Reanimated.Text>
        <Reanimated.Text
         style={styles.paragraph} 
         key={'index3'}
         entering={FadeInUp.duration(1000)}
         >
         
          <Text style={styles.link}>Curiosidades:</Text> Cuidar bem da sua boca pode ajudar a prevenir doenças em outras partes do corpo, você sabia disso?
        </Reanimated.Text>

        
        <Reanimated.View 
        style={styles.buttonContainer}
        key={'index4'}
        entering={FadeInUp.duration(500)}
        >
          <TouchableOpacity style={styles.button}>
            <Reanimated.Text 
            key={'index0'}
            style={styles.buttonText}
            entering={FadeInUp.duration(500)}
            >
              5 Dicas preventivas para manter a saúde dos dentes em dia
            </Reanimated.Text>
          </TouchableOpacity>
        </Reanimated.View>

        
        <Reanimated.Text
         style={styles.paragraph}
         key={'index5'}
         entering={FadeInUp.duration(1000)}
         >
          Para manter a saúde dos dentes em dia e evitar doenças bucais, é importante entender como funciona a nossa boca. Além da gengiva, língua e dentes, a boca é o lar de muitos micro-organismos, incluindo bactérias. Algumas dessas bactérias são boas e ajudam na digestão e na proteção contra infecções.
        </Reanimated.Text>

        <Reanimated.Text 
        style={styles.paragraph}
        key={'index6'}
        entering={FadeInUp.duration(1000)}
        >
          No entanto, também há bactérias que podem causar problemas se não forem controladas. Essas bactérias se alimentam dos restos de alimentos na boca e produzem ácidos, o que pode levar a cáries, doenças gengivais e mau hálito.
        </Reanimated.Text>

        <Reanimated.Text 
        style={styles.paragraph}
        key={'index7'}
        entering={FadeInUp.duration(1000)}
        >
          A melhor maneira de combater essas bactérias ruins é manter uma boa rotina de higiene bucal. Aqui estão <Text style={styles.highlightText}>5 dicas simples</Text> para ajudar você a cuidar dos seus dentes e manter a saúde bucal em dia:
        </Reanimated.Text>

        <TouchableOpacity style={styles.tipButton}>
          <Reanimated.Text 
          key={'index00'}
          style={styles.tipButtonText}
          entering={FadeInUp.duration(500)}
          >1. Tudo começa na escovação
          </Reanimated.Text>
          
        </TouchableOpacity>

        <Reanimated.Text
         style={styles.paragraph}
         key={'index8'}
         entering={FadeInUp.duration(1000)}
         >
          A escovação regular dos dentes, especialmente após as refeições, é fundamental para remover a placa bacteriana, prevenir o mau hálito e manter a gengiva saudável.
        </Reanimated.Text>

        <Reanimated.Text 
        style={styles.paragraph}
        key={'index9'}
        entering={FadeInUp.duration(1000)}
        >
          Esse hábito simples não só contribui para a sua saúde dental, removendo manchas superficiais, mas também ajuda a deixar seu sorriso mais bonito e radiante!
        </Reanimated.Text>

        
        <Reanimated.Image
          source={require('../Cuidados/images/smileCare.png')} 
          style={styles.image}
          key={'index10'}
          entering={FadeInUp.duration(1000)}
          resizeMode="contain"
        />

        <TouchableOpacity style={styles.tipButton}>
          <Reanimated.Text 
          style={styles.tipButtonText}
          key={'index11'}
          entering={FadeInUp.duration(1000)}
          >2. Faça do fio dental um aliado
             </Reanimated.Text>
        </TouchableOpacity>

        <Reanimated.Text 
        style={styles.paragraph}
        key={'index12'}
        entering={FadeInUp.duration(1000)}
        >
        Usar o fio dental regularmente é outro cuidado básico para tirar a placa bacteriana e os restos de alimentos nas áreas que a escova de dente não consegue alcançar. 

        </Reanimated.Text>
      
        <Reanimated.Text 
        style={styles.paragraph}
        key={'index13'}
        entering={FadeInUp.duration(1000)}

        >
        Basta segurar o fio dental entre os dedos e deslizar com movimentos suaves de vaivém entre os dentes.
        </Reanimated.Text>

        <TouchableOpacity style={styles.tipButton}>
          <Text style={styles.tipButtonText}>3. Complemente com um bom enxaguante bucal </Text>
        </TouchableOpacity>

        <Reanimated.Text 
        style={styles.paragraph}
        entering={FadeInUp.duration(500)}>
        Esse é um produto para complementar a higiene bucal, que ajuda a reduzir a quantidade de bactérias na boca e deixar um hálito super refrescante. 
        </Reanimated.Text>
      
        <Reanimated.Text 
        style={styles.paragraph}
        entering={FadeInUp.duration(500)}
        >
        Ele pode ser usado após a escovação e o fio dental, basta fazer um bochecho de até 1 minuto e pronto: sua boca já estará protegida!
        </Reanimated.Text>

        <TouchableOpacity style={styles.tipButton}>
          <Text style={styles.tipButtonText}>4. Priorize produtos com flúor em sua composição </Text>
        </TouchableOpacity>

        <Reanimated.Text 
        style={styles.paragraph}
        entering={FadeInUp.duration(500)}
        >
        Você sabia que o flúor é ótimo para fortalecer os dentes e torná-los mais resistentes às cáries?
        </Reanimated.Text>
      
        <Reanimated.Text 
        entering={FadeInUp.duration(500)}
        style={styles.paragraph}>
        Uma maneira simples de garantir essa proteção é escolher produtos com flúor para sua rotina de higiene bucal. Veja como incluir ele no seu dia a dia:
        
      </Reanimated.Text>
      <Reanimated.View 
      entering={FadeInUp.duration(500)}
      style={styles.listContainer}>
          <Text style={styles.listItem}>• Opte por cremes dentais com flúor para uso diário;</Text>
          <Text style={styles.listItem}>• Utilize enxaguantes bucais com flúor;</Text>
          <Text style={styles.listItem}>• Fale com o seu dentista sobre aplicações de flúor periódicas.</Text>
        </Reanimated.View>

      <TouchableOpacity style={styles.tipButton}>
          <Text style={styles.tipButtonText}>5. Visite o dentista regularmente </Text>
        </TouchableOpacity>

        <Reanimated.Text 
        entering={FadeInUp.duration(500)}
        style={styles.paragraph}>
        Vale lembrar que, mesmo mantendo uma rotina de cuidados com a boca em casa, é fundamental ir ao dentista regularmente. No consultório, você poderá fazer uma limpeza profissional, eliminando totalmente a placa bacteriana e o tártaro dos dentes. 
        </Reanimated.Text>
      
        <Reanimated.Text 
        entering={FadeInUp.duration(500)}
        style={styles.paragraph}>
        Além disso, fica mais fácil detectar doenças gengivais, evitando que elas evoluam para uma possível gengivite ou, em casos mais graves, para uma periodontite.
        </Reanimated.Text>

        <Reanimated.View 
        entering={FadeInUp.duration(500)}
        style={styles.container}>
      <Text style={styles.text}>
        Se você ainda não marcou a sua consulta, a hora é agora!
      </Text>
    </Reanimated.View>
    </Reanimated.Text>

      </ScrollView>

     
      <FooterMenu />
    </Reanimated.View>
  );
};

export default CuidadosBucais;
