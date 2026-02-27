import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home Page!</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('About')}>
                <Text style={styles.buttonText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Contact')}>
                <Text style={styles.buttonText}>Contact</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Service')}>
                <Text style={styles.buttonText}>Service</Text>
            </TouchableOpacity>
               <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Year')}
      >
        <Text style={styles.buttonText}>Select Year</Text>
      </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242020',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'white',
       
    },
    button: {
        backgroundColor: '#464343',
        padding: 12,
        borderRadius: 5,
        width: '20%',
        alignItems: 'center',
        marginTop:20,
        marginLeft:50,
        marginRight:50,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});