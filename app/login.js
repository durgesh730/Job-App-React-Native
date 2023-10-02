import { Link } from 'expo-router';
import React, { useState } from 'react'
import { StyleSheet, Image, StatusBar, TouchableOpacity, Text, TextInput, SafeAreaView } from 'react-native'
import { View } from 'react-native'

const login = () => {

    const [text, setText] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView>
            
            <StatusBar backgroundColor="#1F41BB" barStyle="light-content" />

            <View style={styles.textfont} >
                <View style={{ paddingTop: "30%", alignItems: "center" }} >
                    <Text style={{ fontSize: 50, color: "#1F41BB", fontWeight: 600 }} >Login here</Text>

                    <View style={{ paddingTop: "5%", alignItems: "center" }} >
                        <Text style={{ fontSize: 30 }} >Welcome back you’ve</Text>
                        <Text style={{ fontSize: 30 }} > been missed!</Text>
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
                </View>

                <View style={styles.passReset} >
                    <Text style={{ color: "#1F41BB", fontWeight: 600, fontSize: 16 }} >Forgot your password?</Text>
                </View>

                <View style={{ paddingTop: "5%", alignItems: "center" }} >
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Sign in</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ paddingTop: "10%", alignItems: "center" }} >
                    <Link href={'/register'} style={{ fontSize: 16 }}  >Create new account</Link>
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

            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    textfont: {
        overflow: "scroll"
    },
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
    passReset: {
        paddingTop: "5%",
        width: "92%",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-end"
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

export default login
