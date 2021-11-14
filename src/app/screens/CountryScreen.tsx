import React, {FC} from "react";
import {StyleSheet, View, Text, Pressable, TextInput} from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface Props {
    country: string;
    cities: string[];
    goBack: () => void;
}

const CountryScreen:FC<Props> = (props) => {
    return (
        <View style={styles.container}> 
            <Pressable style={styles.backButton} onPress={props.goBack}>
                <Ionicons name="arrow-back-outline" size={22} />
                <Text style={styles.backButtonText}>CityPop</Text>
            </Pressable>
            <View style={styles.textContainer}>
                <Text style={styles.countryText}>{props.country}</Text>
            </View>
            <View>
                {props.cities.map(city => 
                    <Pressable key={city} style={styles.cityButton} onPress={() => console.log(city)}>
                        <Text style={styles.cityText}>{city}</Text>
                    </Pressable>   
                )}
            </View>
            
        </View>
    );
}

export default CountryScreen;

const styles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        width: 70,
        height: 70,
        position: "absolute",
        top: 30,
        left: 5,
    },
    backButtonText: {
        fontSize: 15
    },
    buttonText: {

    },
    cityButton: {
        borderWidth: 2,
        width: 350,
        padding: 10,
        margin: 2
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityText: {
        textTransform: 'capitalize',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    countryText: {
        textTransform: 'uppercase',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textContainer: {
        bottom: 100,
        width: 300,
        alignItems: 'center'
    }
});