import { View, Text, Separator, StyleSheet, Pressable, StatusBar, Button, Image, ImageBackground, Alert } from 'react-native'

import React, { useState } from 'react'

// pages  
import BeCome from '../startpage/BeCome'
import RegisterforAdmin from '../RegisterPage/RegisterforAdmin'
import RegistrationPage from '../RegisterPage/RegistrationPage'
import LogInPage from '../LogInPage/LogInPage'
// Dashboard
import AdminProfile from '../Admin/AdminProfile'
import TeacherProfile from '../TeacherProfile/TeacherProfile'
import StudentProfile from '../StudentProfile/StudentProfile'
// for negavition
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

function Welcome({ navigation }) {
    return (
        <View style={styles.getContainer}>
            <View style={styles.ImageContainer}>
                <Image
                    style={{
                        //flex:1,
                        //alignItems:'center',
                        padding: 19,
                        resizeMode: 'cover',
                        height: 250,
                        width: 450,
                        borderRadius: 9,
                        justifyContent: 'center',

                    }}
                    source={require('../../assets/images/welcome.png')}
                />
                <View style={styles.setTextBorderStyle}>
                    <Text style={styles.setTextBorderColor}>Welcome to {'\n'}LU MAKE EASY💐</Text>
                    <Text style={styles.setTextBorderColors}>Here you find the easiest way to submit your application without any wasting time</Text>
                </View>
            </View> 
            <Pressable style={styles.setbtnContainer} onPress={() => navigation.replace('SignIn')} >
                <Text style={styles.textContainer} >GET STARTED</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    )
}
export default function StartPage() {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerTintColor: 'white', // set color for text and icons
                    headerStyle: { backgroundColor: '#367CFF' }, // set background color #367CFF #CCE5FF
                }}
            >
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="LogIn" component={LogInPage} />
                <Stack.Screen name="SignIn" component={BeCome} />
                <Stack.Screen name="SingUp_Student" component={RegistrationPage} />
                <Stack.Screen name="SingUp_Teacher" component={RegisterforAdmin} />
                <Stack.Screen
                    name="Student_Profile"
                    component={StudentProfile}
                    options={{
                        headerShown: false, // remove multiple herder nagivation
                    }} />
                <Stack.Screen
                    name="Teacher_Profile"
                    component={TeacherProfile}
                    options={{
                        headerShown: false, // remove multiple herder nagivation
                    }} />
                <Stack.Screen
                    name="Admin_Profile"
                    component={AdminProfile}
                    options={{
                        headerShown: false, //// remove multiple herder nagivation
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 3,
        //backgroundColor: '#F6F0F0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        //width:450,
        //height: 560,
        margin: 100,
    },
    textContainer: {
        fontWeight: "bold",
        color: 'white',
    },
    setbtnContainer: {
        backgroundColor: '#367CFF',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        color: 'red',
        paddingTop: 7,
        margin: 1,
        borderBottomColor: 'red',
        borderRadius: 6,
        color: 'white',
        //borderRadius: 28,
        overflow: 'hidden',
    },
    getContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        //alignItems: 'center',
        //justifyContent: 'center',
        //paddingTop:500,
    },
    btnContainer: {
        color: '#E19898',
        backgroundColor: 'red',
        width: 20,
        height: 100,
    },
    setTextBorderColor: {
        color: '#367CFF',
        fontSize: 23,
        fontWeight: "bold",
    },
    setTextBorderColors: {
        color: '#367CFF'
    }
});
