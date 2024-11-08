import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Alert } from 'react-native';
import CustomHeader from '../Cabecalho/CustomHeader';
import styles from './style';
import FooterMenu from '../Rodape/CustomRodape';

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
  const [showResult, setShowResult] = useState(false); // Novo estado para controlar a exibição do resultado

  const handleNextQuestion = () => {
    if (selectedOptionIndex !== null) {
      const questionScore = questions[currentQuestionIndex].values[selectedOptionIndex];
      setScore(score + questionScore);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptionIndex(null);
      } else {
        // Exibe o resultado final e oculta o formulário
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
      <CustomHeader />
      
      {showResult ? (
        // Exibe o resultado final
        <Text style={styles.resultText}>{getResultMessage()}</Text>
      ) : (
        // Exibe o formulário de perguntas
        <>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
          {currentQuestion.options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedOptionIndex === index && styles.selectedOptionButton,
              ]}
              onPress={() => setSelectedOptionIndex(index)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}

          <Button title="Responder" onPress={handleNextQuestion} disabled={selectedOptionIndex === null} />
        </>
      )}
      
      <FooterMenu />
    </View>
  );
};

export default DiagnosticoBucal;
