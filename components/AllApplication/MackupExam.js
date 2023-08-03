import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView,Alert, Picker } from 'react-native';
import { useState } from 'react';
import Constants from 'expo-constants';
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from '../../App';

export default function MakeUpExam({ navigation, route }) {
  const { userid, useremail } = route.params;

  const [CourceTitle, setCourceTitle] = useState("");
  const [CourceCode, setCourceCode] = useState("");
  const [TeacherId, setTeacherId] = useState("");
  const [dept, setDept] = useState("");
  const [SemisterYear, setSemisterYear] = useState("");
  const [Examination, setExamination] = useState("");
  const [Dates, setDates] = useState("");
  const [Reasons, setReasons] = useState("");

  //const [selectedValue, setSelectedValue] = useState("mid-term");
  // submit working function
  const create = () => {
    console.log("This is email" + useremail);

    if (Reasons === "" || CourceTitle === "" || CourceCode === "" || TeacherId === "" || SemisterYear === "" || Examination === "" || Dates === "") {
      Alert.alert("Please Try again somthing is missing!");
    }
    else {
      setDoc(doc(db, "MakeupExamList", useremail), {
        CourceTitle: CourceTitle,
        CourceCode: CourceCode,
        TeacherId: TeacherId,
        SemisterYear: SemisterYear,
        Examination: Examination,
        Dates: Dates,
        Reasons: Reasons,
        useremail: useremail,
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
          <Text style={styles.textCon}>Course Title</Text>
          <View style={styles.innerviewCon}>
            <TextInput style={styles.textInput}
              placeholder='Compiler Design'
              placeholderTextColor='gray'
              keyboardType='email-address'
              value={CourceTitle}
              onChangeText={(CourceTitle) => setCourceTitle(CourceTitle)}
            />
          </View>
        </View>

        <View style={styles.viewCon}>
          <Text style={styles.textCon}>Course Code</Text>
          <View style={styles.innerviewCon}>
            <TextInput style={styles.textInput}
              placeholder='CSE-3317'
              placeholderTextColor='gray'
              keyboardType='email-address'
              value={CourceCode}
              onChangeText={(CourceCode) => setCourceCode(CourceCode)}
            />
          </View>
        </View>

        <View style={styles.viewCon}>
          <Text style={styles.textCon}>Teacher ID</Text>
          <View style={styles.innerviewCon}>
            <TextInput style={styles.textInput}
              placeholder='STA'
              placeholderTextColor='gray'
              keyboardType='email-address'
              value={TeacherId}
              onChangeText={(TeacherId) => setTeacherId(TeacherId)}
            />
          </View>
        </View>

        <View style={styles.viewCon}>
          <Text style={styles.textCon}>Semester-Year</Text>
          <View style={styles.innerviewCon}>
            <TextInput style={styles.textInput}
              placeholder='2022'
              placeholderTextColor='gray'
              keyboardType='phone-pad'
              value={SemisterYear}
              onChangeText={(SemisterYear) => setSemisterYear(SemisterYear)}
            />
          </View>
        </View>

        <View style={styles.viewCon}>
          <Text style={styles.textCon}>Date of exam scehdule</Text>
          <View style={styles.anotherinnerviewCon}>
            <TextInput style={styles.textInput}
              placeholder='1/14/2023'
              placeholderTextColor='gray'
              keyboardType='phone-pad'
              value={Dates}
              onChangeText={(Dates) => setDates(Dates)}
            />
          </View>
        </View>

        <View style={styles.viewCon}>
          <Text style={styles.textCon}>Examination</Text>
          <View style={styles.innerviewCon}>
            <TextInput style={styles.textInput}
              placeholder='Midterm'
              placeholderTextColor='gray'
              keyboardType='email-address'
              value={Examination}
              onChangeText={(Examination) => setExamination(Examination)}
            />
          </View>
        </View>

        {/* <View style={styles.viewCon}>
          <Text style={styles.textCon}>Documents</Text>
          <View style={styles.innerviewCon}>
            <TextInput style={styles.textInput}
              placeholder='1/14/2023'
              placeholderTextColor='gray'
              keyboardType='phone-pad'
            // onChangeText={(id) => setId(id)} 
            />
          </View>
        </View> */}


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
          <TouchableOpacity style={styles.button} onPress={create} >
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