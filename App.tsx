import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useState } from 'react'
// eslint-disable-next-line
import { Button, Text } from 'react-native'
import styled from 'styled-components/native'

import Dice from './components/Dice'

const Container = styled.View({
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
})

const Footer = styled.View({
    position: 'absolute',
    bottom: 0,
    marginBottom: 32,
    width: 160,
})

const App = () => {
    const [value, setValue] = useState<number>(6)

    const onPress = useCallback(() => {
        setValue(Math.floor(Math.random() * 6) + 1)
    }, [])

    return (
        <Container>
            <Dice value={value} onPress={onPress} />
            <Text>Total value: {value}</Text>
            <Footer>
                <Button accessibilityLabel="Press here to throw the dice" title="Throw!" onPress={onPress} />
            </Footer>
            {/* eslint-disable-next-line react/style-prop-object */}
            <StatusBar style="auto" />
        </Container>
    )
}

export default App
