import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34495e', // Cor de fundo
        alignItems: 'center',
        justifyContent: 'flex-start', // Alinha os itens no topo
    },
    largeSemiCircle: {
        width: '120%',
        height: 200, // Altura maior para o semi-círculo
        backgroundColor: '#3FB3B5', // Cor de fundo do semi-círculo maior
        borderBottomLeftRadius: 691,
        borderBottomRightRadius: 691,
        position: 'relative', // Para garantir que o semi-círculo menor fique posicionado corretamente
    },
    smallSemiCircle: {
        width: '90%', // Um pouco menor que o grande
        height: 180,  // Ajuste para deixar um "espaço" entre os dois semi-círculos
        backgroundColor: '#D9D9D9', // Cor do semi-círculo menor
        borderBottomLeftRadius: 691,
        borderBottomRightRadius: 691,
        position: 'absolute',
        left: '5%', // Centralizar horizontalmente
        justifyContent: 'center', // Centralizar o conteúdo verticalmente
        alignItems: 'center', // Centralizar o conteúdo horizontalmente
    },
    logo: {
        marginTop: 25,
        width: 150,
        height: 100,
        position: 'absolute', // Posiciona a logo de forma absoluta dentro do semi-círculo
        top: 20, // Ajuste para centralizar a logo dentro do semi-círculo
    },
    buttonContainer: {
        marginTop: 50, // Dá um espaço abaixo do semi-círculo
        alignItems: 'center',
        width: '100%',
    },
    button: {
        backgroundColor: '#3FB3B5', // Cor dos botões
        padding: 15,
        borderRadius: 30,
        width: '80%', // Ajustado para não ocupar toda a largura
        alignItems: 'center',
        marginBottom: 50,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
    },
    needHelpContainer: {
        position: 'absolute', 
        bottom: 30,
        marginTop: 20,
        marginBottom: -15,
        alignItems: 'center', // Centraliza o texto
    },
    needHelpText: {
        color: '#fff',  // Texto "Precisando de ajuda?"
    },
    helpText: {
        color: '#fff',
        textDecorationLine: 'underline', // Sublinhado no "Clique aqui"
    },
});

export default styles;
