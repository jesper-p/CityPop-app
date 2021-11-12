import React, {FC} from "react";
import {StyleSheet, View, Text, Button} from "react-native"

interface Props {
    cityButtonPressed?: string;
    countryButtonPressed?: string;
    pressedCity?: () => void;
    pressedCountry?: () => void;
}

const HomeScreen:FC<Props> = (props) => {
    return (
        <View style={styles.homeScreenContainer}>
            <Text style={styles.cityPopText}>CityPop</Text>
            <Button title="SEARCH BY CITY"  onPress={() => console.log(props.cityButtonPressed)} />
            <Button title="SEARCH BY COUNTRY" onPress={() => console.log(props.countryButtonPressed)} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    homeScreenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },


    cityPopText: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 16,
        top: 30
    }

});