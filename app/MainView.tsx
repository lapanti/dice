import React from 'react'
// eslint-disable-next-line import/namespace,import/named
import { StyleSheet, View } from 'react-native'

import DiceContainer from './mainView/DiceContainer'
import Footer from './mainView/Footer'
import Title from './mainView/Title'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const MainView = () => (
    <View style={styles.container}>
        <Title />
        <DiceContainer />
        <Footer />
    </View>
)

export default MainView
