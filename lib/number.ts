export const getRandomInt = (min = 1, max = 6) => Math.floor(Math.random() * max) + min

export const clamp = (value: number, min: number, max: number): number => Math.max(Math.min(value, max), min)
