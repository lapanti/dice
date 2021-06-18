import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

import { createSlice } from '@reduxjs/toolkit'

import { clamp, getRandomInt } from '../../lib/number'

interface Dice {
    readonly min: number
    readonly max: number
    rolling: boolean
    value: number
}

interface DiceState {
    dice: Dice[]
}

const initialD6: Dice = {
    min: 1,
    max: 6,
    rolling: false,
    value: getRandomInt(),
}

const initialState: DiceState = {
    dice: [initialD6],
}

export const diceSlice = createSlice({
    name: 'dice',
    initialState,
    reducers: {
        add: (state, { payload: { min, max, value } }: PayloadAction<{ min: number; max: number; value: number }>) => {
            state.dice.push({ min, max, rolling: false, value: clamp(value, min, max) })
        },
        roll: (state, { payload: { index, value } }: PayloadAction<{ index: number; value: number }>) => {
            state.dice[index].value = clamp(value, state.dice[index].min, state.dice[index].max)
        },
    },
})

export const { add, roll } = diceSlice.actions

export const getDiceSelector = (index: number) => (state: RootState) =>
    state.dice.dice.length > index ? state.dice.dice[index] : undefined

export default diceSlice.reducer
