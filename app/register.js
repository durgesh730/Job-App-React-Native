import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import React, { useState } from 'react'
import {
    StyleSheet,
    Image,
    StatusBar,
    TouchableOpacity,
    Text,
    TextInput,
    SafeAreaView
} from 'react-native'
import { View } from 'react-native'

const register = () => {

    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();

    const handleNav = () => {
        navigation.navigate('dashboard');
    }

    return (
        <SafeAreaView>
            <StatusBar backgroundColor="#1F41BB" barStyle="light-content" />

            <View style={{ paddingTop: "30%", alignItems: "center" }} >
                <Text style={{ fontSize: 40, color: "#1F41BB" }} className='font-semibold' >Create Account</Text>

                <View style={{ paddingTop: "5%", alignItems: "center" }} >
                    <Text style={{ fontSize: 20 }}  >Create an account so you can explore all the</Text>
                    <Text style={{ fontSize: 20 }} > existing jobs</Text>
                </View>
            </View>

            <View style={styles.loginInputs} >
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setText}
                        value={text}
                        placeholder="Email"
                        placeholderTextColor="#626262"
                    />
                </View>

                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Password"
                        placeholderTextColor="#626262"
                    />
                </View>

                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder="Confirm Password"
                        placeholderTextColor="#626262"
                    />
                </View>
            </View>

            <View style={{ paddingTop: "5%", alignItems: "center" }} >
                <TouchableOpacity onPress={handleNav} style={styles.button}>
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View style={{ paddingTop: "10%", alignItems: "center" }} >
                <Link style={{ fontSize: 16 }} href={'/login'}  >Already have an account</Link>
            </View>

            <View style={{ paddingTop: "15%", alignItems: "center" }} >
                <Text style={{ fontSize: 16, color: "#1F41BB" }}  >Or continue with</Text>
            </View>

            <View
                style={{
                    paddingTop: "5%",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    gap: 5,
                    borderRadius: 50,
                }} >
                <Image source={require('../assets/apple.png')} style={{ width: 50, height: 40, borderRadius: 10, }} ></Image>
                <Image source={require('../assets/facebook.png')} style={{ width: 50, height: 40, borderRadius: 10, }} ></Image>
                <Image source={require('../assets/google.png')} style={{ width: 50, height: 40, borderRadius: 10, }} ></Image>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loginInputs: {
        alignItems: "center",
        paddingTop: "10%",
    },
    container: {
        width: "85%",
        textAlign: "center",
        backgroundColor: '#F1F4FF',
        paddingHorizontal: 0,
        paddingVertical: 0,
        borderRadius: 8,
        margin: 10,
    },
    input: {
        height: 50,
        width: "100%",
        borderColor: 'gray',
        borderWidth: 0,
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#F1F4FF',
        fontSize: 18,
    },
    button: {
        width: '85%',
        backgroundColor: '#1F41BB',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

export default register
