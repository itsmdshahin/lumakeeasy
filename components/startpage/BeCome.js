import { StyleSheet, Text, View, Image, Button, Alert, Linking } from 'react-native'
import React from 'react'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import { StatusBar } from 'expo-status-bar';
// for negavition
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function BeCome({ navigation }) {

    function onClickHandlerforStudent() {
        Alert.alert('this is ok', 'this is for student',)
    }

    function onClickHandlerforadmin() {
        Alert.alert('this is ok', 'this is teacher or admin or head',)
    }

    return (
        <View style={styles.getContainer}>
            <View style={styles.ImageContainer}>
                <Image

                    style={{
                        //flex:1,
                        //alignItems:'center',
                        padding: 19,
                        resizeMode: 'cover',
                        height: 350,
                        width: 450,
                        borderRadius: 9,
                        justifyContent: 'center',

                    }}
                    source={require('../../assets/images/joinwithus.png')}
                />
                <View style={styles.setTextBorderStyle}>
                    <Text style={styles.setTextBorderColor}>JOIN AS A</Text>
                </View>
            
              
            </View>

            <View style={styles.btnFlexDirection} >
                <Pressable style={styles.setbtnContainer} onPress={() => navigation.navigate('SingUp_Student')} >
                    <Text style={styles.textContainer}  >STUDENT</Text>
                </Pressable>

                <Pressable style={styles.setbtnContainer} onPress={() => navigation.navigate('SingUp_Teacher')} >
                    <Text style={styles.textContainer} >Teacher/D.Head</Text>
                </Pressable>
            </View>
            <Pressable style={styles.bottomfotterContainerbbox} onPress={() => navigation.replace('LogIn')} >
                <Text style={styles.bottomfotterContainer}>Already have an account? Signin </Text>
            </Pressable>

        
            <StatusBar style="auto" />
        </View>

    )
}

const styles = StyleSheet.create({

    bottomfotterContainer: {
        color: '#367CFF', //'#E19898',
        elevation: 2,
        fontSize: 12,
        //fontWeight: "bold",   
    },
    bottomfotterContainerbbox: {
        paddingTop:10,
        alignItems: 'center',
        justifyContent: 'center',
    },

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
        margin: 50,
    },
    textContainer: {
        color: 'white',
    },
    setbtnContainer: {
        backgroundColor: '#367cff',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        color: 'red',
        paddingTop: 7,
        margin: 5,
        //borderBottomColor: 'red',
        borderRadius: 6,
        color: 'white',
        //borderRadius: 28,
        overflow: 'hidden',
        flexDirection: 'row'
    },
    getContainer: {
        flex: 1,
        backgroundColor: '#fff',
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
    btnFlexDirection: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    setTextBorderColor: {
        color: '#367cff',
        elevation: 2,
        fontSize: 24,
        fontWeight: "bold",
    },
})