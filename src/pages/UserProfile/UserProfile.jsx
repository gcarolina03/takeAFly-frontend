import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

function UserProfile() {
  return (
  <>
    <Header />
    <Outlet />
  </>
    
  );
}

export default UserProfile