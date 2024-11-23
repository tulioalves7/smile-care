import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
  //  alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
},
scrollContent: {
  justifyContent: 'center', // Alinha o conteúdo do ScrollView verticalmente ao centro
  alignItems: 'center', // Alinha o conteúdo do ScrollView horizontalmente ao centro
  paddingBottom: 100, // Para garantir que o conteúdo não sobreponha o rodapé
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#68E1D426',
    paddingVertical: 20,
    borderRadius: 24,
    marginVertical: 20,
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
    fontWeight: 'bold',
  },
  selectedOptionButton: {
    backgroundColor: '#76ebe2', 
  },
  optionText: {
    fontSize: 18,
  },
  resultText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    padding: 20,
  },
  sendButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#76ebe2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginVertical: 20,
    alignContent: 'center',
    justifyContent: 'center',
    width: '80%',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  touchWidth: {
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  }

});

export default styles;