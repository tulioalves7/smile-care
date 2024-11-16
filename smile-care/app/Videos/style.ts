import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
     //   alignItems: 'center',
        padding: 20,
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
        textAlign: 'center', // Alinhamento do texto
    },
});

export default styles;
