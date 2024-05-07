import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';

function Layout() {
  return (
    <div>
      <Navbar/>
      <main>
        <Outlet/>
      </main>
      {/* <Footer/> */}
    </div>
  );
}

export default Layout