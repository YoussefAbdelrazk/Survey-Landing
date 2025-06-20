import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Home from '../pages/Home';
import { About } from '@/pages';
import TemplateGrid from '@/pages/TemplateGrid';
import { Home} from '../pages';

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <TemplateGrid/>
      <Footer />
    </div>
  );
}
