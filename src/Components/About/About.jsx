import { useEffect, useState } from "react";
import img1 from "../../assets/about-img-5.jpg";
import img2 from "../../assets/about-img-6.webp";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <section className="about-section">
      {/* Main Container */}
      <div className={`about-container ${isVisible ? "fade-in" : ""}`}>
        <div className="about-box">
          <h2 className="about-title">About Sharda Chemicals</h2>
          <img src={img1} alt="Company operations" className="about-img" />
          <p className="about-text">
            Sharda Chemicals is a certified company that specializes in the manufacturing, supply, and distribution of various Pre and Post construction chemicals. To keep up with the flawlessness of the assortment, we procure supreme quality constituents from our dependable and trustworthy vendors. It is because of the quality and flawlessness offered that our chemicals are widely applauded in the construction industries.
          </p>
        </div>
        <div className="about-box">
          <h2 className="about-title">What We Can Do?</h2>
          <img src={img2} alt="Our expertise" className="about-img" />
          <p className="about-text about-text2">
            Sharda Chemicals is the leading manufacturer and supplier of superior construction chemicals. Sharda Chemicals manufactures a wide range of products which are supplied to some of the biggest construction companies and industries. These construction chemicals are widely used in the construction of industrial, commercial, and infrastructural projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
