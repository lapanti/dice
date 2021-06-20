import type { PayloadAction } from '@reduxjs/toolkit'
import type { Dice } from '../../types/dice'
import type { RootState } from '../store'

import { createSlice } from '@reduxjs/toolkit'

import { getRandomInt } from '../../lib/number'

interface DiceState {
    dice: Dice[]
}

const initialD6: Dice = {
    color: 'white',
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
        add: (state, { payload }: PayloadAction<Partial<Dice>>) => {
            state.dice.push({
                ...initialD6,
                ...payload,
                value: getRandomInt(payload?.min ?? initialD6.min, payload?.max ?? initialD6.max),
            })
        },
        startRolling: (state, { payload: index }: PayloadAction<number>) => {
            state.dice[index].rolling = true
        },
        stopRolling: (state, { payload: index }: PayloadAction<number>) => {
            state.dice[index].rolling = false
        },
        roll: (state, { payload: index }: PayloadAction<number>) => {
            state.dice[index].value = getRandomInt(state.dice[index].min, state.dice[index].max)
        },
        startRollingAll: (state) => {
            state.dice.forEach((dice) => (dice.rolling = true))
        },
        stopRollingAll: (state) => {
            state.dice.forEach((dice) => (dice.rolling = false))
        },
        rollAll: (state) => {
            state.dice.forEach((dice) => (dice.value = getRandomInt(dice.min, dice.max)))
        },
    },
})

export const { add, startRolling, stopRolling, roll, startRollingAll, stopRollingAll, rollAll } = diceSlice.actions

export const allDiceSelector = (state: RootState) => state.dice.dice

export const getDiceSelector = (index: number) => (state: RootState) =>
    state.dice.dice.length > index ? state.dice.dice[index] : undefined

export const rollingSelector = (state: RootState) => state.dice.dice.some(({ rolling }) => rolling)

export const totalSelector = (state: RootState) => state.dice.dice.reduce((acc, { value }) => acc + value, 0)

export default diceSlice.reducer
