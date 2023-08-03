import { View, Text, Image, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, Alert, Pressable, Button, Platform } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';

import { collection, getDoc, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from '../../App';



//import {BottomSheet} from 'reanimated-bottom-sheet';
//for bottom sheet npm install reanimated-bottom-sheet 
//import  {Animated}  from 'react-native-reanimated';

const EditProfileScreen = ({ route }) => {
    const { userid, useremail } = route.params; // get data from Login page 
    console.log(useremail + " " + userid);
    const [name, setName] = useState("");


    // Update data
    const UpdateUser = () =>{
        updateDoc(doc(db, "Students", useremail), {
            name: name,
            // email: email,
            // username: username,
            // id: id,
        }).then(() => {
            console.log(`data submited`);
            Alert.alert("DATA UPDATED " + useremail);
        }).catch((error) => {
            console.log(error);
            Alert.alert("Somthing Wrong " + useremail);
        });
    }
   
    return (
        <View style={styles.container}>
            <View style={{ mergin: 10 }}>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.firstTouchable}>
                            <ImageBackground
                                source={require('../../assets/images/pass.png')}
                                style={{ height: 100, width: 100 }}
                                imageStyle={{ borderRadius: 15 }}
                            >
                                <View style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Icon name="camera" size={35} color='#fff' style={styles.iconCon} />
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.textCon}>
                        Shahinur Rahman
                    </Text>
                </View>
                <View style={styles.action}>
                    <FontAwesome name='user' size={25} color={'#367cff'} />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Full Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false} 
                        value={name}
                        onChangeText={(name) => setName(name)}
                    />
                </View>

                {/* <View style={styles.action}>
                    <FontAwesome name='user' size={25} color={'#367cff'} />
                    <TextInput
                        placeholder="Last Name"
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.action}>
                    <FontAwesome name='phone' size={25} color={'#367cff'} />
                    <TextInput
                        placeholder="Phone"
                        keyboardType='number-pad'
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View> */}

                <View style={styles.action}>
                    <FontAwesome name='envelope' size={25} color={'#367cff'} />
                    <TextInput
                        placeholder="Email"
                        keyboardType='email'
                        placeholderTextColor="#666666"
                        autoCorrect={false}
                        style={styles.textInput}
                    />
                </View>

                <TouchableOpacity style={styles.buttonCon} onPress={UpdateUser}>
                    <Text style={styles.innerbuttonCon}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
export default EditProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems:'center',
        //justifyContent:'center'
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
       // color: "#ffff",
        backgroundColor: "#ffff",

    },
    buttonCon: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: "#367cff",
        alignItems: 'center',
        marginTop: 90,
        marginRight: 100,
        marginLeft: 100,
    },
    innerbuttonCon: {
        fontSize: 17,
        fontWeight: 'bold',
        marginVertical: 7,
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
        paddingLeft: 10,
        paddingEnd: 20,
        borderRadius:10,
       
    },
    textCon: {
        color: '#367cff',
        marginTop: 80,
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    iconCon: {
        opacity: 0.7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 10,

    },
    firstTouchable: {
        height: 100,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 150,
    }
}
)