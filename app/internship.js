import React, { useState } from 'react'
import { ScrollView, View, StatusBar } from 'react-native'
import Navbar from '../components/Nabar/Navbar'
import Footer from '../components/Footer/Footer'
import Search from '../components/Nabar/Search'
import Card from '../components/Card/Card'

const internship = () => {

    const [isActive, setIsActive] = useState(2)

    return (
        <View>
            <StatusBar backgroundColor="#1F41BB" barStyle="light-content" />

            {/* topnavbar component */}
            <Navbar title={"Internships"} />

            {/* search tab */}
            <Search />

            {/* cards */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 0 }}
                className='space-y-6 pt-0'
                style={{ height: "74%" }}
            >
                <Card />
            </ScrollView>

            {/* footer component */}
            <Footer isActive={isActive} setIsActive={setIsActive} />
        </View>
    )
}

export default internship
