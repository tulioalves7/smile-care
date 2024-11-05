import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: '100%',
        position: 'relative', 
        marginTop: 20,
        marginBottom: 20,
    },
    button: {
        padding: 10, // Área de toque para a seta
    },
    setaEsquerda: {
        width: 30,
        height: 30,
        position: 'absolute', // Permite posicionamento fora do fluxo normal
        left: 0, // Coloca a seta à esquerda
    },
    logo: {
        width: 155,
        height: 30,
        position: 'absolute',
        right: 0, // Ajuste a distância do lado direito
    },
});

export default styles;
