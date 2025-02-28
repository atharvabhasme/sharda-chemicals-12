import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Information from "./Components/Information/Information";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import "./App.css";

const App = () => {
  const isExternalReferrer = document.referrer && !document.referrer.includes(window.location.origin);

  const [activeTab, setActiveTab] = useState(() => {
    if (isExternalReferrer) {
      return "Home"; // Open Home page when coming from an external source
    }
    return sessionStorage.getItem("activeTab") || "Home"; // Maintain tab on refresh
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("activeTab", activeTab);
  }, [activeTab]);

  const handleNavbarTabChange = (newTab) => {
    if (activeTab !== newTab) {
      setActiveTab(newTab);
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarTabChange = (newTab) => {
    if (activeTab !== newTab) {
      setActiveTab(newTab);
    }
    setIsSidebarOpen(false);
  };

  const getPageTitle = () => {
    switch (activeTab) {
      case "Home":
        return "Sharda Chemicals - Leading Chemical Industry";
      case "Products":
        return "Our Products - Sharda Chemicals";
      case "About Us":
        return "About Us - Sharda Chemicals";
      case "Contact":
        return "Contact Us - Sharda Chemicals";
      default:
        return "Sharda Chemicals";
    }
  };

  return (
    <div className="app"> {/* Main App Container */}
      <Helmet>
        <title>{getPageTitle()}</title>
        <meta name="description" content={`${getPageTitle()} - Learn more about us.`} />
        <meta name="keywords" content="Chemicals, Industrial Chemicals, Sharda Chemicals, Manufacturing" />
        <meta name="author" content="Sharda Chemicals" />
      </Helmet>

      <Navbar activeTab={activeTab} setActiveTab={handleNavbarTabChange} />
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        setActiveTab={handleSidebarTabChange}
        activeTab={activeTab}
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: activeTab === "Home" ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: activeTab === "Home" ? 50 : -50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {activeTab === "Home" && (
            <>
              <Home />
              <Information />
              <Projects />
            </>
          )}
          {activeTab === "Products" && <Products />}
          {activeTab === "About Us" && (
            <>
              <About />
              <Information />
              <Projects />
            </>
          )}
          {activeTab === "Contact" && <Contact />}
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default App;
