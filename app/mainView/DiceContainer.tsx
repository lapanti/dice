import React from 'react'
// eslint-disable-next-line import/namespace,import/named
import { Dimensions, ScrollView, StyleSheet } from 'react-native'
import { Surface } from 'react-native-paper'

import useAppSelector from '../../hooks/useAppSelector'
import { allDiceSelector } from '../../store/ducks/dice'
import Dice from './diceContainer/Dice'

const styles = StyleSheet.create({
    surface: {
        flexGrow: 1,
        width: '100%',
        elevation: 2,
    },
    scrollView: {
        marginTop: 64,
    },
    container: {
        height: Dimensions.get('window').height - 186 - 64,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const DiceContainer = () => {
    const allDice = useAppSelector(allDiceSelector)

    return (
        <Surface style={styles.surface}>
            <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
                {allDice.map((dice, i) => (
                    <Dice key={i} dice={dice} index={i} />
                ))}
            </ScrollView>
        </Surface>
    )
}

export default DiceContainer
