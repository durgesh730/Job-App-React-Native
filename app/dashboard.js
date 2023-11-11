import React, { useState } from 'react'
import { ScrollView, StatusBar, View } from 'react-native'
import Navbar from '../components/Nabar/Navbar'
import Footer from '../components/Footer/Footer'
import Dashboard from '../components/Dashboard/Dashboard'

const dashboard = () => {

    const [isActive, setIsActive] = useState(1)

    return (
        <View>
            <StatusBar backgroundColor="#1F41BB" barStyle="light-content" />

            {/* topnavbar component */}
            <Navbar />

            {/* dashborad component */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 0 }}
                className='space-y-6 pt-0'
                style={{ height: "81%" }}
            >
                <Dashboard />
            </ScrollView>

            {/* footer component */}
            <Footer isActive={isActive} setIsActive={setIsActive} />
        </View>
    )
}

export default dashboard
