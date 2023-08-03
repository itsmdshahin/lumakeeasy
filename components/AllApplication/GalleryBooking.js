import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert, Picker } from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../App';

export default function GalleryBooking({ navigation, route }) {
    const { userid, useremail } = route.params;

    const [GalleryNumber, setGalleryNumber] = useState("");
    const [BookingDate, setBookingDate] = useState("");
    const [BookingStart, setBookingStart] = useState("");
    const [email, setEmail] = useState("");
    const [BookingEnd, setBookingEnd] = useState("");
    const [Reasons, setReasons] = useState("");

    //const [selectedValue, setSelectedValue] = useState("mid-term");
    // submit working function
    const SubmitBooking = () => {
        console.log("This is email" + useremail);

        if (GalleryNumber === "" || BookingDate === "" || BookingStart === "" || BookingEnd === "" || Reasons === "") {
            Alert.alert("Please Try again somthing is missing!");
        }
        else {
            setDoc(doc(db, "GalleryBooking", useremail), {
                GalleryNumber: GalleryNumber,
                BookingDate: BookingDate,
                BookingStart: BookingStart,
                BookingEnd: BookingEnd,
                Reasons: Reasons,
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
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image

                        style={{
                            //flex:1,
                            //alignItems:'center',
                            resizeMode: 'cover',
                            height: 150,
                            width: 150,
                            borderRadius: 9,

                        }}
                        source={require('../../assets/images/lus_logo.png')}
                    />
                </View>
                <View style={styles.viewCon}>
                    <Text style={styles.textCon}>Gallery Number</Text>
                    <View style={styles.innerviewCon}>
                        <TextInput style={styles.textInput}
                            placeholder='Gallery 1'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={GalleryNumber}
                            onChangeText={(GalleryNumber) => setGalleryNumber(GalleryNumber)}
                        />
                    </View>
                </View>

                <View style={styles.viewCon}>
                    <Text style={styles.textCon}>Booking Date</Text>
                    <View style={styles.innerviewCon}>
                        <TextInput style={styles.textInput}
                            placeholder='22/02/2023'
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={BookingDate}
                            onChangeText={(BookingDate) => setBookingDate(BookingDate)}
                        />
                    </View>
                </View>

                <View style={styles.viewCon}>
                    <Text style={styles.textCon}>Booking Start</Text>
                    <View style={styles.innerviewCon}>
                        <TextInput style={styles.textInput}
                            placeholder='12:10AM '
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={BookingStart}
                            onChangeText={(BookingStart) => setBookingStart(BookingStart)}
                        />
                    </View>
                </View>

                <View style={styles.viewCon}>
                    <Text style={styles.textCon}>Booking End</Text>
                    <View style={styles.innerviewCon}>
                        <TextInput style={styles.textInput}
                            placeholder='2:10AM '
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={BookingEnd}
                            onChangeText={(BookingEnd) => setBookingEnd(BookingEnd)}
                        />
                    </View>
                </View>
                <View style={styles.viewCon}>
                    <Text style={styles.textCon}>Email</Text>
                    <View style={styles.innerviewCon}>
                        <TextInput style={styles.textInput}
                            placeholder='email '
                            placeholderTextColor='gray'
                            keyboardType='email-address'
                            value={email}
                            onChangeText={(email) => setEmail(email)}
                        />
                    </View>
                </View>



                <Text style={styles.textCon}>Reason</Text>
                <View style={styles.reasoninnerviewCon}>
                    <TextInput
                        placeholder='Describe your reason here!'
                        placeholderTextColor='gray'
                        keyboardType='email-address'
                        value={Reasons}
                        onChangeText={(Reasons) => setReasons(Reasons)}
                    />
                </View>

                <View style={styles.buttonCon}>
                    <TouchableOpacity style={styles.button} onPress={SubmitBooking} >
                        <Text style={styles.submitNowText}>Submit Now</Text>
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
        // backgroundColor: '#F6E0E0',
        padding: 8,
        //height: 1000,

    },
    submitNowText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    allTextColor: {

    },
    textCon: {
        color: '#367cff',
        margin: 2,
        fontSize: 15,
        fontWeight: 'bold',
        //width: "15%",
        paddingTop: 30,
        paddingBottom: 20,
        marginBottom: 0,
        // textAlign:'left'
        //fontSize: 15,
        //fontWeight: 'normal',
        //textAlign: 'left'
    },
    viewCon: {
        //flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerviewCon: {
        //backgroundColor: "#fff",
        borderRadius: 10,
        width: "65%",
        paddingTop: 25,
        height: 35,
        marginBottom: 10,
        //marginTop:20,
    },
    textInput: {
        //borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        //width: '100%',
        marginRight: 8,
        //padding: 8,
        height: 50,
        //flex: 1,
        padding: 8,
        marginLeft: 0,
    },
    anotherinnerviewCon: {
        //backgroundColor: "#fff",
        borderRadius: 10,
        width: "45%",
        paddingTop: 25,
        height: 35,
        marginBottom: 10,
        //marginTop:20,
    },
    pickerCon: {
        height: 80,
        width: 200

    },
    reasonInput: {
        //borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#fff",
        width: '149%',
        marginRight: 0,
        //padding: 8,
        height: 50,
        //flex: 1,
        padding: 8,
        marginLeft: 0,
        paddingBottom: 120,

    },
    button: {
        width: 160,
        borderRadius: 10,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 45,
        backgroundColor: "#367cff",
        paddingBottom: 10,
        paddingTop: 10,
    },
    buttonCon: {
        //top: 1,
        //textAlign:'center',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    reasoninnerviewCon: {
        backgroundColor: "#fff",
        borderRadius: 10,
        //width: "65%",
        paddingTop: 2,
        height: 100,
        //marginBottom: 10,
        //marginTop:20,

    }

});