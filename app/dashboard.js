import React, { useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import Navbar from '../components/Nabar/Navbar'
import Footer from '../components/Footer/Footer'

const dashboard = () => {

    const [isActive, setIsActive] = useState(1)

    return (
        <View>
            <StatusBar backgroundColor="#1F41BB" barStyle="light-content" />

            {/* topnavbar component */}
            <Navbar/>

            {/* footer component */}
            <Footer isActive={isActive} setIsActive={setIsActive} />
        </View>
    )
}

export default dashboard
