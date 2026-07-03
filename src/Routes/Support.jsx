import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Support.css";

function Support() {
  return (
    <>
      <Navbar />
      <main className="support-page">
        {/* Hero Section */}
        <section className="support-hero">
          <div className="support-container">
            <div className="support-hero-content">
              <h1>Customer Support</h1>
              <p>
                We're here to help you with all your power solutions needs -
                Solar, Inverters, Batteries & Generators
              </p>
            </div>
          </div>
        </section>

        {/* Quick Support Options */}
        <section className="support-quick">
          <div className="support-container">
            <h2>How Can We Help You?</h2>
            <p className="support-subtitle">Choose from our support options</p>

            <div className="support-quick-grid">
              <div className="support-quick-card">
                <span className="support-quick-icon">📞</span>
                <h3>Call Us</h3>
                <p>Talk to our support team directly</p>
                <a href="tel:+919760401780" className="support-quick-link">+91 9760401780, +91 9873890236</a>
                <span className="support-quick-time">Available 24/7</span>
              </div>
              <div className="support-quick-card">
                <span className="support-quick-icon">💬</span>
                <h3>Live Chat</h3>
                <p>Chat with our support experts</p>
                <button className="support-quick-btn">Start Chat</button>
                <span className="support-quick-time">Response within 2 min</span>
              </div>
              <div className="support-quick-card">
                <span className="support-quick-icon">✉️</span>
                <h3>Email Us</h3>
                <p>Send us your queries via email</p>
                <a href="mailto:support@company.com" className="support-quick-link">bestelectricrepairingcenter@gmail.com</a>
                <span className="support-quick-time">Response within 24 hours</span>
              </div>
              <div className="support-quick-card">
                <span className="support-quick-icon">📍</span>
                <h3>Visit Us</h3>
                <p>Visit our nearest service center</p>
                <span className="support-quick-location">Best Electric & Repairing Center, Sarvodhya Colony, Meerut Road, Hapur-245101</span>
                <span className="support-quick-time">Mon-Sat, 9 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </section>

        {/* Support Categories */}
        <section className="support-categories">
          <div className="support-container">
            <h2>Support Categories</h2>
            <p className="support-subtitle">Find help for your specific product</p>

            <div className="support-categories-grid">
              <div className="support-category-card">
                <span>☀️</span>
                <h3>Solar Panels</h3>
                <ul>
                  <li>Installation support</li>
                  <li>Performance issues</li>
                  <li>Warranty claims</li>
                  <li>Cleaning & maintenance</li>
                </ul>
                <button className="support-category-btn">Get Help</button>
              </div>
              <div className="support-category-card">
                <span>☀️</span>
                <h3>Stabilizers</h3>
                <ul>
                  <li>Installation support</li>
                  <li>Performance issues</li>
                  <li>Warranty claims</li>
                  <li>Cleaning & maintenance</li>
                </ul>
                <button className="support-category-btn">Get Help</button>
              </div>
              <div className="support-category-card">
                <span>🔄</span>
                <h3>Transformers</h3>
                <ul>
                  <li>Installation support</li>
                  <li>Performance issues</li>
                  <li>Warranty claims</li>
                  <li>Cleaning & maintenance</li>
                </ul>
                <button className="support-category-btn">Get Help</button>
              </div>
              <div className="support-category-card">
                <span>⚡</span>
                <h3>Inverters</h3>
                <ul>
                  <li>Installation support</li>
                  <li>Technical issues</li>
                  <li>Error code solutions</li>
                  <li>Performance optimization</li>
                </ul>
                <button className="support-category-btn">Get Help</button>
              </div>
              <div className="support-category-card">
                <span>🔋</span>
                <h3>Batteries</h3>
                <ul>
                  <li>Charging issues</li>
                  <li>Battery life problems</li>
                  <li>Replacement guidance</li>
                  <li>Maintenance tips</li>
                </ul>
                <button className="support-category-btn">Get Help</button>
              </div>
              <div className="support-category-card">
                <span>🔄</span>
                <h3>Generators</h3>
                <ul>
                  <li>Startup problems</li>
                  <li>Fuel efficiency</li>
                  <li>Noise issues</li>
                  <li>Maintenance service</li>
                </ul>
                <button className="support-category-btn">Get Help</button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Services */}
        <section className="support-services">
          <div className="support-container">
            <h2>Our Support Services</h2>
            <p className="support-subtitle">Comprehensive support for all your needs</p>

            <div className="support-services-grid">
              <div className="support-service">
                <span className="support-service-icon">🔧</span>
                <div>
                  <h3>Installation Support</h3>
                  <p>Professional installation guidance for all our products</p>
                </div>
              </div>
              <div className="support-service">
                <span className="support-service-icon">🛠️</span>
                <div>
                  <h3>Repair & Maintenance</h3>
                  <p>Expert repair and regular maintenance services</p>
                </div>
              </div>
              <div className="support-service">
                <span className="support-service-icon">🔄</span>
                <div>
                  <h3>Warranty Service</h3>
                  <p>Hassle-free warranty claims and replacements</p>
                </div>
              </div>
              <div className="support-service">
                <span className="support-service-icon">📞</span>
                <div>
                  <h3>Technical Support</h3>
                  <p>24/7 technical support for all products</p>
                </div>
              </div>
              <div className="support-service">
                <span className="support-service-icon">🎓</span>
                <div>
                  <h3>Product Training</h3>
                  <p>Training on how to use and maintain your products</p>
                </div>
              </div>
              <div className="support-service">
                <span className="support-service-icon">📋</span>
                <div>
                  <h3>Documentation</h3>
                  <p>Product manuals, guides, and documentation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="support-faq">
          <div className="support-container">
            <h2>Frequently Asked Questions</h2>
            <p className="support-subtitle">Quick answers to common questions</p>

            <div className="support-faq-grid">
              <div className="support-faq-item">
                <h3>How do I install my solar panel system?</h3>
                <p>We provide professional installation services. Our certified technicians will install your system safely and efficiently. Installation typically takes 2-3 days depending on the system size.</p>
              </div>
              <div className="support-faq-item">
                <h3>What is the warranty period for products?</h3>
                <p>Solar panels come with 25-year performance warranty. Inverters have 5-year warranty. Batteries have 3-5 years warranty depending on the type. Generators have 2-year comprehensive warranty.</p>
              </div>
              <div className="support-faq-item">
                <h3>How do I claim warranty?</h3>
                <p>You can claim warranty by contacting our support team. We'll guide you through the process. Keep your purchase invoice and product serial number ready for faster processing.</p>
              </div>
              <div className="support-faq-item">
                <h3>Do you provide emergency support?</h3>
                <p>Yes, we provide 24/7 emergency support for critical issues. Call our emergency helpline for immediate assistance. Our team will respond within 30 minutes.</p>
              </div>
              <div className="support-faq-item">
                <h3>How often should I maintain my solar panels?</h3>
                <p>Solar panels should be cleaned every 2-3 months. Professional maintenance is recommended twice a year. We offer annual maintenance contracts for hassle-free service.</p>
              </div>
              <div className="support-faq-item">
                <h3>What is the average response time?</h3>
                <p>Our average response time is under 2 minutes for chat support, under 4 hours for email queries, and same-day service for installation and repair requests.</p>
              </div>
              <div className="support-faq-item">
                <h3>Can I track my service request?</h3>
                <p>Yes, we provide a unique tracking ID for every service request. You can track the status through our customer portal or by contacting support.</p>
              </div>
              <div className="support-faq-item">
                <h3>Do you provide installation guides?</h3>
                <p>Yes, we provide detailed installation guides and video tutorials for DIY installations. We also offer professional installation services for those who prefer expert help.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Support Locations
        <section className="support-locations">
          <div className="support-container">
            <h2>Our Service Centers</h2>
            <p className="support-subtitle">Find a service center near you</p>
            
            <div className="support-locations-grid">
              <div className="support-location-card">
                <h3>📍 North India</h3>
                <ul>
                  <li>Delhi NCR - 3 centers</li>
                  <li>Chandigarh - 1 center</li>
                  <li>Lucknow - 2 centers</li>
                  <li>Jaipur - 1 center</li>
                  <li>Amritsar - 1 center</li>
                </ul>
              </div>
              <div className="support-location-card">
                <h3>📍 West India</h3>
                <ul>
                  <li>Mumbai - 5 centers</li>
                  <li>Pune - 3 centers</li>
                  <li>Ahmedabad - 2 centers</li>
                  <li>Surat - 1 center</li>
                  <li>Vadodara - 1 center</li>
                </ul>
              </div>
              <div className="support-location-card">
                <h3>📍 South India</h3>
                <ul>
                  <li>Bangalore - 4 centers</li>
                  <li>Chennai - 3 centers</li>
                  <li>Hyderabad - 3 centers</li>
                  <li>Coimbatore - 1 center</li>
                  <li>Kochi - 1 center</li>
                </ul>
              </div>
              <div className="support-location-card">
                <h3>📍 East India</h3>
                <ul>
                  <li>Kolkata - 2 centers</li>
                  <li>Bhubaneswar - 1 center</li>
                  <li>Patna - 1 center</li>
                  <li>Guwahati - 1 center</li>
                  <li>Ranchi - 1 center</li>
                </ul>
              </div>
            </div>
          </div>
        </section> */}

        {/* Contact Form */}
        <section className="support-contact">
          <div className="support-container">
            

            <div className="support-contact-form">
              <form
                className="support-contact"
                action="https://formsubmit.co/io.sachinruhela@gmail.com"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="New Support Request - Berc Group"
                />

                <input type="hidden" name="_captcha" value="false" />

                <input
                  type="hidden"
                  name="_next"
                  value="https://www.bercgroup.in/thankyou"
                />

                <div className="support-container">
                  <h2>Get In Touch</h2>
                  <p className="support-subtitle">
                    We'll get back to you within 24 hours
                  </p>

                  <div className="support-contact-form">

                    {/* Form ki jagah div hai, class same hai */}
                    <div className="support-form">

                      <div className="support-form-group">
                        <div className="support-form-field">
                          <label>Full Name *</label>
                          <input
                            type="text"
                            name="Full Name"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div className="support-form-field">
                          <label>Email Address *</label>
                          <input
                            type="email"
                            name="Email"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="support-form-group">
                        <div className="support-form-field">
                          <label>Phone Number *</label>
                          <input
                            type="tel"
                            name="Phone Number"
                            placeholder="Enter your phone number"
                            required
                          />
                        </div>

                        <div className="support-form-field">
                          <label>Product Type</label>
                          <select name="Product Type">
                            <option value="">Select product</option>
                            <option>Solar Panels</option>
                            <option>Inverters</option>
                            <option>Batteries</option>
                            <option>Generators</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="support-form-field">
                        <label>Subject</label>
                        <input
                          type="text"
                          name="Subject"
                          placeholder="Brief subject"
                        />
                      </div>

                      <div className="support-form-field">
                        <label>Message *</label>
                        <textarea
                          name="Message"
                          rows="5"
                          placeholder="Describe your issue or query in detail"
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="support-form-btn"
                      >
                        Submit Request
                      </button>

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Emergency Support */}
        <section className="support-emergency">
          <div className="support-container">
            <div className="support-emergency-content">
              <span className="support-emergency-icon">🆘</span>
              <h2>Emergency Support</h2>
              <p>Critical issues? We're here 24/7 for you</p>
              <div className="support-emergency-details">
                <div>
                  <strong>Emergency Helpline</strong>
                  <a href="tel:+919760401780">+91 9760401780, +91 9873890236</a>
                </div>
                <div>
                  <strong>Emergency Email</strong>
                  <a href="mailto:bestelectricrepairingcenter@gmail.com">bestelectricrepairingcenter@gmail.com</a>
                </div>
                <div>
                  <strong>Response Time</strong>
                  <span>Within 30 minutes</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="support-cta">
          <div className="support-container">
            <div className="support-cta-content">
              <h2>Need Immediate Assistance?</h2>
              <p>Our support team is ready to help you</p>
              <div className="support-cta-buttons">
                <button className="support-btn-primary">Call Support</button>
                <button className="support-btn-secondary">Live Chat</button>
              </div>
              <div className="support-cta-hours">
                <span>🕐 Support Hours: 24/7 - 365 Days</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Support;
