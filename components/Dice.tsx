import React from 'react'
import styled from 'styled-components/native'

const Die = styled.TouchableOpacity({
    height: 120,
    width: 120,
    borderRadius: 4,
    border: `4px solid black`,
})

const Dot = styled.View({
    position: 'absolute',
    background: 'black',
    borderRadius: '50%',
    height: 20,
    width: 20,
})

const top = 25
const right = top
const bottom = right
const left = bottom

const marginTop = -10
const marginRight = marginTop
const marginBottom = marginRight
const marginLeft = marginBottom

const topLeftValues = [3, 4, 5, 6]
const TopLeftDot = styled(Dot)({
    top,
    left,
    marginLeft,
    marginTop,
})

const middleLeftValues = [2, 6]
const MiddleLeftDot = styled(Dot)({
    top: '50%',
    left,
    marginLeft,
    marginTop,
})

const bottomLeftValues = [4, 5, 6]
const BottomLeftDot = styled(Dot)({
    bottom,
    left,
    marginLeft,
    marginBottom,
})

const middleValues = [1, 3, 5]
const MiddleDot = styled(Dot)({
    top: '50%',
    left: '50%',
    marginLeft,
    marginTop,
})

const topRightValues = [4, 5, 6]
const TopRightDot = styled(Dot)({
    top,
    right,
    marginRight,
    marginTop,
})

const middleRightValues = [2, 6]
const MiddleRightDot = styled(Dot)({
    top: '50%',
    right,
    marginRight,
    marginTop,
})

const bottomRightValues = [3, 4, 5, 6]
const BottomRightDot = styled(Dot)({
    bottom,
    right,
    marginRight,
    marginBottom,
})

interface Props {
    value: number
    onPress: () => void
}

const Dice = ({ value, onPress }: Props): JSX.Element => {
    return (
        <Die onPress={onPress}>
            {topLeftValues.includes(value) && <TopLeftDot />}
            {middleLeftValues.includes(value) && <MiddleLeftDot />}
            {bottomLeftValues.includes(value) && <BottomLeftDot />}
            {middleValues.includes(value) && <MiddleDot />}
            {topRightValues.includes(value) && <TopRightDot />}
            {middleRightValues.includes(value) && <MiddleRightDot />}
            {bottomRightValues.includes(value) && <BottomRightDot />}
        </Die>
    )
}

export default Dice
