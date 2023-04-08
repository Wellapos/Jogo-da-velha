import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { Router } from './Router'

import { Provider } from './contexts'
import { GlobalStyle, theme } from './styles'
import Banner from './Ads/top'
import { useMediaQuery } from '@mui/material'

export const App: React.FC = () => {
  const largeScreen = useMediaQuery('(min-width: 600px)')
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position='top-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='light'
        />

        <GlobalStyle />
        <Banner largeScreen={largeScreen} />
        <Router />
        <div id='container-b331aae0e506ccb306be0c4131cca071'></div>
      </ThemeProvider>
    </Provider>
  )
}
