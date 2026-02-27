import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome Login Page!</Text>
            <TextInput style={styles.input} placeholder="Username" />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242222',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'white',
    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    button: {
        backgroundColor: '#5c5a5a',
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