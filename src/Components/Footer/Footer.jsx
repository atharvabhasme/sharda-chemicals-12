import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import facebook_icon from "../../assets/facebook_icon.png";
import insta_icon from "../../assets/insta_icon.png";
import linkedin_icon from "../../assets/linkedin-app-icon.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-1">
          <div className="footer-1-head">
            <FontAwesomeIcon icon={faLocationDot} flip className="contact-icon" />
            <h4>Office Location</h4>
          </div>
          <p>
            📍 Plot no 29, Old subhedar layout, Sharda Square, Nagpur-440024 <br /><br />
            📍 Ram Cooler road, New Shukarawari, Nagpur-440032
          </p>
        </div>

        <div className="footer-2">
          <div className="footer-2-head">
            <FontAwesomeIcon icon={faMobileScreenButton} shake className="contact-icon" />
            <h4>Phone Numbers</h4>
          </div>
          <p>
            <a href="tel:+919423476195">+91 9423476195</a><br />
            <a href="tel:+917083892200">+91 7083892200</a>
          </p>
          <div className="footer-2-head2">
            <FontAwesomeIcon icon={faEnvelope} beatFade className="contact-icon" />
            <h4>Email</h4>
          </div>
          <p>
            <a href="mailto:shardachemicals1@gmail.com">shardachemicals1@gmail.com</a>
          </p>
        </div>

        <div className="footer-3">
          <div className="footer-3-head">
            <h4>CONNECT WITH US</h4>
          </div>
          <div className="footer-3-icons">
            <a href="#">
              <img src={facebook_icon} alt="facebook" />
            </a>
            <a
              href="https://www.instagram.com/shardachemicals_ngp?igsh=MWdpYWR0anJnNGIyYQ%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta_icon} alt="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/sharda-chemicals-48a580353/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Sharda Chemicals. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
