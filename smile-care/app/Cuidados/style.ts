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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 70,
    textAlign: 'center',
    lineHeight: 24,
  },
  // Parágrafos e texto
  paragraph: {
    fontSize: 16,
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
    marginTop: 8,
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
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tipButton: {
    backgroundColor: '#68E1D4',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    alignSelf: 'center',
  },
  tipButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
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
