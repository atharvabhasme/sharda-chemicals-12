import { useState } from "react";
import logo from "../../assets/logo2-bg.png";
import Sidebar from "../Sidebar/Sidebar";
import "./Navbar.css";

// Main Navbar Component
const Navbar = ({ setActiveTab, activeTab }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("Home");
          }}
        >
          <img src={logo} alt="logo" />
        </a>
        <div className="logo-name">
          <p>SHARDA</p>
          <p>CHEMICALS</p>
        </div>
      </div>

      <div className="navbar-right">
        {["Home", "Products", "About Us", "Contact"].map((tab) => (
          <p
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </p>
        ))}
      </div>

      <div className="menu-icon" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? "✖" : "☰"}
      </div>

      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
      />
    </div>
  );
};

export default Navbar;
