import { useState } from "react";
import { FaArrowLeft, FaBars } from "react-icons/fa";

function Dashboard() {
  const [active, setActive] = useState("/profile");
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { href: "/profile", label: "Edit Profile", icon: "/profile-icon.png" },
    { href: "/history", label: "Survey History", icon: "/history-icon.png" },
    { href: "/survey", label: "Saved Surveys", icon: "/survey-icon.png" },
    {
      href: "/notifications",
      label: "Notifications",
      icon: "/notifications-icon.png",
    },
    {
      href: "/preferences",
      label: "Survey Preferences",
      icon: "/preferences-icon.png",
    },
    {
      href: "/settings",
      label: "Account Settings",
      icon: "/settings-icon.png",
    },
    { href: "/logout", label: "Log out", icon: "/logout-icon.png" },
  ];

  return (
    <div className="relative">
      <button
        className="lg:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-2 bg-white shadow rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaArrowLeft /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          absolute lg:static top-0 left-0 h-screen bg-white shadow-lg p-4 w-64 z-40
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <nav className="flex flex-col gap-6">
          <div className="flex h-10 py-3 px-4 gap-3 items-center">
            <img
              src="/dashboard-icon.png"
              alt="Dashboard Icon"
              className="w-5 h-5"
            />
            <span className="font-semibold">Dashboard</span>
          </div>

          {menuItems.map((item) => (
            <div
              key={item.href}
              onClick={() => setActive(item.href)}
              className={`flex h-10 py-3 px-4 gap-3 items-center cursor-pointer rounded-md transition-colors ${
                active === item.href
                  ? "bg-[#DBF8FA] text-[#00B7C1]"
                  : "hover:bg-gray-100"
              }`}
            >
              <img src={item.icon} alt={item.label} className="w-5 h-5" />
              <span className="text-sm lg:text-base">{item.label}</span>
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}

export default Dashboard;
