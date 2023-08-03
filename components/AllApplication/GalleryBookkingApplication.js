import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { doc, setDoc,getDoc } from "firebase/firestore";
import { auth, db } from '../../App';



export default function GalleryBookkingApplication({ route, navigation }) {
    const { item } = route.params;
 
   // const { userid, useremail } = route.params; // get data from Login page 
     
    const [UserInfo, setUserInfo] = useState("");
    console.log("Get access form data "+ item.email);

    useEffect(() => {
        getDoc(doc(db, 'Students', item.email))
            .then((docData) => {
                if (docData.exists) {
                    setUserInfo(docData.data());
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [item.email]);

    return (
        <ScrollView>
            <View style={styles.container} >
                <Text style={styles.textCon}>
                    To {'\n'}The Register{'\n'}Leading University Sylhet.{'\n'}
                    Through: Head of the Department.{'\n'}
                    Subject: Application for Gallery Booking.{'\n'}{'\n'}
                    Respected Sir,{'\n'}
                    With due Respect, I would like to state that, I am a student of Leading University.
                    For {item.Reasons} we need {item.GalleryNumber} from {item.BookingStart} to {item.BookingEnd} on {item.BookingDate}.{'\n'}{'\n'}
                    Therefore, I pray and hope that, 
                    you will be kind enough to grant our application and allow us to use the {item.GalleryNumber}.{'\n'}{'\n'}
                </Text>

                <View>
                    <Text>Name: {UserInfo.name} </Text>
                    <Text>ID: {UserInfo.id} </Text> 
                    <Text >BookingDate: {item.BookingDate} </Text>  
                    <Text >Reasons: {item.Reasons}</Text>
                    <Text>Leading University, Sylhet.</Text>
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