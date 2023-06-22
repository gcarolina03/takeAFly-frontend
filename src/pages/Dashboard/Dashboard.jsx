import { useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Dashboard() {
  const isDesktop = useMediaQuery('(min-width:1200px)');

  return (
  <>
      <Header/>
      <Outlet /> 
      {isDesktop &&
        <Footer/>
      }
  </>
  )
}

export default Dashboard