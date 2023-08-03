import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../App';
import PushNotification from 'react-native-push-notification';



export default function TemplatePartical({ route, navigation }) {
    const { item } = route.params;

    // useEffect(() => {
    //     getDoc(doc(db, 'Students', useremail))
    //         .then((docData) => {
    //             if (docData.exists) {
    //                 setData(docData.data());
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, [useremail]);

    
    return (
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.textCon}>
                    To {'\n'}The Register{'\n'}Leading University Sylhet.{'\n'}
                    Through: Head of the Department.{'\n'}
                    Subject: Application for partial payment.{'\n'}{'\n'}
                    Respected Sir,{'\n'}
                    With due Respect, I would like to state that, I am a student of Leading University.Due To my financial crisis I am currently unable to pay my full semester fees.Now I am able to pay 50% of my tution fee.{'\n'}{'\n'}
                    Therefore, I pray and hope that, you will consider my situation and grant my partial payment and allow me to seat for exam.{'\n'}{'\n'}
                </Text>

                <View>
                    <Text style={styles.nibdCon}>Name: {item.name} </Text>
                    <Text style={styles.nibdCon}>ID: {item.id} </Text>
                    <Text style={styles.nibdCon}>Batch: {item.batch} </Text>
                    <Text style={styles.nibdCon}>Dept: {item.dept} </Text>
                    <Text style={styles.nibdCon}>Email: {item.email}</Text>
                    <Text style={styles.nibdCon}>Amount: {item.amount}</Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        //backgroundColor: '#F6E0E0',
        padding: 20,
        //height: 600,
    },
    textCon: {
        margin: 2,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'left',
    }, nibdCon: {
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 0,
        marginBottom: 0,
        // textAlign:'left'
        fontSize: 18,
        //fontWeight: 'normal',
        //textAlign: 'left',


    },
    nibdInp: {
        //borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        //width: '100%',
        //marginRight: 8,
        //padding: 8,
        height: 50,
        //flex: 1,
        padding: 8,
        marginLeft: 0,
    },
    button: {
        width: 150,
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: "#E19898",
    },
    inputViweContainer: {
        //width: "100%",
        //height: 100,
        fontSize: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputView: {
        //backgroundColor: "#fff",
        borderRadius: 10,
        width: "85%",
        paddingBottom: 50,
        height: 35,
        //marginBottom: 20,
        marginTop: 10,


    },
    buttonCon: {
        top: 30,
    }

});