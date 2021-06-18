import React, { useCallback, useState } from 'react'
// eslint-disable-next-line import/namespace,import/named
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'

import Dice from '../components/Dice'
import useAppDispatch from '../hooks/useAppDispatch'
import useAppSelector from '../hooks/useAppSelector'
import useInterval from '../hooks/useInterval'
import useTimeout from '../hooks/useTimeout'
import { getRandomInt } from '../lib/number'
import { getDiceSelector, roll } from '../store/ducks/dice'

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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleValue: {
        marginLeft: 4,
        width: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 24,
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
    const dice = useAppSelector(getDiceSelector(0))
    const [rolling, setRolling] = useState(false)
    const dispatch = useAppDispatch()

    useInterval(
        () => {
            dispatch(roll({ index: 0, value: getRandomInt() }))
        },
        rolling ? delay : null
    )

    useTimeout(
        () => {
            setRolling(false)
        },
        rolling ? totalDelay : null
    )

    const onPress = useCallback(() => {
        setRolling(true)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Total value:</Text>
                {rolling ? (
                    <ActivityIndicator color="black" style={styles.titleValue} />
                ) : (
                    <View style={styles.titleValue}>
                        <Text style={styles.titleText}>{dice?.value}</Text>
                    </View>
                )}
            </View>
            <Dice index={0} onPress={onPress} />
            <View style={styles.footer}>
                <Button accessibilityLabel="Press here to throw all the dice" title="Throw all!" onPress={onPress} />
            </View>
        </View>
    )
}

export default MainView
