import { useState } from "react";
import {
  FaArrowLeft,
  FaBars,
  FaBell,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { GrHistory } from "react-icons/gr";
import { LuChartColumn, LuLayoutDashboard } from "react-icons/lu";
import { MdTune } from "react-icons/md";

export default function Dashboard() {
  const [active, setActive] = useState("/profile");
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    {
      href: "/profile",
      label: "Edit Profile",
      icon: <GoPerson className="w-5 h-5" />,
    },
    {
      href: "/history",
      label: "Survey History",
      icon: <GrHistory className="w-5 h-5" />,
    },
    {
      href: "/survey",
      label: "Saved Surveys",
      icon: <LuChartColumn className="w-5 h-5" />,
    },
    {
      href: "/notifications",
      label: "Notifications",
      icon: <FaBell className="w-5 h-5" />,
    },
    {
      href: "/preferences",
      label: "Survey Preferences",
      icon: <MdTune className="w-5 h-5" />,
    },
    {
      href: "/settings",
      label: "Account Settings",
      icon: <FaCog className="w-5 h-5" />,
    },
    {
      href: "/logout",
      label: "Log out",
      icon: <FaSignOutAlt className="w-5 h-5" />,
    },
  ];

  return (
    <div className="relative flex">
      {/* Toggle Button (Visible only on small screens) */}
      <button
        className="absolute top-1 left-2  -translate-x-1/2  translate-y-1/2 z-50  p-2 text-primary-text rounded-full shadow lg:hidden cursor-pointer transition-colors duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaArrowLeft className="text-primary-btn dark:text-primary-btn " />
        ) : (
          <FaBars className="text-primary-btn dark:text-primary-btn" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`
    bg-white dark:bg-black shadow-lg p-4 w-64
    transition-transform duration-300 ease-in-out
    h-screen
    ${isOpen ? "translate-x-0" : "-translate-x-full"} 
    absolute z-40 top-0 left-0
    lg:static lg:translate-x-0 lg:z-auto lg:block
  `}
      >
        <nav className="flex flex-col gap-6">
          <div className="flex h-10 py-3 px-4 gap-3 items-center">
            <LuLayoutDashboard className="w-5 h-5" />
            <span className="font-semibold text-primary-text dark:text-primary-text  md:text-lg lg:text-xl">
              Dashboard
            </span>
          </div>

          {menuItems.map((item) => (
            <div
              key={item.href}
              onClick={() => {
                setActive(item.href);
                setIsOpen(false);
              }}
              className={`
                flex h-10 py-3 px-4 gap-3 items-center cursor-pointer rounded-md 
                ${
                  active === item.href
                    ? "bg-secondary-btn dark:bg-primary-btn text-primary-btn dark:text-primary-btn"
                    : " text-primary-text dark:text-primary-text hover:bg-gray-100 dark:hover:bg-gray-800"
                }
                transition-colors 
              `}
            >
              {item.icon}
              <span className="">{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
