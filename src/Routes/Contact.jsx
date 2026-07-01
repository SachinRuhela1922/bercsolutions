import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Navbar />
      <main className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="contact-container">
            <div className="contact-hero-content">
              <h1>Contact Us</h1>
              <p>
                Get in touch with us for all your power solutions needs -
                Solar, Inverters, Batteries & Generators
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="contact-info">
          <div className="contact-container">
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <span className="contact-info-icon">📞</span>
                <h3>Call Us</h3>
                <p>Talk to our support team directly</p>
                <a href="tel:+919876543210" className="contact-info-link">+91 84758 43925</a>
                <a href="tel:+919876543211" className="contact-info-link">+91 84758 43925</a>
                <span className="contact-info-time">Available 24/7</span>
              </div>
              <div className="contact-info-card">
                <span className="contact-info-icon">✉️</span>
                <h3>Email Us</h3>
                <p>Send us your queries via email</p>
                <a href="mailto:info@company.com" className="contact-info-link">info@company.com</a>
                <a href="mailto:support@company.com" className="contact-info-link">support@company.com</a>
                <a href="mailto:sales@company.com" className="contact-info-link">sales@company.com</a>
              </div>
              <div className="contact-info-card">
                <span className="contact-info-icon">📍</span>
                <h3>Visit Us</h3>
                <p>Visit our nearest office or service center</p>
                <span className="contact-info-address">
                  Sarvodhya Colony, Meerut,<br />
                  Road hapur,<br />
                  Uttar Pradesh - 245304, India
                </span>
                <span className="contact-info-time">Mon-Sat, 9 AM - 6 PM</span>
              </div>
              <div className="contact-info-card">
                <span className="contact-info-icon">💬</span>
                <h3>Live Chat</h3>
                <p>Chat with our support experts</p>
                <button className="contact-info-btn">Start Chat</button>
                <span className="contact-info-time">Response within 2 min</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="contact-form-section">
          <div className="contact-container">
            <div className="contact-form-wrapper">
              <div className="contact-form-left">
                <h2>Send Us a Message</h2>
                <p>We'll get back to you within 24 hours</p>

                <form
                  className="contact-form"
                  action="https://formsubmit.co/io.sachinruhela@gmail.com"
                  method="POST"
                >
                  {/* Hidden Fields */}
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Contact Form Submission - Berc Group"
                  />

                  <input type="hidden" name="_captcha" value="false" />

                  {/* Optional: Redirect after submit */}
                  <input
                    type="hidden"
                    name="_next"
                    value="https://www.bercgroup.in/thankyou"
                  />

                  <div className="contact-form-row">
                    <div className="contact-form-field">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="Full Name"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    <div className="contact-form-field">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="Email"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-form-row">
                    <div className="contact-form-field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="Phone Number"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    <div className="contact-form-field">
                      <label>Subject</label>
                      <select name="Subject">
                        <option value="">Select subject</option>
                        <option>General Inquiry</option>
                        <option>Product Information</option>
                        <option>Installation Request</option>
                        <option>Service Request</option>
                        <option>Warranty Claim</option>
                        <option>Sales Inquiry</option>
                        <option>Partnership</option>
                        <option>Feedback</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="contact-form-field">
                    <label>Product Interest</label>
                    <select name="Product Interest">
                      <option value="">Select product</option>
                      <option>Solar Panels</option>
                      <option>Inverters</option>
                      <option>Batteries</option>
                      <option>Generators</option>
                      <option>Hybrid Systems</option>
                      <option>All Products</option>
                    </select>
                  </div>

                  <div className="contact-form-field">
                    <label>Message *</label>
                    <textarea
                      name="Message"
                      rows="5"
                      placeholder="Describe your query in detail"
                      required
                    ></textarea>
                  </div>

                  

                  <button type="submit" className="contact-form-btn">
                    Send Message
                  </button>
                </form>
              </div>

              <div className="contact-form-right">
                <h3>Find Us Here</h3>
                <div className="contact-map-placeholder">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823204!2d72.7411015429981!3d19.08219783958249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location Map"
                  ></iframe>
                </div>
                <div className="contact-map-details">
                  <div>
                    <strong>📌 Head Office</strong>
                    <p>Berc, Sarvodhya Colony, Meerut Road, Uttar Pradesh - 245304</p>
                  </div>
                  <div>
                    <strong>🕐 Working Hours</strong>
                    <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Centers
        <section className="contact-centers">
          <div className="contact-container">
            <h2>Our Service Centers</h2>
            <p className="contact-subtitle">Visit us at any of our 50+ locations across India</p>

            <div className="contact-centers-grid">
              <div className="contact-center">
                <h3>📍 North India</h3>
                <div className="contact-center-details">
                  <div>
                    <strong>Delhi NCR</strong>
                    <p>3 centers - Connaught Place, Noida, Gurugram</p>
                  </div>
                  <div>
                    <strong>Chandigarh</strong>
                    <p>1 center - Sector 17</p>
                  </div>
                  <div>
                    <strong>Lucknow</strong>
                    <p>2 centers - Hazratganj, Gomti Nagar</p>
                  </div>
                  <div>
                    <strong>Jaipur</strong>
                    <p>1 center - MI Road</p>
                  </div>
                  <div>
                    <strong>Amritsar</strong>
                    <p>1 center - Mall Road</p>
                  </div>
                </div>
              </div>
              <div className="contact-center">
                <h3>📍 West India</h3>
                <div className="contact-center-details">
                  <div>
                    <strong>Mumbai</strong>
                    <p>5 centers - Andheri, Bandra, Dadar, Thane, Navi Mumbai</p>
                  </div>
                  <div>
                    <strong>Pune</strong>
                    <p>3 centers - Camp, Hinjewadi, Kothrud</p>
                  </div>
                  <div>
                    <strong>Ahmedabad</strong>
                    <p>2 centers - CG Road, Satellite</p>
                  </div>
                  <div>
                    <strong>Surat</strong>
                    <p>1 center - Ring Road</p>
                  </div>
                  <div>
                    <strong>Vadodara</strong>
                    <p>1 center - Alkapuri</p>
                  </div>
                </div>
              </div>
              <div className="contact-center">
                <h3>📍 South India</h3>
                <div className="contact-center-details">
                  <div>
                    <strong>Bangalore</strong>
                    <p>4 centers - MG Road, Indiranagar, Jayanagar, Whitefield</p>
                  </div>
                  <div>
                    <strong>Chennai</strong>
                    <p>3 centers - T Nagar, Adyar, Perungudi</p>
                  </div>
                  <div>
                    <strong>Hyderabad</strong>
                    <p>3 centers - Banjara Hills, Kukatpally, Gachibowli</p>
                  </div>
                  <div>
                    <strong>Coimbatore</strong>
                    <p>1 center - RS Puram</p>
                  </div>
                  <div>
                    <strong>Kochi</strong>
                    <p>1 center - MG Road</p>
                  </div>
                </div>
              </div>
              <div className="contact-center">
                <h3>📍 East India</h3>
                <div className="contact-center-details">
                  <div>
                    <strong>Kolkata</strong>
                    <p>2 centers - Park Street, Salt Lake</p>
                  </div>
                  <div>
                    <strong>Bhubaneswar</strong>
                    <p>1 center - Sahid Nagar</p>
                  </div>
                  <div>
                    <strong>Patna</strong>
                    <p>1 center - Boring Road</p>
                  </div>
                  <div>
                    <strong>Guwahati</strong>
                    <p>1 center - GS Road</p>
                  </div>
                  <div>
                    <strong>Ranchi</strong>
                    <p>1 center - Main Road</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Business Hours */}
        <section className="contact-hours">
          <div className="contact-container">
            <h2>Business Hours</h2>
            <p className="contact-subtitle">We're here to serve you</p>

            <div className="contact-hours-grid">
              <div className="contact-hours-card">
                <h3>🕐 Office Hours</h3>
                <ul>
                  <li><span>Monday - Friday</span><span>9:00 AM - 6:00 PM</span></li>
                  <li><span>Saturday</span><span>9:00 AM - 4:00 PM</span></li>
                  <li><span>Sunday</span><span>Closed</span></li>
                </ul>
              </div>
              <div className="contact-hours-card">
                <h3>📞 Support Hours</h3>
                <ul>
                  <li><span>Monday - Sunday</span><span>24/7 Available</span></li>
                  <li><span>Emergency Support</span><span>24/7 Available</span></li>
                  <li><span>Chat Support</span><span>9:00 AM - 10:00 PM</span></li>
                </ul>
              </div>
              <div className="contact-hours-card">
                <h3>🛠️ Service Hours</h3>
                <ul>
                  <li><span>Monday - Saturday</span><span>9:00 AM - 6:00 PM</span></li>
                  <li><span>Emergency Service</span><span>24/7 Available</span></li>
                  <li><span>Warranty Claims</span><span>9:00 AM - 5:00 PM</span></li>
                </ul>
              </div>
              <div className="contact-hours-card">
                <h3>📦 Delivery Hours</h3>
                <ul>
                  <li><span>Monday - Saturday</span><span>9:00 AM - 8:00 PM</span></li>
                  <li><span>Installation</span><span>9:00 AM - 6:00 PM</span></li>
                  <li><span>Same Day Delivery</span><span>Orders before 12 PM</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media */}
        <section className="contact-social">
          <div className="contact-container">
            <h2>Connect With Us</h2>
            <p className="contact-subtitle">Follow us on social media for updates</p>

            <div className="contact-social-grid">
              <a href="#" className="contact-social-link">
                <span>📱</span>
                <div>
                  <strong>WhatsApp</strong>
                  <span>+91 98765 43210</span>
                </div>
              </a>
              <a href="#" className="contact-social-link">
                <span>📘</span>
                <div>
                  <strong>Facebook</strong>
                  <span>@CompanyPage</span>
                </div>
              </a>
              <a href="#" className="contact-social-link">
                <span>📸</span>
                <div>
                  <strong>Instagram</strong>
                  <span>@CompanyPage</span>
                </div>
              </a>
              <a href="#" className="contact-social-link">
                <span>🐦</span>
                <div>
                  <strong>Twitter</strong>
                  <span>@CompanyPage</span>
                </div>
              </a>
              <a href="#" className="contact-social-link">
                <span>💼</span>
                <div>
                  <strong>LinkedIn</strong>
                  <span>/company/companypage</span>
                </div>
              </a>
              <a href="#" className="contact-social-link">
                <span>▶️</span>
                <div>
                  <strong>YouTube</strong>
                  <span>/companypage</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* FAQ - Contact Related */}
        <section className="contact-faq">
          <div className="contact-container">
            <h2>Frequently Asked Questions</h2>
            <p className="contact-subtitle">Common questions about contacting us</p>

            <div className="contact-faq-grid">
              <div className="contact-faq-item">
                <h3>What is the best way to contact you?</h3>
                <p>You can reach us through multiple channels - phone, email, live chat, or visit our nearest service center. For quick responses, we recommend calling or using our live chat.</p>
              </div>
              <div className="contact-faq-item">
                <h3>How long does it take to get a response?</h3>
                <p>We aim to respond to all queries within 24 hours. For urgent matters, please call our emergency helpline for immediate assistance.</p>
              </div>
              <div className="contact-faq-item">
                <h3>Do you have service centers in my city?</h3>
                <p>We have 50+ service centers across major cities in India. Check our service center list above or contact us to find the nearest center in your area.</p>
              </div>
              <div className="contact-faq-item">
                <h3>What information should I have ready when contacting?</h3>
                <p>Please keep your product details, invoice number, and serial number ready. This helps us serve you faster and more efficiently.</p>
              </div>
              <div className="contact-faq-item">
                <h3>Can I get a site visit for consultation?</h3>
                <p>Yes, we provide free site visits for consultation. Fill out the contact form or call us to schedule a visit at your convenience.</p>
              </div>
              <div className="contact-faq-item">
                <h3>Do you provide emergency support?</h3>
                <p>Yes, we provide 24/7 emergency support for critical issues. Call our emergency helpline for immediate assistance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Contact */}
        <section className="contact-emergency">
          <div className="contact-container">
            <div className="contact-emergency-content">
              <span className="contact-emergency-icon">🚨</span>
              <h2>Emergency Support</h2>
              <p>For critical issues that need immediate attention</p>
              <div className="contact-emergency-details">
                <div>
                  <strong>Emergency Helpline</strong>
                  <a href="tel:+919876543210">+91 98765 43210</a>
                  <span>Available 24/7</span>
                </div>
                <div>
                  <strong>Emergency Email</strong>
                  <a href="mailto:emergency@company.com">emergency@company.com</a>
                  <span>Response within 30 minutes</span>
                </div>
                <div>
                  <strong>Response Commitment</strong>
                  <span>Within 30 minutes</span>
                  <span>For critical power issues</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="contact-cta">
          <div className="contact-container">
            <div className="contact-cta-content">
              <h2>Ready to Get Started?</h2>
              <p>Contact us today for a free consultation</p>
              <div className="contact-cta-buttons">
                <button className="contact-btn-primary">Call Now</button>
                <button className="contact-btn-secondary">Request a Quote</button>
              </div>
              <div className="contact-cta-note">
                <span>📋 Free Consultation | 💰 No Obligation | ⭐ Trusted by 10,000+ Customers</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Contact;