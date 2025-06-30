import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/sign-in", "/sign-up"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black white dark:black"> 
      <Navbar />
      <br />
      <Outlet />
      {/* <br /> */}
      {/* <hr /> */}
      {/* Conditionally render the Footer */}
      {!shouldHideFooter && <Footer />}
    </div>
  );
}
