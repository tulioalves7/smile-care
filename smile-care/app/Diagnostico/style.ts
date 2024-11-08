import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    marginTop: 15,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
},
title: {
    fontSize: 30, // Ajuste o tamanho da fonte
        fontWeight: '600', // Peso da fonte
        color: '#68E1D4', // Cor da fonte
        textAlign: 'center', // Alinhamento do texto
        //fontFamily: 'Sora', // Família da fonte
        fontStyle: 'normal', // Estilo da fonte
        letterSpacing: 1.5, // Espaçamento entre as letras
},
subtitle: {
    fontSize: 20,
    marginTop: 10,
},

paragraph: {
    fontSize: 12,
    textAlign: 'left',
},

questionText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
  },
  selectedOptionButton: {
    backgroundColor: '#4CAF50', // Cor diferente para a opção selecionada
  },
  optionText: {
    fontSize: 18,
  },

});

export default styles;