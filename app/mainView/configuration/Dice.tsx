import type { Dice as DiceType } from '../../../types/dice'

import React, { useCallback } from 'react'
// eslint-disable-next-line import/namespace,import/named
import { StyleSheet } from 'react-native'
import { IconButton, Surface, TextInput, Title } from 'react-native-paper'

import useAppDispatch from '../../../hooks/useAppDispatch'
import { remove } from '../../../store/ducks/dice'

const styles = StyleSheet.create({
    surface: {
        elevation: 1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start',
        marginTop: 16,
        paddingBottom: 16,
    },
    maxInput: {
        width: 72,
        textAlign: 'right',
        marginLeft: 32,
    },
    delete: {
        marginLeft: 'auto',
    },
})

interface Props {
    dice: DiceType
    index: number
}

const Dice = ({ dice, index }: Props): JSX.Element => {
    const dispatch = useAppDispatch()

    const onChangeSides = useCallback(() => undefined, [])

    const onDelete = useCallback(() => {
        dispatch(remove(index))
    }, [dispatch, index])

    console.log('dice', dice, 'index', index)
    return (
        <Surface style={styles.surface}>
            <Title>{index + 1}</Title>
            <TextInput
                keyboardType="numeric"
                label="Sides"
                mode="outlined"
                style={styles.maxInput}
                value={`${dice.max}`}
                onChangeText={onChangeSides}
            />
            <IconButton icon="delete" style={styles.delete} onPress={onDelete} />
        </Surface>
    )
}

export default Dice
