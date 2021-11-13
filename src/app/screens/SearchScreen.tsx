import React, {FC} from "react";
import {StyleSheet, View, Text, Pressable, TextInput} from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface Props {
    text: string;
    placeholder: string;
    search: () => void;
    onChangeText: (inputText:string) => void;
    goBack: () => void;
}

const SearchScreen:FC<Props> = (props) => {
    return (
        <View style={styles.container}> 
            <View style={styles.backButton}>
                <Pressable style={styles.backButton} onPress={props.goBack}>
                    <Ionicons name="arrow-back-outline" size={20} />
                    <Text>CityPop</Text>
                </Pressable>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{props.text}</Text>
            </View>
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    textAlign={'center'}
                    placeholder={props.placeholder}
                    onChangeText={props.onChangeText}
                />
            </View>

            <Pressable style={styles.searchButton} onPress={props.search}>
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
        top: 20,
        left: 2,
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