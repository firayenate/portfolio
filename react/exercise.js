import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
export default function App(){
 const [name,setName]=useState('');
 const [count,setcount]=useState(0);
 return(
  <View style={styles.container}>

    <Text style={styles.title}>React Native Layout Example</Text>
    <TextInput style={styles.input}
    placeholder='Enter Your Name'
    value={name}
    onChangeText={text=>setName(text)}/>
    <Text style={styles.displayText}> 
        Hello, {name ? name : 'Guest'}! 
      </Text>
     <View style={styles.row}> 
        <Button title="Button 1" onPress={() => alert('Button 1 clicked!')} 
/> 
        <Button title="Button 2" onPress={() => alert('Button 2 clicked!')} 
/> 
        <Button title="Button 3" onPress={() => alert('Button 3 clicked!')} 
/> 
      </View>
    <Text>Counter:{count}</Text>
      <Button
        title="INCREASE COUNTER"
        onPress={() => setcount(count + 1)}
      />
  </View>
 );
}
const styles =StyleSheet.create({
  container:{
   flex: 1, 
padding: 20, 
justifyContent: 'center',    
alignItems: 'center',      
 
backgroundColor:"rgb(163, 161, 162)", 

  },
  title:{
    fontSize:24,
    marginBottom:20,
  },
  input:{
    width: '80%', 
borderWidth: 1, 
borderColor: '#333', 
padding: 10, 
borderRadius: 5, 
marginBottom: 15,
  },
  displayText: { 
fontSize: 18, 
marginBottom: 20, 
},
displayText: { 
fontSize: 18, 
marginBottom: 20, 
},
row: { 
flexDirection: 'row',      

justifyContent: 'space-between', 
marginBottom: 20, 
width: '100%', 
}, 
counter: { 
fontSize: 20, 
marginVertical: 10, 
}, 

});