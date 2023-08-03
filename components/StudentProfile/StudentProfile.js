import { View, Text, Image, StyleSheet, ScrollView, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDoc, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from '../../App';


import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import MackupExam from '../AllApplication/MackupExam';
import PartialPayment from '../AllApplication/PartialPayment';
import HistoryPage from '../HistoryPage/HistoryPage';
import EditProfileScreen from './EditProfileScreen';
import LogInPage from '../LogInPage/LogInPage';
import ApplicationList from './ApplicationList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Support from '../Others/Support';
import GalleryBooking from '../AllApplication/GalleryBooking';
import GalleryBookkingApplication from '../AllApplication/GalleryBookkingApplication';
import ApplicationLists from './ApplicationLists';
import ExtraBus from '../AllApplication/ExtraBus'
import ApplicationlistforBus from './ApplicationlistforBus'

const Stack = createNativeStackNavigator();

function ProfileforStudent({ navigation, route }) {
    const { userid, useremail } = route.params; // get data from Login page 
    console.log(useremail + " " + userid);
    const [data, setData] = useState(null);

    useEffect(() => {
        getDoc(doc(db, 'Students', useremail))
            .then((docData) => {
                if (docData.exists) {
                    setData(docData.data());
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [useremail]);


    function OnClickTheEvent() {
        Alert.alert("HELLO")
    }
    return (
        <ScrollView>
            <View style={styles.backgroundColorContainer}>

                {data ? (
                    <View style={styles.headerProfileContainer}>
                        <View>
                            <Image style={styles.imageForProfile} source={{ uri: data.Img }} />
                        </View>
                        <View style={styles.detialsForProfile}>
                            <Text>Name: {data.name}</Text>
                            <Text>Id : {data.id} </Text>
                            <Text>Batch: {data.batch}</Text>
                            <Text>Email : {data.email}</Text>
                            <Text>Department of {data.dept}</Text>
                            <Text>Leading University,Sylhet</Text>
                        </View>
                    </View>
                ) : (
                    <Text>Loading data...</Text>
                )}
                <View style={styles.getaLine}>

                </View>


                <View>
                    <View style={styles.iconsStyleContainer}>

                        <Pressable
                            style={[styles.iconsinnerContainer, ({ pressed }) => pressed ? styles.iconsinnerContainerPress : null]}
                            android_ripple={{ color: '#ccc' }}
                            onPress={() => navigation.navigate('History')}

                        >

                            <Icon name="history" size={32} color="#ffffff" />
                            <Text style={styles.iconsTextColor}>History</Text>
                        </Pressable>
                        <Pressable
                            style={styles.iconsinnerContainer}
                            onPress={() => navigation.navigate('Support')}
                            android_ripple={{ color: '#ccc' }}
                        >

                            <MaterialIcons name="support" size={32} color="#ffffff" />
                            <Text style={styles.iconsTextColor}>support</Text>
                        </Pressable>
                        <Pressable
                            style={styles.iconsinnerContainer}
                            onPress={() => navigation.navigate('EditProfileScreen')}
                            android_ripple={{ color: '#ccc' }}

                        >

                            <AntDesign name="profile" size={32} color="#ffffff" />
                            <Text style={styles.iconsTextColor}>profile</Text>
                        </Pressable>

                    </View>
                    <View style={styles.iconsStyleContainer}>

                        <Pressable
                            style={styles.iconsinnerContainer}
                            onPress={() => navigation.navigate('Gallery Application')}
                            android_ripple={{ color: '#ccc' }}

                        >
                            <AntDesign name="google" size={32} color="#ffffff" />
                            <Text style={styles.iconsTextColor}>G. App</Text>
                        </Pressable>
                        

                        <Pressable
                            android_ripple={{ color: '#ccc' }}
                            style={styles.iconsinnerContainer}
                            onPress={() => navigation.navigate('Bus Application')}>
                            <Icon name="bus" size={32} color="#ffffff" />
                            <Text style={styles.iconsTextColor}>Bus App</Text>
                        </Pressable>
                        <Pressable
                            style={styles.iconsinnerContainer}
                            onPress={() => navigation.navigate('ApplicationList')}
                            android_ripple={{ color: '#ccc' }} >

                            <MaterialIcons name="payments" size={32} color="#ffffff" />
                            <Text style={styles.iconsTextColor}>Par App</Text>
                        </Pressable>

                    </View>
                    {/* THIS IS START APPLICATION PROCES  */}
                    <View style={styles.TextApplicationContainer}>
                        <Text style={styles.TextApplication}>Apply now!</Text>
                    </View>

                    <View style={styles.iconsStyleContainerApplication}>

                        <Pressable
                            style={styles.iconsinnerContainer}
                            onPress={() => navigation.navigate('Makeup Application')}
                            android_ripple={{ color: '#ccc' }}

                        >
                            {/* <MaterialIcons name="pending" size={32} color="#fff" /> */}
                            <Text style={styles.iconsTextColor}>Makeup Exam</Text>
                        </Pressable>
                        <Pressable
                            style={styles.iconsinnerContainer}
                            onPress={() => navigation.navigate('Partial Payment')}
                            android_ripple={{ color: '#ccc' }}
                        >
                            {/* <AntDesign name="clockcircle" size={30} color="#fff" /> */}
                            <Text style={styles.iconsTextColor}>Partial Payment</Text>
                        </Pressable>

                    </View>
                    <View style={styles.iconsStyleContainerApplication}>

                        <Pressable
                            style={styles.iconsinnerContainer}
                            onPress={() => navigation.navigate('Gallery Booking')}
                            android_ripple={{ color: '#ccc' }}

                        >
                            {/* <MaterialIcons name="pending" size={32} color="#fff" /> */}
                            <Text style={styles.iconsTextColor}>Gallery Booking</Text>
                        </Pressable>
                        <Pressable
                            style={styles.iconsinnerContainer}
                            onPress={() => navigation.navigate('Extra Bus')}
                            android_ripple={{ color: '#ccc' }}
                        >
                            {/* <AntDesign name="clockcircle" size={30} color="#fff" /> */}
                            <Text style={styles.iconsTextColor}> Extra Vehicals</Text>
                        </Pressable>

                    </View>

                </View>
            </View>
        </ScrollView>
    );
}

export default function StudentProfile({ navigation, route }) {
    const userId = route.params.userid;
    const userEmail = route.params.useremail;
    console.log("TeacherProfile  " + userId);
    console.log("TeacherProfile  " + userEmail);
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="Profile"
                screenOptions={{
                    headerTintColor: 'white', // set color for text and icons
                    headerStyle: { backgroundColor: '#367CFF' }, // set background color
                    headerRight: () => (
                        <View style={{ flexDirection: 'row', marginRight: 16 }}>
                            <Ionicons
                                name="notifications-outline"
                                size={24}
                                color="white"
                                onPress={() => {
                                    // handle first notification press
                                }}
                                style={{ marginRight: 16 }}
                            />
                            <Ionicons
                                name="log-out"
                                size={24}
                                color="white"
                                onPress={() => {
                                    navigation.replace('LogIn');
                                }}
                            />
                        </View>

                    ),
                }}
            >
                <Stack.Screen
                    name="Profile"
                    component={ProfileforStudent}
                    initialParams={{ userid: userId, useremail: userEmail }} // initiallly sent data 

                />
                <Stack.Screen name="History" component={HistoryPage} />
                <Stack.Screen
                    name="ApplicationList"
                    component={ApplicationList}
                    initialParams={{ userid: userId, useremail: userEmail }}
                />
                <Stack.Screen
                    name="Makeup Application"
                    component={MackupExam}
                    initialParams={{ userid: userId, useremail: userEmail }}
                />

                <Stack.Screen name="Partial Payment" component={PartialPayment} />
                <Stack.Screen
                    name="EditProfileScreen"
                    component={EditProfileScreen}
                    initialParams={{ userid: userId, useremail: userEmail }}
                />
                <Stack.Screen name='Support' component={Support} />
                <Stack.Screen
                    name="Gallery Booking"
                    component={GalleryBooking}
                    initialParams={{ userid: userId, useremail: userEmail }}
                />
                <Stack.Screen
                    name="Gallery Application"
                    component={ApplicationLists}
                    initialParams={{ userid: userId, useremail: userEmail }}
                />
                <Stack.Screen
                    name="Extra Bus"
                    component={ExtraBus}
                    initialParams={{ userid: userId, useremail: userEmail }}
                />
                <Stack.Screen
                    name="Bus Application"
                    component={ApplicationlistforBus}
                    initialParams={{ userid: userId, useremail: userEmail }}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

const styles = StyleSheet.create({
    backgroundColorContainer: {
        // backgroundColor: '#fff',
    },
    imageForProfile: {
        borderRadius: 500,
        height: 150,
        width: 140,
        alignContent: 'center',
        padding: 0,
        margin: 20,
    },
    detialsForProfile: {
        fontSize: 50,
        alignContent: 'center',
        padding: 0,
        margin: 0,
    },
    headerProfileContainer: {
        fontWeight: 'bold',
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor:'#C99153',
    },
    iconsStyleContainer: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#E19898',
        height: 120,
    },
    iconsinnerContainer: {
        backgroundColor: '#367cff',//'#b55555', '#cd5c5c','#202224', // '#5f3fa8',// '#B39EE4',
        color: '#fff',
        padding: 20,
        margin: 25,
        elevation: 10,
        shadowColor: 'white',
        shadowOffset: { width: 20, height: 20 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        borderRadius: 10,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',


    },
    iconsinnerContainerPress: {
        opacity: 0.35,
    },
    iconsTextColor: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    iconsStyleContainerApplication: {
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        color: '#fff',
        height: 120,
        padding: 0,
    },
    TextApplication: {

        color: '#EEEDDB',
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    TextApplicationContainer: {
        backgroundColor: '#367cff',
        padding: 5,
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
    },
})


/* 
              LU MAKE EASY
ALL COPYRGIHT BY MD SHAHINUR RAHMAN (itsmdshahin) 
LINKDIN: https://www.linkedin.com/in/itsmdshahin
GITHUB : https://github.com/itsmdshahin
*/