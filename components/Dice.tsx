import React from 'react'
// eslint-disable-next-line import/namespace,import/named
import { Animated, StyleSheet, TouchableOpacity } from 'react-native'

import useAnimatedOpacity from '../hooks/useAnimatedOpacity'
import useAppSelector from '../hooks/useAppSelector'
import { getDiceSelector } from '../store/ducks/dice'

const top = 25
const right = top
const bottom = right
const left = bottom

const marginTop = -10
const marginRight = marginTop
const marginBottom = marginRight
const marginLeft = marginBottom

const styles = StyleSheet.create({
    die: {
        height: 120,
        width: 120,
        borderRadius: 10,
        border: `4px solid black`,
    },
    dot: {
        position: 'absolute',
        backgroundColor: 'black',
        borderRadius: 50,
        height: 20,
        width: 20,
    },
    topLeftDot: {
        top,
        left,
        marginLeft,
        marginTop,
    },
    middleLeftDot: {
        top: '50%',
        left,
        marginLeft,
        marginTop,
    },
    bottomLeftDot: {
        bottom,
        left,
        marginLeft,
        marginBottom,
    },
    middleDot: {
        top: '50%',
        left: '50%',
        marginLeft,
        marginTop,
    },
    topRightDot: {
        top,
        right,
        marginRight,
        marginTop,
    },
    middleRightDot: {
        top: '50%',
        right,
        marginRight,
        marginTop,
    },
    bottomRightDot: {
        bottom,
        right,
        marginRight,
        marginBottom,
    },
})

const topLeftValues = [3, 4, 5, 6]
const middleLeftValues = [2, 6]
const bottomLeftValues = [4, 5, 6]
const middleValues = [1, 3, 5]
const topRightValues = [4, 5, 6]
const middleRightValues = [2, 6]
const bottomRightValues = [3, 4, 5, 6]

interface Props {
    index: number
    onPress: () => void
}

const Dice = ({ index, onPress }: Props): JSX.Element | null => {
    const dice = useAppSelector(getDiceSelector(index))

    const value = dice?.value ?? 0

    const fadeTopLeft = useAnimatedOpacity(topLeftValues, value)
    const fadeMiddleLeft = useAnimatedOpacity(middleLeftValues, value)
    const fadeBottomLeft = useAnimatedOpacity(bottomLeftValues, value)
    const fadeMiddle = useAnimatedOpacity(middleValues, value)
    const fadeTopRight = useAnimatedOpacity(topRightValues, value)
    const fadeMiddleRight = useAnimatedOpacity(middleRightValues, value)
    const fadeBottomRight = useAnimatedOpacity(bottomRightValues, value)

    return dice ? (
        <TouchableOpacity style={styles.die} onPress={onPress}>
            <Animated.View style={[styles.dot, styles.topLeftDot, { opacity: fadeTopLeft }]} />
            <Animated.View style={[styles.dot, styles.middleLeftDot, { opacity: fadeMiddleLeft }]} />
            <Animated.View style={[styles.dot, styles.bottomLeftDot, { opacity: fadeBottomLeft }]} />
            <Animated.View style={[styles.dot, styles.middleDot, { opacity: fadeMiddle }]} />
            <Animated.View style={[styles.dot, styles.topRightDot, { opacity: fadeTopRight }]} />
            <Animated.View style={[styles.dot, styles.middleRightDot, { opacity: fadeMiddleRight }]} />
            <Animated.View style={[styles.dot, styles.bottomRightDot, { opacity: fadeBottomRight }]} />
        </TouchableOpacity>
    ) : null
}

export default Dice
