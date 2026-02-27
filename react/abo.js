import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to About page!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161414',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'white',
    },
    content: {
        fontSize: 14,
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    button: {
        backgroundColor: '#4b4949',
        padding: 12,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});