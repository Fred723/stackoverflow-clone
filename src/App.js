import React from 'react'
import * as serviceWorker from './serviceWorker'
import Routes from './config/routes'
import { ThemeProvider } from 'styled-components'



import theme from './config/theme'

import './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

serviceWorker.register()

export default App
