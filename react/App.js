import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './homee';
import YearScreen from './home';   
import LoginScreen from './log';
import AboutScreen from './abo';
import ContactScreen from './cont';
import ServiceScreen from './serv';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Year" component={YearScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Service" component={ServiceScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}