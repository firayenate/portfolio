import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function YearScreen({ navigation }) {

  const [selectedValue, setSelectedValue] = useState("1");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Your Year:</Text>

      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        style={styles.pickerr}
      >
        <Picker.Item label="1st Year" value="1" />
        <Picker.Item label="2nd Year" value="2" />
        <Picker.Item label="3rd Year" value="3" />
        <Picker.Item label="4th Year" value="4" />
      </Picker>

      <Text style={styles.text}>Selected Year: {selectedValue}</Text>

      <TouchableOpacity 
        style={styles.button1} 
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "rgb(58, 58, 58)",
  },

  text:{
  fontSize:'40px',
  fontWeight:'bold',
  margin:10,
  color:'white',
  },
  button1:{
    backgroundColor: '#928e8e',
    padding: 12,
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pickerr: {
    height: 40,
    width: 200,
   
  },
});