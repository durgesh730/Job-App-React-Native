import React from 'react'
import {
  SafeAreaView,
  Image,
  TextInput,
  Text,
  View
}
  from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Bars3Icon } from 'react-native-heroicons/outline'


const Navbar = ({ title }) => {
  return (
    <SafeAreaView  >

      <View className="mx-4 py-3 flex-row justify-between items-center mb-2" >

        <View className="flex-row justify-start items-center gap-4" >
          <Bars3Icon strokeWidth={1} color="black" />
          <Text style={{ fontSize: hp(3) }} className='text-neutral-600' >{title}</Text>
        </View>

        <View className="flex-row justify-between items-center gap-2 " >
          <Text style={{ fontSize: hp(2.4) }} className='text-neutral-600' > Hii Durgesh </Text>
          <Image source={require('../../assets/images/avatar.png')}
            style={{ width: hp(5), height: hp(5.5) }}
          />
        </View>
      </View>

    </SafeAreaView>
  )
}

export default Navbar
