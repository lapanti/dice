import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'

import MainView from './app/MainView'
import { store } from './store/store'

const theme = {
    ...DefaultTheme,
}

const App = () => {
    return (
        <PaperProvider theme={theme}>
            <Provider store={store}>
                <MainView />
                {/* eslint-disable-next-line react/style-prop-object */}
                <StatusBar style="auto" />
            </Provider>
        </PaperProvider>
    )
}

export default App
