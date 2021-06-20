import type { Color } from './colors'

export interface Dice {
    readonly color: Color
    readonly min: number
    readonly max: number
    rolling: boolean
    value: number
}
