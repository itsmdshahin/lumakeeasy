import { View, Text, TextInput, StyleSheet, Button, Pressable, Linking, Alert } from 'react-native'
import React, { useState } from 'react'
import Constants from 'expo-constants';

export default function Support() {
    const [Reasons, setReasons] = useState("");

    function getAFeedBack() {
        const email = 'cse_1932020044@lus.ac.bd';
        const subject = 'Feedback';
        const body = Reasons;
        const query = `mailto:${email}?subject=${subject}&body=${body}`;

        Linking.openURL(query).then(() => {
            Alert.alert('Successfully Sent a Message');
        }).catch(() => {
            Alert.alert('Failed to send message. Please try again.');
        });
    }
    return (
        <View style={styles.container} >
            <View>
                <Pressable onPress={() => {
                    Linking.openURL('https://www.linkedin.com/in/itsmdshahin/');
                }}>
                    <Text style={styles.TextContinerColor}>Contact Us</Text>
                </Pressable>
            </View>



            <Text style={styles.textCon}>Feedback</Text>
            <View style={styles.reasoninnerviewCon}>
                <TextInput
                    placeholder='Ask your query here!'
                    placeholderTextColor='gray'
                    keyboardType='email-address'
                    value={Reasons}
                    onChangeText={(Reasons) => setReasons(Reasons)}
                />

            </View>
            <Button style={styles.btnStyles} title="submit here" color={'#367cff'} onPress={getAFeedBack} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        // backgroundColor: '#F6E0E0',
        padding: 8,
        //height: 1000,

    },
    TextContinerColor: {
        color: '#367cff',
        fontSize: 40,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    textCon: {

        margin: 2,
        fontSize: 15,
        fontWeight: 'bold',
        //width: "15%",
        paddingTop: 30,
        paddingBottom: 20,
        marginBottom: 0,
        // textAlign:'left'
        //fontSize: 15,
        //fontWeight: 'normal',
        //textAlign: 'left'
    },
    reasoninnerviewCon: {
        backgroundColor: "#fff",
        borderRadius: 10,
        //width: "65%",
        paddingTop: 2,
        height: 100,
        marginBottom: 50,
        //marginBottom: 10,
        //marginTop:20,

    },
    btnStyles: {
        borderRadius: 10,
    },

});