import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faMobileScreenButton,
  faHeadphonesSimple,
  faPaperPlane,
  faRotateRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import "./Contact.css";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const googleFormURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdqY17kK3xXSfBqee3bXtb4YcZ19Cx6g8LOugzEW_5whBGo2A/formResponse";

    fetch(googleFormURL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    })
      .then(() => {
        setSubmitted(true);
        e.target.reset();
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  };

  return (
    <div className="contact-container">
      {/* Left Side - Form Section */}
      <div className="contact-left">
        <div className="contact-heading">
          <h2>
            Contact Us
            <span>
              <FontAwesomeIcon icon={faHeadphonesSimple} bounce style={{ color: "#0c2757" }} />
            </span>
          </h2>
          <p>
            For industry-leading construction chemicals with exceptional performance, Sharda Chemical is your trusted partner.
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="entry.1604081075" placeholder="Your Name" required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              id="contact"
              name="entry.145055622"
              placeholder="Your Contact No."
              required
              pattern="[0-9]{10}"
              inputMode="numeric"
              maxLength="10"
              onInput={(e) => (e.target.value = e.target.value.replace(/\D/g, "").slice(0, 10))}
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="entry.78452900" placeholder="Your E-mail" required />
          </div>

          <div className="contact-form-group textarea-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="entry.160769775" placeholder="Please Enter Your Message"></textarea>
          </div>

          <div className="contact-buttons">
            <button type="submit" className="submit-btn">
              Submit
              <span>
                <FontAwesomeIcon icon={faPaperPlane} />
              </span>
            </button>
            <button type="reset" className="reset-btn">
              Reset
              <span>
                <FontAwesomeIcon icon={faRotateRight} spin />
              </span>
            </button>
          </div>
        </form>

        {submitted && (
          <div className="success-message">
            <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
            <p>Thank you! Your message has been sent successfully. 🎉</p>
          </div>
        )}
      </div>

      {/* Right Side - Contact Info */}
      <div className="contact-right">
        <div className="contact-info-box">
          <div className="contact-info-header">
            <FontAwesomeIcon icon={faLocationDot} flip className="contact-icon" />
            <h4>Office Location</h4>
          </div>
          <p>
            📍 Plot no 29, Old subhedar layout, Sharda Square, Nagpur-440024 <br />
            <br />
            📍 Ram Cooler road, New Shukarawari, Nagpur-440032
          </p>
        </div>

        <div className="contact-info-box">
          <div className="contact-info-header">
            <FontAwesomeIcon icon={faEnvelope} beatFade className="contact-icon" />
            <h4>Email</h4>
          </div>
          <p>
            <a href="mailto:shardachemicals1@gmail.com">shardachemicals1@gmail.com</a>
          </p>
        </div>

        <div className="contact-info-box">
          <div className="contact-info-header">
            <FontAwesomeIcon icon={faMobileScreenButton} shake className="contact-icon" />
            <h4>Phone Numbers</h4>
          </div>
          <p>
            <a href="tel:+919423476195">+91 9423476195</a>
            <br />
            <a href="tel:+917083892200">+91 7083892200</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
