import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { useMediaQuery } from '@mui/material'

function UserProfile() {
  const isDesktop = useMediaQuery('(min-width:1200px)');
  return (
  <>
    <Header />
    <Outlet />
    {isDesktop &&
      <Footer/>
    }
  </>
    
  );
}

export default UserProfile