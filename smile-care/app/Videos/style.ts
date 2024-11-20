import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 15,
        padding: 20,
        backgroundColor: '#fff',
    },
    scrollContent: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 100,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        color: '#68E1D4',
        textAlign: 'center',
        letterSpacing: 1.5,
    },
    subtitle: {
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
        color: '#68E1D4',
        paddingHorizontal: 15,
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        color: '#333',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: 16,
        color: '#555',
        marginTop: 10,
        lineHeight: 24,
        textAlign: 'justify',
        paddingHorizontal: 15,
    },
    videoButton: {
        backgroundColor: '#68E1D4',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginTop: 15,
        width: '90%',
        alignItems: 'center',
    },
    videoText: {
        fontSize: 16,
        color: '#000',
        fontWeight: 'bold',
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '100%' ,
        alignItems: 'center',
        marginLeft: -40
    },
    closeButton: {
        marginTop: 20,
        backgroundColor: '#68E1D4',
        padding: 10,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    divider: {
        backgroundColor: '#000',
        marginVertical: 15,
        flex: 1,
        padding: 1,
        width: '90%'
    },
});

export default styles;
