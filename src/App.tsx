import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CityScreen from './app/screens/CityScreen';
import CountryScreen from './app/screens/CountryScreen';
import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';
import CitySource from './app/citySource';

export default function App() {
  CitySource.apiCall(""+new URLSearchParams({q:"london", maxRows:"10", username:"weknowit"})).then(data => console.log(data));

  return (
    <NavigationContainer>
      <View style={styles.container}>
        
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
