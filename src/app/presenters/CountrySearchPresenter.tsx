import React from 'react';
import SearchScreen from '../screens/SearchScreen';

export default function CountrySearchPresenter({ navigation }: any) {
    return (
        <SearchScreen 
        navigation={navigation}
        text="SEARCH BY COUNTRY"
        nextView="Country" 
        placeholder="Enter a country" 
        search={() => console.log("search")} 
        /> 
    )
}