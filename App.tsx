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
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <MainView />
                {/* eslint-disable-next-line react/style-prop-object */}
                <StatusBar style="auto" />
            </PaperProvider>
        </Provider>
    )
}

export default App
