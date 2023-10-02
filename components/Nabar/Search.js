import {
    TextInput,
    View
}
    from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline'

const Search = () => {
    return (
        <View className='mx-4 mb-2 flex-row items-center rounded-full bg-black/5 p-[5px]' >
            <TextInput
                placeholder='Search Jobs'
                placeholderTextColor={'grey'}
                style={{ fontSize: hp(2) }}
                className='flex-1 text-base mb-1 pl-3 tracking-wider'
            />

            <View className="bg-white rounded-full p-3" >
                <MagnifyingGlassIcon size={hp(2)} strokeWidth={3} color='grey' />
            </View>
        </View>
    )
}

export default Search
