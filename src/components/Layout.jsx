import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import Navbar from './Navbar';
import { About, Profile } from '@/pages';
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
