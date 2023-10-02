import { useFonts } from 'expo-font';
import { Link } from 'expo-router'
import { Image, Text, View, StyleSheet, StatusBar } from 'react-native'

const Index = () => {

    let [fontsLoaded] = useFonts({
        'Poppins': require('../assets/Poppins/Poppins-Medium.ttf')
    })
    
    return (
        <View>
            <StatusBar backgroundColor="#1F41BB" barStyle="light-content" />

            <View style={{ width: "100%", height: "100%", paddingTop: "15%", paddingBottom: "15%" }} >
                <View style={{ margin: "auto", alignItems: "center" }} >
                    <Image source={require('../assets/image.png')} style={{ width: 300, height: 300 }} ></Image>
                </View>

                <View style={{ alignItems: "center", paddingTop: "16%" }} >

                    <View style={{ width: "80%", alignItems: "center" }} >
                        <Text style={styles.container}>Discover Your Dream Job here </Text>
                    </View>

                    <View style={{ alignItems: "center", paddingTop: "6%" }}  >
                        <Text >Explore all the existing job roles based on your</Text>
                        <Text >interest and study major</Text>
                    </View>

                    <View style={styles.bothbtn}>
                        <Link style={styles.loginbtn} href="/login">Login</Link>
                        <Link style={styles.Registerbtn} href="/register">Register</Link>
                    </View>
                </View>
            </View>

        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        fontSize: 30,
        color: "#1F41BB",
        fontFamily: "Poppins"
    },
    bothbtn: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "90%",
        paddingTop: "15%"
    },
    Registerbtn: {
        fontSize: 20,
        borderRadius: 6,
        paddingTop: '3%',
        paddingBottom: '3%',
        paddingLeft: '10%',
        paddingRight: '10%',
        backgroundColor: "#F8F9FF",
        fontFamily: "Poppins"
    },
    loginbtn: {
        fontFamily: "Poppins",
        backgroundColor: "#1F41BB",
        color: "white",
        paddingTop: '3%',
        paddingBottom: '3%',
        paddingLeft: '10%',
        paddingRight: '10%',
        borderRadius: 6,
        fontSize: 20,
        shadowColor: '#888888',
        shadowOffset: { width: 20, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
        elevation: 5
    }

});


export default Index
