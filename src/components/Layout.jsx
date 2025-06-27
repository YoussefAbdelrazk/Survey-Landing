import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import Navbar from './Navbar';
import { About, Pricing, Profile, Contact } from '@/pages';
import TemplateGrid from '@/pages/TemplateGrid';
import { Home} from '../pages';
import FAQs from '@/pages/Faqs';


export default function Layout() {
  return (
    <div>
      <Navbar />
      <br/>
      <Outlet/>
      <br/>
      <hr/>
      <Footer />
    </div>
  );
}
