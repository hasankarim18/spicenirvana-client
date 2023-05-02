
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import App from '../App';

const MainLayout = () => {
    return (
      <>
        <Header />
        <div>
          <Outlet />
        </div>
        <App/>
        <Footer />
      </>
    );
};

export default MainLayout;