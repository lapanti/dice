import React, { useCallback, useState } from 'react'
// eslint-disable-next-line import/namespace,import/named
import { StyleSheet, View } from 'react-native'
import { IconButton } from 'react-native-paper'

import DiceContainer from './mainView/DiceContainer'
import Footer from './mainView/Footer'
import Settings from './mainView/Settings'

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    settingsIcon: {
        position: 'absolute',
        right: 16,
        top: 16,
        zIndex: 999,
    },
})

const MainView = () => {
    const [settingsVisible, setSettingsVisible] = useState(false)

    const showSettings = useCallback(() => {
        setSettingsVisible(true)
    }, [])

    const hideSettings = useCallback(() => {
        setSettingsVisible(false)
    }, [])

    console.log('settingsVisible', settingsVisible)

    return (
        <View style={styles.container}>
            <IconButton icon="cog" size={32} style={styles.settingsIcon} onPress={showSettings} />
            <Settings hide={hideSettings} visible={settingsVisible} />
            <DiceContainer />
            <Footer />
        </View>
    )
}

export default MainView
