import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../App';
import PushNotification from 'react-native-push-notification';



export default function PartialPayment() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [batch, setBatch] = useState("");
  const [dept, setDept] = useState("");
  const [email, setEmail] = useState("");
  const [ammount, setAmmount] = useState("");


  const create = () => {
    console.log("This is email" + email);

    if (email === "" || id === "" || name === "" || batch === "" || dept === "" || ammount === "") {
      Alert.alert("Please Try again somthing is missing!");
    }
    else {
      setDoc(doc(db, "PartialView", email), {
        name: name,
        id: id,
        dept: dept,
        batch: batch,
        ammount: ammount,
        email: email,
      }).then(() => {
        console.log(`SUBMITED DATA`);
        Alert.alert("APPLICATION IS PUSHED ");
      }).catch((error) => {
        console.log(error);
        Alert.alert("Error found" + error);
      })
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.textCon}>
          To {'\n'}The Register{'\n'}Leading University Sylhet.{'\n'}
          Through: Head of the Department.{'\n'}
          Subject: Application for partial payment.{'\n'}{'\n'}
          Respected Sir,{'\n'}
          With due Respect, I would like to state that, I am a student of Leading University.Due To my financial crisis I am currently unable to pay my full semester fees.Now I am able to pay 50% of my tution fee.{'\n'}{'\n'}
          Therefore, I pray and hope that, you will consider my situation and grant my partial payment and allow me to seat for exam.{'\n'}{'\n'}
        </Text>

        <View style={styles.inputViweContainer}>
          <Text style={styles.nibdCon}>Name  </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.nibdInp}
              placeholder='Enter your name'
              placeholderTextColor='gray'
              keyboardType='email-address'
              value={name}
              onChangeText={(name) => { setName(name) }}

            />
          </View>

          <Text style={styles.nibdCon}>ID  </Text>
          <View style={styles.inputView}>

            <TextInput style={styles.nibdInp}
              placeholder='Enter your ID'
              placeholderTextColor='gray'
              keyboardType='phone-pad'
              value={id}
              onChangeText={(id) => { setId(id) }}
            />
          </View>

          <Text style={styles.nibdCon}>Batch </Text>
          <View style={styles.inputView}>
            <TextInput style={styles.nibdInp}
              placeholder='Enter your batch'
              placeholderTextColor='gray'
              keyboardType='email-address'
              value={batch}
              onChangeText={(batch) => { setBatch(batch) }}
            />
          </View>

          <Text style={styles.nibdCon}>Dept </Text>
          <View style={styles.inputView}>
            <TextInput style={styles.nibdInp}
              placeholder='Enter your Deptarment'
              placeholderTextColor='gray'
              keyboardType='email-address'
              value={dept}
              onChangeText={(dept) => { setDept(dept) }}
            />
          </View>

          <Text style={styles.nibdCon}>Email </Text>
          <View style={styles.inputView}>
            <TextInput style={styles.nibdInp}
              placeholder='Enter your email'
              placeholderTextColor='gray'
              keyboardType='email-address'
              value={email}
              onChangeText={(email) => { setEmail(email) }}
            />
          </View>

          <Text style={styles.nibdCon}>Amount </Text>
          <View style={styles.inputView}>
            <TextInput style={styles.nibdInp}
              placeholder='Enter ammount'
              placeholderTextColor='gray'
              keyboardType='email-address'
              value={ammount}
              onChangeText={(ammount) => { setAmmount(ammount) }}
            />
          </View>

          <View style={styles.buttonCon}>
            <TouchableOpacity onPress={create} style={styles.button}>
              <Text style={styles.submitTextCon}>Submit</Text>
            </TouchableOpacity>
          </View>
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
    height: 1000
    ,
  },
  textCon: {
    margin: 2,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'left',
  }, nibdCon: {

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
    width: "85%",
    paddingBottom: 50,
    height: 35,
    //marginBottom: 20,
    marginTop: 10,


  },
  buttonCon: {
    top: 30,

  },
  submitTextCon: {
    color: '#fff',
    fontWeight: 'bold',
  },

});