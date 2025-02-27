import { useState, useEffect } from "react";
import info_img_1 from "../../assets/info-img1.webp";
import info_img_2 from "../../assets/info-img2.webp";
import resized_img_1 from "../../assets/resized_img1.webp";
import resized_img_2 from "../../assets/resized_img2.webp";
import "./Information.css";

const Information = () => {
  const [currentImage1, setCurrentImage1] = useState(info_img_1);
  const [currentImage2, setCurrentImage2] = useState(info_img_2);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 825 && screenWidth > 650) {
        setCurrentImage1(resized_img_1);
        setCurrentImage2(resized_img_2);
      } else {
        setCurrentImage1(info_img_1);
        setCurrentImage2(info_img_2);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    /* Information Main Container */
    <div className={`info ${animate ? "animate" : ""}`}>
      <h2>Why Choose Sharda Chemicals ?</h2>

      <div className="info-container1">
        <div className={`info-box ${animate ? "slide-up" : ""}`}>
          <h2>Our Mission</h2>
          <p>
            We are committed to revolutionizing the construction chemical industry in India and beyond. By delivering high-quality, cost-effective solutions, we aim to build a stronger, more sustainable future. Together, let's create the foundation for tomorrow's innovations.
          </p>
        </div>
        <div className={`info-box-img ${animate ? "slide-up" : ""}`}>
          <img src={currentImage1} alt="Mission" />
        </div>
      </div>

      <div className="info-container2">
        <div className={`info-box-img ${animate ? "slide-up" : ""}`}>
          <img src={currentImage2} alt="Vision" />
        </div>
        <div className={`info-box ${animate ? "slide-up" : ""}`}>
          <h2>Our Vision</h2>
          <p>
            Our vision is to redefine excellence in construction by offering superior chemical solutions. Through unwavering dedication to quality and global standards, we ensure superior quality and reliability in every product we offer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
