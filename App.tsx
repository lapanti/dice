import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Provider } from 'react-redux'

import MainView from './app/MainView'
import { store } from './store/store'

const App = () => {
    return (
        <Provider store={store}>
            <MainView />
            {/* eslint-disable-next-line react/style-prop-object */}
            <StatusBar style="auto" />
        </Provider>
    )
}

export default App
