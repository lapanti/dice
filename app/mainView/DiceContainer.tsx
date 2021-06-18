import React from 'react'
// eslint-disable-next-line import/namespace,import/named
import { StyleSheet, View } from 'react-native'

import useAppSelector from '../../hooks/useAppSelector'
import { allDiceSelector } from '../../store/ducks/dice'
import Dice from './diceContainer/Dice'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const DiceContainer = () => {
    const allDice = useAppSelector(allDiceSelector)

    return (
        <View style={styles.container}>
            {allDice.map((dice, i) => (
                <Dice key={i} dice={dice} index={i} />
            ))}
        </View>
    )
}

export default DiceContainer
