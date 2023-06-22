import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ErrorCard from '../../components/ErrorCard/ErrorCard'

function Dashboard() {
  return (
  <>
      <ErrorCard/>
      <Footer/>
  </>
  )
}

export default Dashboard