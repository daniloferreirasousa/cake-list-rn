import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#888'
    },

    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#9c9c9c',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },

    inputArea: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    inputAreaTitle: {
        fontSize: 30,
        color: '#000',
        fontWeight: 'bold',
        paddingBottom: 20
    },
    input: {
        width: '100%',
        backgroundColor: '#9f9f9f',
        padding: 14,
        fontSize: 16
    },

    list: {
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    ingrediente: {
        fontSize: 16,
        paddingVertical: 10
    }
})

export default styles;