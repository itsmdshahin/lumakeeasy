import React, { useState, useEffect } from 'react';
import { Pressable, Text, View, StyleSheet, TextInput, FlatList, ScrollView, Alert } from 'react-native';
import { deleteDoc, setDoc, getDoc, doc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../App';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function PPList({ navigation }) {
    const [data, setData] = useState([]);
    const [Accpted, setAccpted] = useState(false);
    const [Rejected, setRejected] = useState(false);
    const [selectedValue, setSelectedValue] = useState("Accpted");
    let userEmails = "";
    const AccptedHandler = (item) => {

        //console.log("THIS IS ITEM DATA " + item.name);
        //console.log("THIS IS ITEM DATA " + item.id);
        console.log("THIS IS ITEM DATA " + item.email);
        //console.log("THIS IS ITEM DATA " + item.dept);

        setDoc(doc(db, "PartialViewForAdmin", item.email), {
            name: item.name,
            id: item.id,
            batch: item.batch,
            email: item.email,
            dept: item.dept,
        }).then(() => {
            Alert.alert("Accpected " + item.email);
        }).catch((error) => {
            console.error(error);
            Alert.alert("SORRY TRY AGAIN " + item.email);
        });
        deleteDoc(doc(db, 'PartialView', item.email))

    };

    const RejectedHandler = (item) => {
        deleteDoc(doc(db, 'PartialView', item.email))
        Alert.alert("Rejected user " + item.email);

    }
    // get data from firebase store and map like todo app
    useEffect(() => {
        getDocs(collection(db, 'PartialView'))
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
                    userEmails = item.email;
                    console.log(item.email);
                    return (
                        <View style={styles.item} key={item.key}>
                            <View style={styles.getFlexDirectionContainer}>
                                <View style={styles.itemsNameContainer}>
                                    <Text style={styles.TextColorChg}>Name: {item.name}</Text>
                                    <Text style={styles.TextColorChg}>Id : {item.id}</Text>
                                    <Text style={styles.TextColorChg}>Batch : {item.batch}</Text>
                                    {/* <Text>Email : {item.email}</Text> */}
                                    <Text style={styles.TextColorChg}>Department : {item.dept}</Text>
                                </View>
                                <View style={styles.pressableChgCon}>
                                    <Pressable
                                        style={styles.itemsdesContainer}
                                        onPress={() => AccptedHandler(item)}
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
                                        onPress={() => navigation.navigate('View Application',{item:item})}
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
    accpectColor:{
        color:'green',
    },
    rejectColor:{
        color:'red',
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
    TextColorChg:{
        color:'#ffffff',
       /// fontSize:'bold',
    },
    pressableChgCon:{
        //paddingBottom : 10,
        //justifyContent:'space-between',
        //flexDirection:'column',
        //marginBottom: 10,

    },

});