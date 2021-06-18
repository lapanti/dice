import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useState } from 'react'
// eslint-disable-next-line import/namespace,import/named
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'

import Dice from './components/Dice'
import useInterval from './hooks/useInterval'
import useTimeout from './hooks/useTimeout'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        position: 'absolute',
        top: 32,
        fontSize: 24,
    },
    footer: {
        position: 'absolute',
        bottom: 32,
        width: 160,
    },
})

const delay = 100

const App = () => {
    const [value, setValue] = useState<number>(5)
    const [rolling, setRolling] = useState(false)

    useInterval(
        () => {
            setValue(Math.floor(Math.random() * 6) + 1)
        },
        rolling ? delay : null
    )

    useTimeout(
        () => {
            setRolling(false)
        },
        rolling ? 1000 : null
    )

    const onPress = useCallback(() => {
        setRolling(true)
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Total value: {rolling ? <ActivityIndicator color="black" /> : value}</Text>
            <Dice value={value} onPress={onPress} />
            <View style={styles.footer}>
                <Button accessibilityLabel="Press here to throw the dice" title="Throw!" onPress={onPress} />
            </View>
            {/* eslint-disable-next-line react/style-prop-object */}
            <StatusBar style="auto" />
        </View>
    )
}

export default App
