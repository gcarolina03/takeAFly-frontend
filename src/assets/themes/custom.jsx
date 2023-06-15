import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      light: '#23cf9c',
      main: '#1a936f',
      dark: '#13694f',
      contrastText: '#fff'
    },
    secondary: {
        light: '#6d7875',
        main: '#484d4b',
        dark: '#2b2e2d',
    },
  }
})

export default theme