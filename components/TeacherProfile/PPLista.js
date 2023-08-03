import React, { useState, useEffect } from 'react';
import { Pressable, Text, View, StyleSheet, TextInput, FlatList, ScrollView, Alert } from 'react-native';
import { getDoc } from 'firebase/firestore';
import { db } from '../../App';
import { Picker } from '@react-native-picker/picker';

export default function PPLista() {
    const [selectedValue, setSelectedValue] = useState("Accpted");
    const AccptedHandler = () => {
        Alert.alert("Accpted");
    }
    const RejectedHandler = () => {
        Alert.alert("Rejected");
    }

    const [list, setList] = useState([
        { name: 'MD SHAHINUR RAHMAN ', batch: '52', dept: 'CSE', email: 'cse_1932020044@lus.ac.bd', id: '1932020044', des: 'Rejected', date: '24/12/22', key: '1' },
        { name: 'Makeup Exam', des: 'Rejected', date: '24/12/22', key: '2' },
        { name: 'Partial Payment', des: 'Accpted', date: '10/12/22', key: '3' },
        { name: 'Makeup Exam', des: 'Rejected', date: '10/02/22', key: '4' },
        { name: 'Partial Payment', des: 'Accpted', date: '10/12/22', key: '5' },
        { name: 'Partial Payment', des: 'Rejected', date: '26/12/22', key: '6' },
        { name: 'Makeup Exam', des: 'Accpted', date: '10/12/21', key: '7' },
        { name: 'Partial Payment', des: 'Accpted', date: '10/12/20', key: '8' },
    ]);


    return (
        <ScrollView>
            <View style={styles.container}>
                <Picker
                    selectedValue={selectedValue}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Accpted" value="Accpted" />
                    <Picker.Item label="Rejected" value="Rejected" />
                </Picker>
                {list.map((item) => {
                    if (item.des === selectedValue) {
                        return (
                            <View style={styles.item} key={item.key}>
                                <View style={styles.getFlexDirectionContainer}>
                                    <View style={styles.itemsNameContainer}>
                                        <Text style={styles.TextColorWt}>Name: {item.name}</Text>
                                        <Text style={styles.TextColorWt}>Id : {item.id}</Text>
                                        <Text style={styles.TextColorWt}>Batch : {item.batch}</Text>
                                        <Text style={styles.TextColorWt}>Email : {item.email}</Text>
                                        <Text style={styles.TextColorWt}>Department : {item.dept}</Text>
                                    </View>
                                    <View>
                                        <Pressable
                                            style={styles.itemsdesContainer}
                                            onPress={AccptedHandler}
                                        >
                                            <Text style={styles.accpectColor}>Accpted</Text>
                                        </Pressable>
                                        <Pressable
                                            style={styles.itemsdesRejected}
                                            onPress={RejectedHandler}
                                        >
                                            <Text style={styles.rejectColor}>Rejected</Text>
                                        </Pressable>
                                    </View>
                                </View>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.TextColorWt}>
                                        {item.date}
                                    </Text>
                                </View>
                            </View>
                        );
                    }
                })}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({

    container: {
      //  backgroundColor: '#E1D5C9',//#7c3e69',
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    accpectColor:{
        color:'green',
    },
    rejectColor:{
        color:'red',
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
        backgroundColor: 'white',
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
    TextColorWt:{
        color:'#fff',     
    }

});