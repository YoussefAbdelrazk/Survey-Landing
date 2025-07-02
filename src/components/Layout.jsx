import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
  const location = useLocation();
  const hideFooterRoutes = ["/sign-in", "/sign-up"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black">
      <Navbar />
      <div className="flex-1 pt-18">
        <Outlet />
      </div>
      {!shouldHideFooter && <Footer />}
    </div>
  );
}
