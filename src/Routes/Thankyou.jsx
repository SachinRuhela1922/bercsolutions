import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./ThankYou.css";

function ThankYou() {
  return (
    <>
    <Navbar />
    <div className="thankyou-page">
      <div className="thankyou-card">
        <div className="success-icon">✓</div>

        <h1>Thank You!</h1>

        <p>
          Your message has been sent successfully.
          <br />
          Our team will contact you within 24 hours.
        </p>

        <div className="info-box">
          <p>📧 We've received your inquiry.</p>
          <p>📞 Our expert will contact you shortly.</p>
          <p>⚡ Thank you for choosing <strong>Berc Group</strong>.</p>
        </div>

        <div className="btn-group">
          <Link to="/" className="primary-btn">
            Back to Home
          </Link>

          <Link to="/products" className="secondary-btn">
            View Products
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default ThankYou;