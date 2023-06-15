import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import { router } from './router/index.jsx'

import { ThemeProvider } from '@mui/material/styles'
import theme from './assets/themes/custom'

import './index.css'
import './assets/fonts/roboto.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
