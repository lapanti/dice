import { configureStore } from '@reduxjs/toolkit'

import diceReducer from './ducks/dice'

export const store = configureStore({
    reducer: {
        dice: diceReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
