import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CitySource from './app/citySource';
import HomePresenter from './app/presenters/HomePresenter';
import CityPresenter from './app/presenters/CityPresenter';
import CitySearchPresenter from './app/presenters/CitySearchPresenter';
import CountryPresenter from './app/presenters/CountryPresenter';
import CountrySearchPresenter from './app/presenters/CountrySearchPresenter';

export default function App() {
  //CitySource.apiCall(""+new URLSearchParams({q:"london", maxRows:"10", username:"weknowit"})).then(data => console.log(data));
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePresenter}/>
        <Stack.Screen name="SearchCity" component={CitySearchPresenter}/>
        <Stack.Screen name="SearchCountry" component={CountrySearchPresenter}/>
        <Stack.Screen name="City" component={CityPresenter}/>
        <Stack.Screen name="Country" component={CountryPresenter}/>
      </Stack.Navigator>
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
