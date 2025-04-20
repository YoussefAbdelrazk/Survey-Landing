import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, About, Contact, Pricing, FAQS, Features } from './pages/index';

const router = createBrowserRouter([
  {
    path: '/',
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
    path: '/features',
    element: <Features />,
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
