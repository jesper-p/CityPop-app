import React from 'react';
import CityScreen from '../screens/CityScreen';

export default function CityPresenter({ navigation }: any){
    return (
        <CityScreen 
            navigation={navigation}
            city="paris"
            population={2244000}
        /> 
    );
}