/* 
              LU MAKE EASY
ALL COPYRGIHT BY MD SHAHINUR RAHMAN (itsmdshahin) 
LINKDIN: https://www.linkedin.com/in/itsmdshahin
GITHUB : https://github.com/itsmdshahin
*/


import { View, Text, Image, StyleSheet, ScrollView, Alert, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { collection, getDoc, doc, setDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";
import { auth, db } from '../../App';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PPList from './PPList';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
import TemplatePartical from '../AllApplication/TemplatePartical';
import GBooking from './GBooking';
import GalleryBookkingApplication from '../AllApplication/GalleryBookkingApplication';
import BusBooking from './BusBooking';
const Stack = createNativeStackNavigator();

function AdminProfiles({ navigation, route }) {
  const { userid, useremail } = route.params; // get data from Login page 
  console.log(useremail + " " + userid);
  const [data, setData] = useState(null);
  //const id = navigation.getParam(`id`);


  useEffect(() => {
    getDoc(doc(db, 'Admin', useremail))
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


        <View>
          <View >
            {data ? (
              <View style={styles.headerProfileContainer}>
                <View >
                  <Image
                    style={styles.imageForProfile}
                    //source={require('../../assets/images/pass.png')} 
                    source={{ uri: data.uri }}
                  />
                </View>
                <View style={styles.detialsForProfile}>
                  <Text>Name: {data.name}</Text>
                  <Text>Email: {data.email}</Text>
                  <Text>Phone: {data.phone}</Text>
                  <Text>Leading University, Sylhet</Text>
                </View>
              </View>
            ) : (
              <Text>Loading data...</Text>
            )}
          </View>
        </View>
        <View style={styles.getaLine}>

          <Pressable
            style={[styles.iconsinnerContainer, ({ pressed }) => pressed ? styles.iconsinnerContainerPress : null]}
            android_ripple={{ color: '#ccc' }}
            onPress={() => navigation.navigate('Partial Payment List')}
          >
            <Ionicons name="card-sharp" size={32} color="#ffffff" />
            <Text style={styles.iconsTextColor}>PartialApplication</Text>
          </Pressable>
          <Pressable
            style={[styles.iconsinnerContainer, ({ pressed }) => pressed ? styles.iconsinnerContainerPress : null]}
            android_ripple={{ color: '#367CFF' }}
            onPress={() => navigation.navigate('Gallery Booking')}

          >

            <Ionicons name="card-sharp" size={32} color="#ffffff" />
            <Text style={styles.iconsTextColor}>Gallery Booking</Text>
          </Pressable>

          <Pressable
            style={[styles.iconsinnerContainer, ({ pressed }) => pressed ? styles.iconsinnerContainerPress : null]}
            android_ripple={{ color: '#ccc' }}
            onPress={() => navigation.navigate('Bus Booking')}

          >
            <Ionicons name="card-sharp" size={32} color="#ffffff" />
            <Text style={styles.iconsTextColor}>Bus Booking</Text>
          </Pressable>

        </View>
      </View>
    </ScrollView >
  );
}

export default function AdminProfile({ navigation, route }) {
  const userId = route.params.userId; // get data form prefious nagivation route
  const userEmail = route.params.userEmail;
  console.log("AdminProfile  " + userId);
  console.log("AdminProfile  " + userEmail);

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
          component={AdminProfiles}
          initialParams={{ userid: userId, useremail: userEmail }}
        />
        <Stack.Screen name="Partial Payment List" component={PPList} />
        <Stack.Screen
          name="View Application"
          component={TemplatePartical}

        />
        <Stack.Screen
          name="Gallery Booking"
          component={GBooking}

        />
        <Stack.Screen
          name="Gallery Booking Application"
          component={GalleryBookkingApplication}

        />
        <Stack.Screen
          name="Bus Booking"
          component={BusBooking}

        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  backgroundColorContainer: {
    //backgroundColor: '#E1D5C9',
  },
  imageForProfile: {
    borderRadius: 500,
    height: 150,
    width: 140,
    alignContent: 'center',
    padding: 10,
    margin: 30,


  },
  detialsForProfile: {
    fontSize: 50,
    alignContent: 'center',
    padding: 0,
    margin: 10,
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
    backgroundColor: '#E19898',
    padding: 5,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
})

