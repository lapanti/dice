import React from 'react'
// eslint-disable-next-line import/namespace,import/named
import { StyleSheet, View } from 'react-native'
import { ActivityIndicator, Text, Title } from 'react-native-paper'

import useAppSelector from '../../../hooks/useAppSelector'
import { rollingSelector, totalSelector } from '../../../store/ducks/dice'

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
    },
    value: {
        marginLeft: 8,
        minWidth: 32,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    text: {
        fontSize: 24,
    },
})

const Total = (): JSX.Element => {
    const rolling = useAppSelector(rollingSelector)
    const total = useAppSelector(totalSelector)

    return (
        <View style={styles.view}>
            <Title style={styles.text}>Total value:</Title>
            {rolling ? (
                <ActivityIndicator color="black" style={styles.value} />
            ) : (
                <View style={styles.value}>
                    <Text style={styles.text}>{total}</Text>
                </View>
            )}
        </View>
    )
}

export default Total
