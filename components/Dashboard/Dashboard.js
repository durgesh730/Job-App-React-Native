import React from 'react'
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CardData } from '../constants';

const Dashboard = () => {
    return (
        <View>
            <View className='text-center items-center py-4 flex justify-end' >
                <Text style={{ fontSize: hp(2) }} >Let’s help you land your dream career</Text>
            </View>

            {/* <View style={{ width: "100%", display: "flex" }} > */}
            {/* <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="space-x-4"
                contentContainerStyle={{ paddingHorizontal: 20 }}
                style={{ height: "10%", width: "100%" }}

            >
                {CardData.map((item, index) => {
                    return (
                        <View key={index}  className="space-y-1" >
                            
                        </View>
                    )
                })
                }
            </ScrollView> */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="space-x-6"
                contentContainerStyle={{ paddingHorizontal: 20 }}
                style={{ width: "100%" }}
            >
                {CardData.map((item, index) => {
                    return (
                        <View key={index}
                            style={{ backgroundColor: "#004985" }} className="flex items-center space-y-1 py-6 px-4 rounded-md" >
                            <Text className="text-neutral-600" style={{ fontSize: hp(1.6), color: "white" }}>  {item.totalApplied}</Text>
                            <Text className="text-neutral-600" style={{ fontSize: hp(1.6), color: "white" }}>  {item.heading}</Text>
                            <Text className="text-neutral-600" style={{ fontSize: hp(1.6), color: "white" }}>  {item.join}</Text>
                            <Text className="text-neutral-600" style={{ fontSize: hp(1.6), color: "white" }}>  {item.Subtitle}</Text>
                        </View>
                    )
                })
                }
            </ScrollView>
            {/* </View> */}

            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
            <Text style={{ fontSize: 20 }} >Dashborad</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // color: "white",
        paddingTop: '3%',
        paddingBottom: '2%',
        paddingLeft: '1%',
        paddingRight: '1%',
        // marginRight: "2",
        borderRadius: 6,
        // fontSize: 20,
        shadowColor: '#888888',
        shadowOffset: { width: 20, height: 5 },
        shadowOpacity: 1,
        shadowRadius: 15,
        // // width: "45%",
        // elevation: 5
    }
})

export default Dashboard
