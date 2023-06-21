import { Outlet } from 'react-router-dom'

import { Grid } from '@mui/material'

import Header from './components/Header/Header'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import './App.css'

function App() {
  const location = useLocation();
  
 useEffect(() => {
  // Save the current pathname in session storage
    sessionStorage.setItem('previousPathname', location.pathname);
  }, [location.pathname]);

  return (
    <>
     
        <Outlet />
  
      {/* <Header/> */}
    </>
  )
}

export default App
