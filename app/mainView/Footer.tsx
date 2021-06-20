import React, { useCallback, useState } from 'react'
// eslint-disable-next-line import/namespace,import/named
import { StyleSheet, View } from 'react-native'
import { Button } from 'react-native-paper'

import useAppDispatch from '../../hooks/useAppDispatch'
import useInterval from '../../hooks/useInterval'
import useTimeout from '../../hooks/useTimeout'
import { rollAll, startRollingAll, stopRollingAll } from '../../store/ducks/dice'
import Total from './footer/Total'

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonContainer: {
        marginTop: 24,
        width: 160,
    },
})

const Footer = (): JSX.Element => {
    const [stateRolling, setStateRolling] = useState(false)
    const dispatch = useAppDispatch()

    useInterval(() => {
        dispatch(rollAll())
    }, stateRolling)

    useTimeout(() => {
        dispatch(stopRollingAll())
        setStateRolling(false)
    }, stateRolling)

    const onRoll = useCallback(() => {
        dispatch(startRollingAll())
        setStateRolling(true)
    }, [dispatch])

    return (
        <View style={styles.footer}>
            <Total />
            <View style={styles.buttonContainer}>
                <Button
                    accessibilityLabel="Press here to throw all the dice"
                    loading={stateRolling}
                    mode="contained"
                    onPress={onRoll}
                >
                    Throw all!
                </Button>
            </View>
        </View>
    )
}

export default Footer
