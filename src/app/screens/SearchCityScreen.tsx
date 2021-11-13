import React, {FC} from "react";
import {StyleSheet, View, Text, Pressable, TextInput} from "react-native"
import { IonIcons } from "react-native-vector-icons"

interface Props {
    placeholder: string
}

const SearchCityScreen:FC<Props> = (props) => {
    const [text, onChangeText] = React.useState("Useless Text");

    return (
        <View style={styles.container}> 
            <View style={styles.searchSection}>
                <TextInput
                    style={styles.input}
                    textAlign={'center'}
                    placeholder={props.placeholder}
                    onChangeText={onChangeText}
                    underlineColorAndroid="transparent"
                />
            </View>

            <Pressable style={styles.searchButton}>
                <IonIcons name={md-search}></IonIcons>
            </Pressable>
        </View>
    );
}

export default SearchCityScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchSection: {
        flex: 1,
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
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },
    searchButton: {

    }
});