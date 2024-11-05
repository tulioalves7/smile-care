import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        alignItems: 'center',
        padding: 20,
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
    });

export default styles;