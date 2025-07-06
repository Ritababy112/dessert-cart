import Header from '../components/header/index';
import { Outlet } from 'react-router-dom';

const Layout = ({ setSearchTerm }) => {
  return (
    <>
      <Header setSearchTerm={setSearchTerm}  />
      <Outlet />
    </>
  );
};

export default Layout;
