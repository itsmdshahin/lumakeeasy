import { View, Text, StyleSheet, TouchableOpacity, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../App'


export default function LogInPage({ onPickedUserAndPassword, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const navigation2 = useNavigation();

  function getIdPass() {
    setEmail(email);
    setPassword(password);

    signInWithEmailAndPassword(auth, email, password).then((res) => {
      let ok = 0;
      //console.log("This is a user profile : " + email);
      //console.log(email.length)
      //console.log(res.user.email); // show user id
      //console.log(res.user.uid); // show firebase local id
      //console.log(res.user.displayName);

      for (var i = 0; i < email.length; i++) {
        if (email[i] >= '0' && email[i] <= '9') {
          ok = 1;
          break;
        }
      }
      if (email === "admin@lus.ac.bd" && password === "111111") {
        navigation.replace('Admin_Profile', { userId: res.user.uid, userEmail: res.user.email });
      }
      else if (email === "register@lus.ac.bd" && password === "123456") {
        navigation.replace('Admin_Profile', { userId: res.user.uid, userEmail: res.user.email });
      }
      else if (ok) {
        navigation.replace('Student_Profile', { userid: res.user.uid, useremail: res.user.email });
      } else {
        navigation.replace('Teacher_Profile', { userid: res.user.uid, useremail: res.user.email });
      }
      //const user = Firebase.auth.currentUser
      //const user = userCredential.user;
      //console.log("This is a user profile : " + user);

    }).catch((error) => {
      console.log("ERRIR" + error);
      Alert.alert("Wrong User or Password!");
    });

    //onPickedUserAndPassword({email,password});
    //console.log(email + " " +password)
    // if( email === "itsmdshahin" && password === "1234"){
    //   Alert.alert("LOG IN SUCCESSFULLY!","")
    // }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.LogInNameStyle}>LOG IN</Text>
      <View style={styles.inputViweContainer}>


        <Text style={styles.CreateAccountConColor}>Email</Text>
        <View style={styles.inputView}>

          <TextInput
            style={styles.TextInput}
            placeholder='cse_1932020044@lus.ac.bd'
            placeholderTextColor='gray'
            keyboardType='email-address'
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <Text style={styles.CreateAccountConColor}>Password</Text>
        <View style={styles.inputView}>

          <TextInput
            style={styles.TextInput}
            placeholder='password'
            placeholderTextColor='gray'
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />

        </View>

        {/* 
        <TouchableOpacity>
          <Text style={styles.forgot_button} onPress={'#'}>Forget Password?</Text>
        </TouchableOpacity> 
        */}

        <Pressable style={styles.loginBtn} onPress={getIdPass} >
          <Text style={styles.TextColorContiner}> LOGIN </Text>
        </Pressable>
        
        <Pressable style={styles.CreateAccountCon} onPress={() => navigation.replace('SignIn')}>
          <Text style={styles.CreateAccountConColor}>Create a account</Text>
        </Pressable>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#F6F0F0',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 0,

  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 10,
    width: "100%",
    height: 45,
    marginBottom: 20,

  },
  inputViweContainer: {
    width: "70%",
    height: 45,
  },
  TextInput: {
    height: 50,
    //flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "100%",
    borderRadius: 10,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    backgroundColor: "#367cff",
  },
  LogInNameStyle: {
    color: '#367cff',
    elevation: 2,
    fontSize: 24,
    fontWeight: 'bold'
  },
  TextColorContiner:{
    color:'#fff',
    fontWeight: 'bold',
  },
  CreateAccountCon:{
    paddingTop:20,
    justifyContent:'center',

  },
  CreateAccountConColor:{
    color:'#367cff'
  }
})