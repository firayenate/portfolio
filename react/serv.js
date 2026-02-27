import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
             <Text style={styles.text2}>welcome to service!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e0b0b',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
   
    button: {
        backgroundColor: '#585151',
        padding: 12,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
        marginTop: 10,
    },
    text2:{
        fontSize:'50px',
        fontWeight:'bold',
        color:'white',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});