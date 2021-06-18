import React, { useCallback } from 'react'
// eslint-disable-next-line import/namespace,import/named
import { Button, StyleSheet, View } from 'react-native'

import Dice from '../components/Dice'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import useInterval from '../hooks/useInterval'
import useTimeout from '../hooks/useTimeout'
import { roll, rollingSelector, startRolling, stopRolling } from '../store/ducks/dice'
import Title from './mainView/Title'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    footer: {
        position: 'absolute',
        bottom: 32,
        width: 160,
    },
})

const delay = 100
const totalDelay = delay * 10

const MainView = () => {
    const rolling = useAppSelector(rollingSelector)
    const dispatch = useAppDispatch()

    useInterval(
        () => {
            dispatch(roll(0))
        },
        rolling ? delay : null
    )

    useTimeout(
        () => {
            dispatch(stopRolling(0))
        },
        rolling ? totalDelay : null
    )

    const onPress = useCallback(() => {
        dispatch(startRolling(0))
    }, [dispatch])

    return (
        <View style={styles.container}>
            <Title />
            <Dice index={0} onPress={onPress} />
            <View style={styles.footer}>
                <Button accessibilityLabel="Press here to throw all the dice" title="Throw all!" onPress={onPress} />
            </View>
        </View>
    )
}

export default MainView
