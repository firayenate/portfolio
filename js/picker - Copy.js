import React, {useState } from 'react';
import {View,Text} from 'react-native';
import {Picker } from '@react-native-picker/picker';
export default function App(){
  const [selectedValue, setSelectedValue] = useState("Java");
  return(
    <View>
      <Text>Selected:  {selectedValue}  </Text>
        <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue)=>setSelectedValue(itemValue)}
        >
          <Picker.Item label='Java' value="Java"/>
          <Picker.Item label='Javascrpt' value="js"/>
          <Picker.Item label='Python' value="python"/>
        </Picker>
    
    </View>
  )
}