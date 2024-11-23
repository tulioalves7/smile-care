import { StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 16,
    },
    scrollContent: {
        justifyContent: 'center', // Alinha o conteúdo do ScrollView verticalmente ao centro
      //  alignItems: 'center', // Alinha o conteúdo do ScrollView horizontalmente ao centro
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
        fontSize: 22,
        color: '#68E1D4', // Cor da fonte
        textAlign: 'left',
        fontWeight: 'bold',
    },
    paragraph: {
        fontSize: 20,
        textAlign: 'justify',
        fontStyle: 'normal', // Estilo da fonte
        
    },
    topico: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#68E1D4',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginVertical: 20,
        alignContent: 'center',
        justifyContent: 'center',
        width: '80%',
        fontSize: 20,
        textAlign: 'center',
        color: 'white', // Cor da fonte
        fontWeight: 'bold',
        fontStyle: 'normal', // Estilo da fonte
        alignSelf: 'center',
    },
    topicoContainer: {
        flexDirection: 'row',
      // alignItems: 'center',
        marginVertical: 20, // Espaçamento entre os tópicos
    },
    image: {
        width: 100, // Ajuste o tamanho da imagem
        height: 100, // Ajuste o tamanho da imagem
        marginRight: 20, // Espaçamento entre a imagem e o texto
    },
    topicoText: {
        fontSize: 20,
        //textAlign: 'justify',
        fontStyle: 'normal', // Estilo da fonte
        flex: 1, // Faz o texto ocupar o restante do espaço
    },
});

export default styles;