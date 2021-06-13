import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import styled from 'styled-components/native'

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
  const [value, setValue] = useState<number>()

  return (
    <Container>
      <Text>Value: {value}</Text>
      <Footer><Button onPress={() => setValue(Math.floor(Math.random() * 6) + 1)} title="Throw!" accessibilityLabel="Press here to throw the dice"/></Footer>
      <StatusBar style="auto" />
    </Container>
  );
}

export default App
