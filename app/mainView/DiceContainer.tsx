import React from 'react'
// eslint-disable-next-line import/namespace,import/named
import { ScrollView, StyleSheet } from 'react-native'

import useAppSelector from '../../hooks/useAppSelector'
import { allDiceSelector } from '../../store/ducks/dice'
import Dice from './diceContainer/Dice'

const styles = StyleSheet.create({
    scrollView: {
        marginTop: 106,
        marginBottom: 160,
    },
    container: {
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const DiceContainer = () => {
    const allDice = useAppSelector(allDiceSelector)

    return (
        <ScrollView contentContainerStyle={styles.container} style={styles.scrollView}>
            {allDice.map((dice, i) => (
                <Dice key={i} dice={dice} index={i} />
            ))}
        </ScrollView>
    )
}

export default DiceContainer
