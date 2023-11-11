import { View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native'
import { JobData } from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CalendarIcon, ClockIcon, CurrencyRupeeIcon, MapPinIcon, PlayCircleIcon } from 'react-native-heroicons/outline';

const Card = () => {
    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "#F0F0F0", paddingBottom: '0%' }} >

                {JobData.map((item, index) => {
                    return (
                        <View style={{ backgroundColor: "white" }} key={index} className="px-4 py-4 my-2" >
                            <View className=" py-4 flex-row justify-between items-center" >
                                <View>
                                    <Text style={{ fontSize: hp(2.6)}}>{item.Job} </Text>
                                    <Text style={{ fontSize: hp(1.8), color: "#919391" }}>{item.company} </Text>
                                </View>
                                <Image
                                    source={{ uri: item.logo }}
                                    style={{ width: hp(5), height: hp(5.5) }}
                                />
                            </View>

                            <View className="py-1 flex-row justify-start items-center gap-1" >
                                <MapPinIcon size={hp(2.3)} strokeWidth={1.5} color="#919391" />
                                <Text style={{ fontSize: hp(1.7),}} className='text-neutral-600' >{item.type}</Text>
                            </View>

                            <View className="py-2 flex-row justify-start items-center gap-2" >
                                <View className="flex-row justify-start items-center" >
                                    <PlayCircleIcon size={hp(2.3)} strokeWidth={1.5} color="#919391" />
                                    <Text style={{ fontSize: hp(1.7) }} className='text-neutral-600 px-1'>{item.joining}</Text>
                                </View>

                                <View className="flex-row justify-start items-center gap-2 " >
                                    <CalendarIcon size={hp(2.3)} strokeWidth={1.5} color="#919391" />
                                    <Text style={{ fontSize: hp(1.7)}} className='text-neutral-600'>{item.duration}</Text>
                                </View>
                            </View>

                            <View className="py-2 flex-row justify-start items-center gap-2 " >
                                <CurrencyRupeeIcon size={hp(2.3)} strokeWidth={1.5} color="#919391" />
                                <Text style={{ fontSize: hp(1.7) }} className='text-neutral-600' >₹ {item.stipend}</Text>
                            </View>

                            <View className="py-2 flex-row justify-start items-center gap-2" >
                                <ClockIcon size={hp(2.3)} strokeWidth={1.5} color="#1F41BB" />
                                <Text style={{ fontSize: hp(1.7), color: "#1F41BB" }} >{item.postedDate}</Text>
                            </View>

                            <View style={{ height: 1, backgroundColor: '#EEEEEE', marginBottom: 1, marginTop: 2 }} />

                            <View style={{ flexDirection: 'row', justifyContent: "flex-end", gap: 15, alignItems: 'center', paddingVertical: 8 }}>
                                <TouchableOpacity
                                    style={{ backgroundColor: "#F8F9FF", padding: 10, borderRadius: 5 }}
                                    onPress={() => {/* handle press */ }}
                                >
                                    <Text style={{ color: 'black' }}>View details</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ backgroundColor: "#1F41BB", paddingLeft: 20, paddingTop: 7, paddingBottom: 7, paddingRight: 20, borderRadius: 5 }}
                                    onPress={() => {/* handle press */ }}
                                >
                                    <Text style={{ color: 'white'}}>Apply now</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    )
                })
                }
            </View>
        </SafeAreaView>
    )
}

export default Card
