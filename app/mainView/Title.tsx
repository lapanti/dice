import React from 'react'
// eslint-disable-next-line import/namespace,import/named
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import useAppSelector from '../../hooks/useAppSelector'
import { rollingSelector, totalSelector } from '../../store/ducks/dice'

const styles = StyleSheet.create({
    title: {
        position: 'absolute',
        top: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleValue: {
        marginLeft: 8,
        minWidth: 32,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    titleText: {
        fontSize: 24,
    },
})

const Title = (): JSX.Element => {
    const rolling = useAppSelector(rollingSelector)
    const total = useAppSelector(totalSelector)

    return (
        <View style={styles.title}>
            <Text style={styles.titleText}>Total value:</Text>
            {rolling ? (
                <ActivityIndicator color="black" style={styles.titleValue} />
            ) : (
                <View style={styles.titleValue}>
                    <Text style={styles.titleText}>{total}</Text>
                </View>
            )}
        </View>
    )
}

export default Title
