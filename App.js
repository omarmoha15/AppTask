import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import DetilsScreen from './src/screens/DetilsScreen';
import Test from './src/screens/DetilsScreen';
import Card from './src/compnents/Card';
import SearchScreen from './src/screens/SearchScreen';
import { SearchBar } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen name='Screan1' component={SearchScreen}></Stack.Screen>
        <Stack.Screen name='Screan2' component={DetilsScreen}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
