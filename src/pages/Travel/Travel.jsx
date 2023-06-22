import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function Travel() {

  return (
  <>
      <Header/>
      <Outlet /> 
  </>
  )
}

export default Travel