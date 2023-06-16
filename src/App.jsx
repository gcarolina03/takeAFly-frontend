import { Grid } from '@mui/material'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Grid container sx={{height:'100vh', width:'100vw'}}>
        <Outlet />
      </Grid>
    </>
  )
}

export default App
