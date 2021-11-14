import React, {FC} from "react";
import {StyleSheet, View, Text, Pressable, TextInput} from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core";

interface Props {
    navigation: any;
    city: string;
    population: number;
}

const CityScreen:FC<Props> = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}> 
            <Pressable style={styles.backButton} onPress={props.navigation.navigate("Home")}>
                <Ionicons name="arrow-back-outline" size={22} />
                <Text style={styles.backButtonText}>CityPop</Text>
            </Pressable>
            <View style={styles.cityContainer}>
                <Text style={styles.cityText}>{props.city}</Text>
            </View>
            <View style={styles.lowerContainer}>
                <View style={styles.populationContainer}>
                    <Text style={styles.populationText}>population</Text>
                    <Text style={styles.numberText}>
                        {props.population.toString().split("").reverse().join("").match(/.{1,3}/g)?.join(' ').split("").reverse().join("")}
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default CityScreen;

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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cityContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cityText: {
        textTransform: 'uppercase',
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    lowerContainer: {
        flex:1
    },
    numberText: {
        fontSize: 40,
        margin: 5
    },
    populationContainer: {
        width: 340,
        height: 120,
        alignItems: 'center',
        borderWidth: 2
    },
    populationText: {
        fontSize: 16,
        textTransform: 'uppercase',
        margin: 5
    }
});