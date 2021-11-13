import React, {FC} from "react";
import {StyleSheet, View, Text, Pressable} from "react-native"

interface Props {
    cityButtonPressed?: string;
    countryButtonPressed?: string;
    pressedCity?: () => void;
    pressedCountry?: () => void;
}

const HomeScreen:FC<Props> = (props) => {
    return (
        <View style={styles.homeScreenContainer}>

            <View style={styles.logoContainer}>
                <Text style={styles.cityPopText}>CityPop</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.searchButton} onPress={() => console.log(props.cityButtonPressed)}>
                        <Text style={styles.buttonText}>SEARCH BY CITY</Text>
                    </Pressable>
                </View>
                    <View style={styles.buttonContainer}>
                    <Pressable style={styles.searchButton} onPress={() => console.log(props.countryButtonPressed)}>
                        <Text style={styles.buttonText}>SEARCH BY COUNTRY</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    homeScreenContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cityPopText: {
        fontSize: 50,
        fontWeight: 'bold',

    },

    buttonsContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    buttonContainer: {
        borderWidth: 2,
        width: 350,
        padding: 10,
        margin: 2

    },

    searchButton: {
        justifyContent:'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 20,
        fontWeight: 'bold'
    }

});