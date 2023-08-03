import React, { useState, useEffect } from 'react';
import { Pressable, Text, View, StyleSheet, TextInput, FlatList, ScrollView, Alert } from 'react-native';
import { deleteDoc, setDoc, getDoc, doc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../App';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function BusBooking({ navigation, route }) {
    const { userid, useremail } = route.params; // get data from Login page 
    console.log(useremail + " " + userid);
    const [data, setData] = useState([]);
    const [Routess, setRoutess] = useState("");
    const [BookingDate, setBookingDate] = useState("");
    const [BookingTime, setBookingTime] = useState("");
    const [email, setEmail] = useState("");
    const [Reasons, setReasons] = useState("");


    const AcceptedHandlers = (item) => {
        //deleteDoc(doc(db, 'GalleryBooking', item.email))
        // Alert.alert("Accepted user " + item.email);
        setDoc(doc(db, "ExtraBusforAdmin", item.email), {
            Routess: item.Routess,
            BookingDate: item.BookingDate,
            BookingTime: item.BookingTime,
            Reasons: item.Reasons,
            email: item.email,
        }).then(() => {
            Alert.alert("Accpected " + item.email);
        }).catch((error) => {
            console.error(error);
            Alert.alert("SORRY TRY AGAIN " + item.email);
        });
        deleteDoc(doc(db, 'ExtraBus', item.email))
    }
    

    const RejectedHandler = (item) => {
        deleteDoc(doc(db, 'ExtraBus', item.email))
        Alert.alert("Rejected user " + item.email);

    }
    // get data from firebase store and map like todo app
    useEffect(() => {
        getDocs(collection(db, 'ExtraBus'))
            .then((docData) => {
                let newData = [];
                docData.forEach((doc) => {
                    newData.push(doc.data());
                });
                setData(newData);
            })
            .catch((error) => {
                console.error(error);
                Alert.alert("Error " + error);
            });
    }, []);

    return (
        <ScrollView>
            <View style={styles.container}>
                {data.map((item) => {
                    console.log(item.email);
                    return (
                        <View style={styles.item} >
                            <View style={styles.getFlexDirectionContainer}>
                                <View style={styles.itemsNameContainer}>
                                <Text style={styles.TextColorChg}>Routess : {item.Routess}</Text>
                                    <Text style={styles.TextColorChg}>Date: {item.BookingDate}</Text>
                                    <Text style={styles.TextColorChg}>Time : {item.BookingTime}</Text>
                                                                      
                                    <Text style={styles.TextColorChg}>Reasons : {item.Reasons}</Text>
                                </View>
                                <View style={styles.pressableChgCon}>
                                    <Pressable
                                        style={styles.itemsdesContainer}
                                        onPress={() => AcceptedHandlers(item)}
                                    >
                                        <Text style={styles.accpectColor}>Accpted</Text>
                                    </Pressable>
                                    <Pressable
                                        style={styles.itemsdesRejected}
                                        onPress={() => RejectedHandler(item)}

                                    >
                                        <Text style={styles.rejectColor}>Rejected</Text>
                                    </Pressable>
                                    <Pressable
                                        style={styles.itemsdesView}
                                        onPress={() => navigation.navigate('Bus Applications', { item: item })}
                                    >
                                        <Text>View full</Text>
                                    </Pressable>
                                </View>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text style={{}}>
                                    {item.date}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
        //backgroundColor: '#E1D5C9',//#7c3e69',
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    item: {
        //flexDirection: 'row',
        marginTop: 15,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#367CFF',//'#E094B0',
        color: 'white',
        padding: 20,
        margin: 25,
        elevation: 10, // andriod shadow
        shadowColor: '#149496',
        shadowOffset: { width: 20, height: 30 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    accpectColor: {
        color: 'green',
    },
    rejectColor: {
        color: 'red',
    },
    itemsNameContainer: {
        marginLeft: 0,
        width: '75%',
    },
    itemsdesContainer: {
        backgroundColor: 'white',
        marginBottom: 10,

        //width: '25%',
    },
    itemsdesRejected: {
        color: 'red',
        backgroundColor: 'white',
        marginBottom: 10,
    },
    dateContainer: {
        flexDirection: 'row',
        marginLeft: '75%',
    },
    getFlexDirectionContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    picker: {
        width: "40%",
    },
    itemsdesView: {
        backgroundColor: 'white',
        color: 'white',
    },
    TextColorChg: {
        color: '#ffffff',
        /// fontSize:'bold',
    },
    pressableChgCon: {
        //paddingBottom : 10,
        //justifyContent:'space-between',
        //flexDirection:'column',
        //marginBottom: 10,

    },

});