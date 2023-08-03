import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useId, useState } from 'react';
import Constants from 'expo-constants';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../App';

export default function RegisterforAdmin() {
    const [name, setName] = useState("");
    const [Img, setImg] = useState("");
    const [designa, setDesigna] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dept, setDept] = useState("");

    const handlerSingUp = () => {
        console.log(email + "this " + password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("success user " + userCredential);
                setDoc(doc(db, "Teachers", email), {
                    name: name,
                    designa: designa,
                    Img: Img,
                    email: email,
                    password: password,
                    dept: dept,
                }).then(() => {
                    console.log(`SUBMITED DATA`);
                    Alert.alert("SUBMITED LOGIN NOW!");
                }).catch((error) => {
                    console.log(error);
                })
            })
            .catch((error) => {
                console.log("ERRIR" + error);
            });
    }

    return (
        <ScrollView>

            <View style={styles.container}>
               
                <View style={styles.inputViweContainer}>

                    <Text style={styles.nmCon}>Name  </Text>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.nmInp}
                            placeholder='Jamia Alom'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={name}
                            onChangeText={(name) => setName(name)}
                        />
                    </View>
                    <Text style={styles.nmCon}>Profile Image link  </Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.nmInp}
                            placeholder='http://image.com/jpg'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={Img}
                            onChangeText={(Img) => setImg(Img)}
                        />
                    </View>
                    <Text style={styles.nmCon}>Designa  </Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.nmInp}
                            placeholder='Professor'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={designa}
                            onChangeText={(designa) => setDesigna(designa)}
                        />
                    </View>
                    <Text style={styles.nmCon}>Department  </Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.nmInp}
                            placeholder='CSE'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={dept}
                            onChangeText={(dept) => setDept(dept)}
                        />
                    </View>
                    <Text style={styles.nmCon}>Email  </Text>

                    <View style={styles.inputView}>
                        <TextInput style={styles.nmInp}
                            placeholder='jamiaalom@gmail.com'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                    <View style={styles.titleViewContainer}>
                        <Text style={styles.nmCon}>Password  </Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput style={styles.nmInp}
                            placeholder='12345'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={password}
                            onChangeText={(password) => setPassword(password)}
                        />
                    </View>
                    <TouchableOpacity onPress={handlerSingUp} style={styles.button}>
                        <Text style={styles.TextConBtn}>Submit</Text>
                    </TouchableOpacity>

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
        //backgroundColor: '#d0e7f5',
        padding: 8,
    },
    regCon: {
        margin: 2,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    stdCon: {
        margin: 12,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    nmCon: {
        color:'#367cff',
        paddingTop: 10,
        paddingBottom: 0,
        marginBottom: 0,
        // textAlign:'left'
        fontSize: 18,
        //fontWeight: 'normal',
        //textAlign: 'left',
    },
    nmInp: {
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
        color:'white',
        width: 100,
        borderRadius: 10,
        //height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: "#367cff",
        paddingBottom: 15,
        paddingTop: 10,
        //marginBottom: 10,
        
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
        width: "75%",
        paddingBottom: 50,
        height: 45,
        //marginBottom: 20,
        marginTop: 10,
    },
    TextConBtn: {
        color:'#fff',
        fontWeight:'bold',
    },
    buttonCon: {
        top: 30
    }
});