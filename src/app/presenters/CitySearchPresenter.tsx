import React from 'react';
import SearchScreen from '../screens/SearchScreen';

export default function CitySearchPresenter({ navigation }: any) {
    return (
        <SearchScreen 
            navigation={navigation}
            text="SEARCH BY CITY" 
            placeholder="Enter a city" 
            nextView="City"
            search={() => console.log("search")} 
        /> 
    )
}