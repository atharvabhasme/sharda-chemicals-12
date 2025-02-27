import { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 4 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? 4 : prev - 1));
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="home"> {/* Main Home Section */}
      <div className="home-container">
        <div className="desc">
          <div className="slider">
            {[ 
              { title: "Ensuring Quality and Reliability", text: "Reliable solutions, superior quality—built to last." },
              { title: "Trusted Supplier for Construction Needs", text: "Your go-to partner for premium construction chemicals." },
              { title: "Certified Leader in Construction Chemicals", text: "Excellence in every drop, certified for quality construction." },
              { title: "Leading Manufacturer of Construction Chemicals", text: "Innovating construction chemicals for stronger, lasting structures." },
              { title: "Supplying Top Construction Companies", text: "Powering top construction firms with premium chemical solutions." }
            ].map((item, index) => (
              <div key={index} className={`desc-content ${activeIndex === index ? "active" : ""}`}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="desc-btn">
            <button className="pre-btn" onClick={handlePrev}>{"<"}</button>
            <button className="next-btn" onClick={handleNext}>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;