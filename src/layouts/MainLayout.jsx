import { Outlet } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';

function MainLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MobileMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
