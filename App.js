import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>

      </NavigationContainer>
    </TailwindProvider>
  );
}

