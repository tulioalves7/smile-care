import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert, ScrollView } from 'react-native';
import CustomHeader from '../Cabecalho/CustomHeader';
import styles from './style';
import FooterMenu from '../Rodape/CustomRodape';
import Reanimated, { FadeIn, FadeInLeft, FadeInRight, FadeInUp, SlideInUp, SlideOutDown } from 'react-native-reanimated';

const DiagnosticoBucal = () => {
  const questions = [
    {
      question: 'Com que frequência você escova os dentes?',
      options: ['Nunca', '1x por dia', '2x por dia', '3x por dia', 'Após todas as refeições'],
      values: [0, 0.5, 1, 1.5, 2],
    },
    {
      question: 'Com que frequência você usa o fio dental?',
      options: ['Nunca', 'Raramente', 'Algumas vezes por semana', 'Quase todos os dias', 'Todos os dias'],
      values: [0, 0.5, 1, 1.5, 2],
    },
    {
      question: 'Com que frequência você vai ao dentista?',
      options: ['Nunca', 'Só quando sinto dor', 'Uma vez a cada dois anos', 'Uma vez por ano', 'A cada seis meses'],
      values: [0, 0.5, 1, 1.5, 2],
    },
    {
      question: 'Com que frequência você usa enxaguante bucal?',
      options: ['Nunca', 'Raramente', 'Algumas vezes por semana', 'Quase todos os dias', 'Todos os dias'],
      values: [0, 0.5, 1, 1.5, 2],
    },
    {
      question: 'Qual seu cuidado com a alimentação pensando na saúde bucal?',
      options: [
        'Não cuido da minha alimentação',
        'Como muito açúcar e alimentos processados',
        'Tento equilibrar mas como doces regularmente',
        'Evito doces, mas tomo refrigerantes e industrializados',
        'Tenho uma alimentação equilibrada e evito açúcares',
      ],
      values: [0, 0.5, 1, 1.5, 2],
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false); 

  const handleNextQuestion = () => {
    if (selectedOptionIndex !== null) {
      const questionScore = questions[currentQuestionIndex].values[selectedOptionIndex];
      setScore(score + questionScore);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptionIndex(null);
      } else {
        setShowResult(true);
      }
    }
  };

  const getResultMessage = () => {
    if (score >= 0 && score <= 5) {
      return 'Péssimo: É importante melhorar sua rotina de higiene bucal. Escove os dentes regularmente, use fio dental e visite o dentista para evitar problemas futuros.';
    } else if (score > 5 && score <= 7.9) {
      return 'Regular: Você está no caminho certo, mas ainda há pontos para melhorar. Continue se esforçando para ter uma rotina de cuidados bucais mais consistente.';
    } else if (score >= 8 && score <= 10) {
      return 'Ótimo: Parabéns! Sua saúde bucal está excelente. Continue com esses bons hábitos para manter seu sorriso saudável.';
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <CustomHeader />
        
        {showResult ? (
          <Text style={styles.resultText}>{getResultMessage()}</Text>
        ) : (
          <>
            <Reanimated.Text 
                style={styles.questionText}
                entering={FadeInLeft.duration(450).delay(150)}
                exiting={FadeInRight.duration(250)}
                key={`question-${currentQuestionIndex}-${score}`} 
                
              >
              {currentQuestion.question}
            </Reanimated.Text>
            {currentQuestion.options.map((option, index) => (
              <Reanimated.View
                entering={FadeInLeft.duration(450).delay(150)}
                exiting={FadeInRight.duration(250)}
                key={`option-${currentQuestionIndex}-${index}`}
                style={[
                  styles.optionButton,
                  selectedOptionIndex === index && styles.selectedOptionButton,
                ]}
                
              >
              <TouchableOpacity
                key={index}
                style={[
                  // styles.optionButton,
                  // selectedOptionIndex === index && styles.selectedOptionButton,
                ]}
                onPress={() => setSelectedOptionIndex(index)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
              </Reanimated.View>
            ))}

            <TouchableOpacity
                      style={styles.sendButton}
                      onPress={handleNextQuestion} disabled={selectedOptionIndex === null}    
            >
              <Text style={styles.buttonText}>Próxima Pergunta</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
      
      <FooterMenu />
    </View>
  );
};

export default DiagnosticoBucal;
