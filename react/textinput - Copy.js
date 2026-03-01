import React, { useState } from 'react';
import { View, TextInput, Text,Button } from 'react-native';

export default function App() {

  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      
      <Text>Hello {name}</Text>
      <TextInput
      placeholder='Enter password'
      secureTextEntry={true}
      />
      <Button
      title="Click Me"
      onPress={()=>alert("Hello fira")}
      />
     </View>
  );
}