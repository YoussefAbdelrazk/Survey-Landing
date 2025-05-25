import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from './components/Layout';
import {
  About,
  Contact,
  CreatePassword,
  FAQS,
  ForgetPassword,
  Home,
  Pricing,
  VerifyPassword,
} from './pages/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/faqs',
        element: <FAQS />,
      },
      {
        path: '/create-password',
        element: <CreatePassword />,
      },
      {
        path: '/verify-password',
        element: <VerifyPassword />,
      },
      {
        path: '/forget-password',
        element: <ForgetPassword />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
