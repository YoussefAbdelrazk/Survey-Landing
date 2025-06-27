import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'

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
  SignIn,
  Profile,
} from './pages/index';
import SignUp from './pages/SignUp';

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
        path: '/sign-in',
        element: <SignIn/>
      },
      {
        path: '/sign-up',
        element: <SignUp/>
      },
      {
        path: '/profile',
        element:  <Profile/>
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
      <Toaster />
    </>
  );
}

export default App;
