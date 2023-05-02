
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const MainLayout = () => {
    return (
      <>
        <Header />
        <div>
          <Outlet />
        </div>
        <Footer />
      </>
    );
};

export default MainLayout;