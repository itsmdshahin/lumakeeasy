import React, { useRef, useState } from 'react';
import { TouchableOpacity, Text, View, Animated } from 'react-native';



const Status = () => {

    const [selectedStep, setSelectedStep] = useState(0);
    const status1 = useRef(new Animated.Value(0)).current;
    const status2 = useRef(new Animated.Value(0)).current;
    const status3 = useRef(new Animated.Value(0)).current;

    const start1 = () => {
        Animated.timing(status1, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };
    const start2 = () => {
        Animated.timing(status2, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };
    const start3 = () => {
        Animated.timing(status3, {
            toValue: 100,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };
    return (
        <View style={{ flex: 1 }}>
            <View style={{ width: '100%', alignItems: 'center', padding: 50 }}>

                <View style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: selectedStep > 0 ? '#367cff' : 'white',
                }}>
                    <Text style={{ color: 'gray' }}>1</Text>
                </View>
                <View style={{ width: 6, height: 100, backgroundColor: 'white', }}>

                </View>
                <View style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: selectedStep > 1 ? '#367cff' : 'white',
                }}>
                    <Text style={{ color: 'gray' }}>2</Text>
                </View>
                <View style={{ width: 6, height: 100, backgroundColor: 'white', }}>

                </View>
                <View style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: selectedStep > 2 ? '#367cff' : 'white',
                }}>
                    <Text style={{ color: 'gray' }}>3</Text>
                </View>
                <View style={{
                    width: 6,
                    height: 100,
                    backgroundColor: 'white',
                }}>

                </View>
                <View style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    backgroundColor: selectedStep > 3 ? '#367cff' : 'white',
                }}>
                    <Text style={{ color: 'gray' }}>4</Text>
                </View>

            </View>
            <View style={{
                width: '100%',
                alignItems: 'center',
                padding: 50,
                position: 'absolute',
                top: 0
            }}>


                <Animated.View style={{
                    width: 8,
                    height: status1,
                    marginTop: 30,
                    backgroundColor: '#367cff'
                }}>

                </Animated.View>

                <Animated.View style={{
                    width: 8,
                    height: status2,
                    marginTop: 30,
                    backgroundColor: '#367cff'
                }}>

                </Animated.View>

                <Animated.View style={{
                    width: 8,
                    height: status3,
                    marginTop: 20,
                    backgroundColor: '#367cff'
                }}>

                </Animated.View>


            </View>
            <TouchableOpacity style={{
                marginTop: 10,
                height: 50,
                width: 200,
                backgroundColor: '#367cff',
                alignItems: 'center',
                borderRadius: 20,
                alignSelf: 'center',
                paddingTop: 15,
            }} onPress={() => {
                if (selectedStep == 1) {
                    start1();
                }
                if (selectedStep == 2) {
                    start2();
                }
                if (selectedStep == 3) {
                    start3();
                }
                if (selectedStep == 0) {
                    setSelectedStep(selectedStep + 1);
                } else {
                    setTimeout(() => {
                        setSelectedStep(selectedStep + 1);
                    }, 3000);
                }

            }
            }>
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold',
                }}>See Progress</Text>

            </TouchableOpacity>
        </View>

    );

};
export default Status;