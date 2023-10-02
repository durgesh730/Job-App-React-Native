import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native'
import { View } from 'react-native'
import { Bars3BottomRightIcon, BugAntIcon, HandThumbUpIcon, HomeIcon } from 'react-native-heroicons/outline'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Footer = ({ isActive, setIsActive }) => {
    const navigation = useNavigation()

    const handleHomeTab = (num) => {
        navigation.navigate('dashboard')
    }

    const handleInternshipTag = (num) => {
        navigation.navigate('internship')
    }

    const handleJobTag = (num) => {
        navigation.navigate('job')

    }
    const handleNavigate = (num) => {
        navigation.navigate('account')
    }

    return (
        <View
            style={{
                backgroundColor: "white",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 8,
                paddingRight: 20,
                paddingLeft: 20
            }}
        >
            <View
                style={{
                    backgroundColor: isActive === 1 ? "#F1F4FF" : "",
                    borderRadius: hp(3.5),
                    paddingTop: 8,
                    paddingRight: 18,
                    paddingBottom: 8,
                    paddingLeft: 18,
                    alignItems: 'center'
                }}
            >
                <HomeIcon
                    onPress={() => handleHomeTab(1)}
                    size={hp(3.5)}
                    strokeWidth={1}
                    color="#1F41BB"
                />
                <Text onPress={() => handleHomeTab(1)} >Home</Text>
            </View>

            <View
                style={{
                    backgroundColor: isActive === 2 ? "#F1F4FF" : "",
                    borderRadius: hp(10),
                    paddingTop: 8,
                    paddingRight: 18,
                    paddingBottom: 8,
                    paddingLeft: 18,
                    alignItems: 'center'
                }}
                className='text-center items-center' >
                <BugAntIcon onPress={() => handleInternshipTag(2)} size={hp(3.5)} strokeWidth={1} color="#1F41BB" />
                <Text onPress={() => handleInternshipTag(2)} >Internship</Text>
            </View>

            <View
                style={{
                    backgroundColor: isActive === 3 ? "#F1F4FF" : "",
                    borderRadius: hp(3.5),
                    paddingTop: 8,
                    paddingRight: 18,
                    paddingBottom: 8,
                    paddingLeft: 18,
                    alignItems: 'center'
                }}
                className='text-center items-center' >
                <Bars3BottomRightIcon onPress={() => handleJobTag(3)} size={hp(3.5)} strokeWidth={1} color="#1F41BB" />
                <Text onPress={() => handleJobTag(3)} >Jobs</Text>
            </View>

            <View
                style={{
                    backgroundColor: isActive === 4 ? "#F1F4FF" : "",
                    borderRadius: hp(3.5),
                    paddingTop: 8,
                    paddingRight: 18,
                    paddingBottom: 8,
                    paddingLeft: 18,
                    alignItems: 'center'
                }}
                className='text-center items-center' >
                <HandThumbUpIcon onPress={() => handleNavigate(4)} size={hp(3.5)} strokeWidth={1} color="#1F41BB" />
                <Text onPress={() => handleNavigate(4)} >Account</Text>
            </View>
        </View>
    )
}

export default Footer
