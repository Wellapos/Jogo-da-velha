import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { Router } from './Router'

import { Provider } from './contexts'
import { GlobalStyle, theme } from './styles'
// import AdComponent from './ads/top'

export const App: React.FC = () => {
  console.log('hm')
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
        {/* <AdComponent /> */}
        <Router />
      </ThemeProvider>
    </Provider>
  )
}
