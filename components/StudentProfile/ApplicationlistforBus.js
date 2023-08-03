import { View, Text, Image, StyleSheet, ScrollView, Alert, Pressable, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDoc, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from '../../App';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { async } from '@firebase/util';
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
const Stack = createNativeStackNavigator();


export default function ApplicationList({ navigation, route }) {
    const { userid, useremail } = route.params; // get data from Login page 
    console.log(useremail + " " + userid);
    const [data, setData] = useState(null);
    const [UserInfo, setUserInfo] = useState(null);

    useEffect(() => {
        getDoc(doc(db, 'Students', useremail))
            .then((docData) => {
                if (docData.exists) {
                    setUserInfo(docData.data());
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [useremail]);

    useEffect(() => {
        getDoc(doc(db, 'AccptedListBusBooking', useremail))
            .then((docData) => {
                if (docData.exists) {
                    setData(docData.data());
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [useremail]);




    const DownloadApplication = async () => {
        const file = await printToFileAsync({
            html: `<View>
            <Text >
            <br><br>
                To <br>
                The Register <br>
                Leading University Sylhet.<br>
                Through: Head of the Department.<br>
                Subject: Application for Gallery Booking.<br><br>
               
                Respected Sir,<br>
                With due Respect, I would like to state that, I am a student of Leading University.
                For ${data.Reasons} we need extra Vehicals for Route ${data.Routess} 
                at ${data.BookingTime} on ${data.BookingDate}. 
                <br>
                Therefore, I pray and hope that,
                you will be kind enough to grant our application and allow us to use the University Vehicals
                <br>
            </Text>
             
                           
                           
            <View >
                
                <br>
                <Text>Routes : ${data.Routess}</Text> 
                <br>
                <Text>Date: ${data.BookingDate}</Text> 
                <br>                
                <Text>Time : ${data.BookingTime}</Text 
                <br> <br> 
                <Text>Reasons : ${data.Reasons}</Text> 
                <br> 
                <Text>Leading University,Sylhet</Text>
            </View>
        </View>`,
            base64: false
        });

        await shareAsync(file.uri);
        Alert.alert("Successfully Download!");
    }
    return (
        <ScrollView>
            <View style={styles.backgroundColorContainer}>

                {data ? (

                    <View style={styles.headerProfileContainer}>
                        <Text style={styles.textCon}>
                            To {'\n'}The Register{'\n'}Leading University Sylhet.{'\n'}
                            Through: Head of the Department.{'\n'}
                            Subject: Application for Gallery Booking.{'\n'}{'\n'}
                            Respected Sir,{'\n'}
                            With due Respect, I would like to state that, I am a student of Leading University.
                            For {data.Reasons} we need extra Vehicals for Route {data.Routess} at {data.BookingTime} on {data.BookingDate}.{'\n'}{'\n'}
                            Therefore, I pray and hope that,
                            you will be kind enough to grant our application and allow us to use the University Vehicals.{'\n'}{'\n'}
                        </Text>
                        <View style={styles.detialsForProfile}>
                            <Text style={styles.TextColorChg}>Routess : {data.Routess}</Text>
                            <Text style={styles.TextColorChg}>Date: {data.BookingDate}</Text>
                            <Text style={styles.TextColorChg}>Time : {data.BookingTime}</Text>
                            <Text style={styles.TextColorChg}>Reasons : {data.Reasons}</Text>
                            <Text>Leading University, Sylhet.</Text>
                        </View>
                        <Button title='Download' onPress={DownloadApplication} />
                    </View>
                ) : (
                    <Text>NO data Found...</Text>
                )}
                <View style={styles.getaLine}>

                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    backgroundColorContainer: {
        //backgroundColor: '#E1D5C9',
    },
    imageForProfile: {
        borderRadius: 500,
        height: 150,
        width: 140,
        alignContent: 'center',
        padding: 10,
        margin: 30,


    },
    detialsForProfile: {
        fontSize: 50,
        alignContent: 'center',
        padding: 0,
        margin: 10,
    },
    headerProfileContainer: {
        fontWeight: 'bold',
        //alignItems: 'center',
        // flexDirection: 'row',
        // backgroundColor:'#C99153',
    },
    iconsStyleContainer: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#E19898',
        height: 120,
    },
    iconsinnerContainer: {
        backgroundColor: '#E19898',//'#b55555', '#cd5c5c','#202224', // '#5f3fa8',// '#B39EE4',
        color: '#fff',
        padding: 20,
        margin: 25,
        elevation: 10,
        shadowColor: 'white',
        shadowOffset: { width: 20, height: 20 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',


    },
    iconsinnerContainerPress: {
        opacity: 0.35,
    },
    iconsTextColor: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    iconsStyleContainerApplication: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#fff',
        height: 120,
        padding: 0,
    },
    TextApplication: {

        color: '#EEEDDB',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    TextApplicationContainer: {
        backgroundColor: '#E19898',
        padding: 5,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
    },
})