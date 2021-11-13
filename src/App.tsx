import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/screens/HomeScreen';
import SearchScreen from './app/screens/SearchScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen cityButtonPressed="Pressed search by city" countryButtonPressed="Pressed search by country"/> */}
      <SearchScreen 
        text="SEARCH BY CITY" 
        placeholder="Enter a city" 
        search={() => console.log("search")} 
        onChangeText={(text) => console.log(text)}
        goBack={() => console.log("Going back to home screen")}
        />
      <StatusBar style="auto" />
    </View>
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
