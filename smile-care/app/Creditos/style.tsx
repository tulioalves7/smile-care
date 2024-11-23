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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  content: {
    fontSize: 18,
    color: '#333333',
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 16,
  },
  initContent: {
    fontSize: 18,
    color: '#333333',
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 180,
    height: 55,
  },
  imagens: {
    flexDirection: 'row',
  }

});

export default styles;
