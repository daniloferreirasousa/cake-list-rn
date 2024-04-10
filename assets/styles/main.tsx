import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#333',
    },
    header: {
        width: '100%',
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: '#777'
    },

    inputArea: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    inputAreaTitle: {
        fontSize: 30,
        color: '#FFF',
        fontWeight: 'bold',
        paddingBottom: 20
    },
    input: {
        width: 350,
        backgroundColor: '#FFF',
        padding: 14,
        fontSize: 16
    },

    list: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    ingrediente: {
        fontSize: 16,
        paddingVertical: 10,
        color: '#FFF'
    }
})

export default styles;