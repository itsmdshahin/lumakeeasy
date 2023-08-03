import { Text, View, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import Constants from 'expo-constants';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../App';

export default function RegistrationPage() {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [dept, setDept] = useState("");
    const [batch, setBatch] = useState("");
    const [email, setEmail] = useState("");
    const [Img, setImg] = useState("");
    const [password, setPassword] = useState("");

    const handlerSingUp = () => {
        console.log(email + "this " + password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("success user ");
                setDoc(doc(db, "Students", email), {
                    name: name,
                    id: id,
                    dept: dept,
                    batch: batch,
                    email: email,
                    Img: Img,
                    password: password,
                }).then(() => {
                    console.log(`SUBMITED DATA`);
                    Alert.alert("SUBMITED LOGIN NOW!");
                }).catch((error) => {
                    console.log(error);
                    Alert.alert("Already Have an account!");
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
                            placeholder='Amira Mostafa Chy'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={name}
                            onChangeText={(name) => setName(name)}

                        />
                    </View>
                    <Text style={styles.nmCon}>ID  </Text>
                    <View style={styles.inputView}>

                        <TextInput style={styles.nmInp}
                            placeholder='1932020029'
                            placeholderTextColor='gray'
                            keyboardType='phone-pad'
                            value={id}
                            onChangeText={(id) => setId(id)}
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

                    <Text style={styles.nmCon}>Dept  </Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.nmInp}
                            placeholder='CSE'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={dept}
                            onChangeText={(dept) => setDept(dept)}
                        />
                    </View>
                    <Text style={styles.nmCon}>Batch</Text>

                    <View style={styles.inputView}>
                        <TextInput style={styles.nmInp}
                            placeholder='52'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={batch}
                            onChangeText={(batch) => setBatch(batch)}
                        />
                    </View>
                    <Text style={styles.nmCon}>Email  </Text>

                    <View style={styles.inputView}>
                        <TextInput style={styles.nmInp}
                            placeholder='cse_1932020029@lus.ac.bd'
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
                    <TouchableOpacity style={styles.button} onPress={handlerSingUp}>
                        <Text style={styles.ColorHandler}>Submit</Text>
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
        //backgroundColor: '#f6f0f0',
        padding: 8,
    },
    regCon: {
        margin: 0,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    stdCon: {
        margin: 4,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    nmCon: {
        color: '#367cff',
        paddingTop: 2,
        paddingBottom: 2,
        marginBottom: 0,
        // textAlign:'left'
        fontSize: 15,
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
        width: 100,
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        backgroundColor: "#367cff",
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
    ColorHandler: {
        color: 'white',
        fontWeight: 'bold',
    }

});
