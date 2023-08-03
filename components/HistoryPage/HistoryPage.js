import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native';
import { deleteDoc, setDoc, getDoc, doc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../App';


export default function HistoryPage() {
    const [data, setData] = useState([]);

    const [list, setList] = useState([
        { name: 'Makeup Exam ', des: 'Accpted', date: '10/12/22', key: '1' },
        { name: 'Makeup Exam', des: 'Rejected', date: '24/12/22', key: '2' },
        { name: 'Partial Payment', des: 'Accpted', date: '10/12/22', key: '3' },
        { name: 'Makeup Exam', des: 'Rejected', date: '10/02/22', key: '4' },
        { name: 'Partial Payment', des: 'Accpted', date: '10/12/22', key: '5' },
        { name: 'Partial Payment', des: 'Rejected', date: '26/12/22', key: '6' },
        { name: 'Makeup Exam', des: 'Accpted', date: '10/12/21', key: '7' },
        { name: 'Partial Payment', des: 'Accpted', date: '10/12/20', key: '8' },
    ]);

    let rredColor = 0;

    useEffect(() => {
        getDocs(collection(db, 'History'))
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
                {list.map((item) => {

                    if (item.des === "Accpted") rredColor = 1;
                    else rredColor = 0;

                    return (
                        <View style={styles.item} key={item.key}>
                            <View style={styles.getFlexDirectionContainer}>
                                <Text style={styles.itemsNameContainer}> {item.name}</Text>

                                <Text
                                    style={[rredColor ? styles.itemsdesContainer : styles.itemsdesRejected]}
                                > {item.des} </Text>
                            </View>
                            <View style={styles.dateContainer}>
                                <Text style={styles.dateContainerText}>
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
     //   backgroundColor: '#fff',//#7c3e69',
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,

    },
    item: {
        //flexDirection: 'row',
        marginTop: 15,
        padding: 10,
        fontSize: 18,
        backgroundColor: '#367cff',//'#E094B0',
        color: 'white',
        padding: 20,
        margin: 25,
        elevation: 5, // andriod shadow
        shadowColor: '#149496',
        shadowOffset: { width: 20, height: 30 },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    itemsNameContainer: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 0,
        width: '75%',
    },
    itemsdesContainer: {
        color: 'green',
        marginLeft: 0,
        width: '25%',
        fontWeight: 'bold',
    },
    itemsdesRejected: {
        color: 'red',
        fontWeight: 'bold',
    },
    dateContainer: {
        flexDirection: 'row',
        marginLeft: '75%',
    },
    dateContainerText: {
        color: '#fff',
        //fontWeight:'bold',
    },
    getFlexDirectionContainer: {
        flexDirection: 'row',
    }
});