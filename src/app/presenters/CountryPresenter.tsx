import React from 'react';
import CountryScreen from '../screens/CountryScreen';

export default function CountryPresenter({ navigation }: any) {
    return (
        <CountryScreen 
            navigation={navigation}
            country="france"
            cities={["paris", "marseille", "lyon"]}
        />
    )
}


