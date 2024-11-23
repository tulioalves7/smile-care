import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    logo: {
        width: 60,
        height: 59,
        marginTop: -100,
    },
    title: {
        width: 260,
        height: 60,
        marginTop: 5,
    },
    buttonContainer: {
        width: '80%',
        marginTop: 60,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#68E1D426',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 25,
        marginVertical: 20,
        alignContent: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    buttonText: {
        fontSize: 18,
        color: '#1F1F1F',
        fontWeight: '600',
    },
    needHelpContainer: {
        marginTop: 20,
        alignItems: 'center',
        position: 'absolute',
        bottom: 30,
    },
    needHelpText: {
        fontSize: 16,
        color: '#1F1F1F',
    },
    buttonTextHelp: {
        fontSize: 16,
        color: '#3FB3B5', // Cor que lembra um link
        fontWeight: 'bold',
        textDecorationLine: 'underline', // Adiciona sublinhado para parecer um link
    },
    credits: {
        fontSize: 14,
        color: '#000000',
        marginTop: 2,
    }, 
    creditsunder: {
        textDecorationLine: 'underline',
    }
});
