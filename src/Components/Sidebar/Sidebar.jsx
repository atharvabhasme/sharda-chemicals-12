import React from "react";
import logo from "../../assets/logo2-bg.png";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar, setActiveTab, activeTab }) => {
  const handleTabClick = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
    toggleSidebar();
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      {/* Logo Section */}
      <div className="logo">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setActiveTab("Home");
            toggleSidebar();
          }}
        >
          <img src={logo} alt="Logo" />
        </a>
        <div className="logo-name">
          <p>SHARDA</p>
          <p>CHEMICALS</p>
        </div>
      </div>
      
      {/* Navigation Menu */}
      <ul>
        {["Home", "Products", "About Us", "Contact"].map((tab) => (
          <li
            key={tab}
            className={activeTab === tab ? "active-tab" : ""}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
