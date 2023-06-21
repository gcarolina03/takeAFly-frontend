import { Outlet } from 'react-router-dom'

import { Grid } from '@mui/material'

import Header from './components/Header/Header'
import { useEffect } from 'react';

import './App.css'

function App() {


  return (
    <>
      <Grid container sx={{height:'100vh', width:'100vw'}}>
        <Outlet />
      </Grid>
      {/* <Header/> */}
    </>
  )
}

export default App
