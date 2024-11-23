import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  // Contêiner principal
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
  },
  // Conteúdo rolável
  scrollContent: {
    paddingVertical: 16,
  },
  // Títulos
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#68E1D4',
    marginBottom: 30,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
    width: '60%',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  // Parágrafos e texto
  paragraph: {
    fontSize: 20,
    color: '#333333',
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 16,
  },
  link: {
    color: '#68E1D4',
    fontWeight: '600',
    textDecorationLine: 'underline',
  },
  highlightText: {
    color: '#68E1D4',
    fontWeight: '600',
  },
  // Contêiner de destaque
  highlightContainer: {
    backgroundColor: '#68E1D4',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
  },
  highlightInnerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  // Listas
  listContainer: {
    marginTop: 1,
    color: '#333333',
    fontSize: 16,
    
  },
  listItem: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 24,
    marginBottom: 8,
    paddingLeft: 8,
  },
  // Botões e dicas
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    marginBottom:20,
    backgroundColor: '#88E4DB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tipButton: {
    backgroundColor: '#b3f0e9',
    padding: 12,
    borderRadius: 30,
    marginBottom: 16,
    alignSelf: 'center',
  },
  tipButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B0A32',
    textAlign: 'center',
  },
  // Texto genérico
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 26,
  },
  // Estilo para imagens
  image: {
    width: '100%',
    height: 400,
    marginVertical: 16,
    borderRadius: 8,
  },
  additionalSection: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  highlight: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: '#000000',
  },
});

export default styles;
