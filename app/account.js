import React, { useState } from 'react'
import { Text, View } from 'react-native'
import Navbar from '../components/Nabar/Navbar'
import Footer from '../components/Footer/Footer'

const account = () => {

    const [isActive, setIsActive] = useState(4)

    return (
        <View>
            <Navbar />

            <Text>
                Account
            </Text>

            <Footer isActive={isActive} setIsActive={setIsActive} />
        </View>
    )
}

export default account
