import React, { useCallback, useState } from 'react'
// eslint-disable-next-line import/namespace,import/named
import { Button, StyleSheet, View } from 'react-native'

import useAppDispatch from '../../hooks/useAppDispatch'
import useInterval from '../../hooks/useInterval'
import useTimeout from '../../hooks/useTimeout'
import { getRandomInt } from '../../lib/number'
import { add, rollAll, startRollingAll, stopRollingAll } from '../../store/ducks/dice'

const styles = StyleSheet.create({
    footer: {
        position: 'absolute',
        bottom: 32,
    },
    buttonContainer: {
        marginTop: 24,
        width: 160,
    },
})

const Footer = (): JSX.Element => {
    const [rolling, setRolling] = useState(false)
    const dispatch = useAppDispatch()

    useInterval(() => {
        dispatch(rollAll())
    }, rolling)

    useTimeout(() => {
        dispatch(stopRollingAll())
        setRolling(false)
    }, rolling)

    const onRoll = useCallback(() => {
        dispatch(startRollingAll())
        setRolling(true)
    }, [dispatch])

    const onAdd = useCallback(() => {
        dispatch(add({ min: 1, max: 6, value: getRandomInt() }))
    }, [dispatch])

    return (
        <View style={styles.footer}>
            <View style={styles.buttonContainer}>
                <Button accessibilityLabel="Press here to throw all the dice" title="Throw all!" onPress={onRoll} />
            </View>
            <View style={styles.buttonContainer}>
                <Button accessibilityLabel="Press here to add a dice" title="Add" onPress={onAdd} />
            </View>
        </View>
    )
}

export default Footer
