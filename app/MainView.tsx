import React from 'react'
// eslint-disable-next-line import/namespace,import/named
import { StyleSheet, View } from 'react-native'

import DiceContainer from './mainView/DiceContainer'
import Footer from './mainView/Footer'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
})

const MainView = () => (
    <View style={styles.container}>
        <DiceContainer />
        <Footer />
    </View>
)

export default MainView
