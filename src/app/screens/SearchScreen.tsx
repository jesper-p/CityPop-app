import React, {FC} from "react";
import {StyleSheet, View, Text, Pressable, TextInput} from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface Props {
    navigation: any;
    text: string;
    nextView: string;
    placeholder: string;
    search: () => void;
}

const SearchScreen:FC<Props> = (props) => {
    const [value, onChangeText] = React.useState("placeholder")

    return (
        <View style={styles.container}> 
            <Pressable style={styles.backButton} onPress={props.navigation.navigate('Home')}>
                <Ionicons name="arrow-back-outline" size={22} />
                <Text style={styles.backButtonText}>CityPop</Text>
            </Pressable>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    textAlign={'center'}
                    placeholder={props.placeholder}
                    onChangeText={(text) => onChangeText(text)}
                />
            </View>

            <Pressable style={styles.searchButton} onPress={props.navigation.navigate(props.nextView)}>
                <Ionicons name="search-circle-outline" size={70} />
            </Pressable>
        </View>
    );
}

export default SearchScreen;

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
    searchSection: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        width: 350,
        padding: 10,
    },
    searchIcon: {
        padding: 10,
    },
    input: {
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        paddingLeft: 0,
        fontSize: 20,
        backgroundColor: '#fff',
        color: '#424242',
    },
    searchButton: {

    },
    text: {
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