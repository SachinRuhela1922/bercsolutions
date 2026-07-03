import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Business.css";

function Business() {
  return (
    <>
      <Navbar />
      <main className="opportunities-page">
        {/* Hero Section */}
        <section className="opportunities-hero">
          <div className="opportunities-container">
            <div className="opportunities-hero-content">
              <h1>Business Opportunities</h1>
              <p>
                Partner with us to grow your business in the renewable energy 
                and power solutions industry
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="opportunities-why">
          <div className="opportunities-container">
            <h2>Why Partner With Us?</h2>
            <p className="opportunities-subtitle">
              Join India's fastest-growing power solutions network
            </p>
            
            <div className="opportunities-why-grid">
              <div className="opportunities-why-card">
                <span className="opportunities-why-icon">💰</span>
                <h3>High Profit Margins</h3>
                <p>Earn attractive commissions and profit margins on every sale</p>
              </div>
              <div className="opportunities-why-card">
                <span className="opportunities-why-icon">📦</span>
                <h3>Quality Products</h3>
                <p>Premium solar panels, inverters, batteries, and generators</p>
              </div>
              <div className="opportunities-why-card">
                <span className="opportunities-why-icon">🛠️</span>
                <h3>Technical Support</h3>
                <p>Complete technical training and 24/7 support for partners</p>
              </div>
              <div className="opportunities-why-card">
                <span className="opportunities-why-icon">📈</span>
                <h3>Growing Market</h3>
                <p>India's renewable energy market is growing at 30% annually</p>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Models */}
        <section className="opportunities-models">
          <div className="opportunities-container">
            <h2>Partnership Models</h2>
            <p className="opportunities-subtitle">
              Choose the partnership model that suits your business
            </p>
            
            <div className="opportunities-models-grid">
              <div className="opportunities-model-card">
                <div className="opportunities-model-header">
                  <span className="opportunities-model-icon">🏪</span>
                  <h3>Dealer</h3>
                  <span className="opportunities-model-badge">Popular</span>
                </div>
                <ul className="opportunities-model-list">
                  <li>✓ Sell our complete product range</li>
                  <li>✓ Exclusive territory rights</li>
                  <li>✓ Bulk purchase discounts</li>
                  <li>✓ Marketing support</li>
                  <li>✓ Free product training</li>
                </ul>
                <div className="opportunities-model-footer">
                  <span className="opportunities-model-price">Investment: ₹1-5 Lakhs</span>
                  <button className="opportunities-model-btn">Enquire Now</button>
                </div>
              </div>

              <div className="opportunities-model-card opportunities-model-featured">
                <div className="opportunities-model-header">
                  <span className="opportunities-model-icon">🔧</span>
                  <h3>Distributor</h3>
                  <span className="opportunities-model-badge">Best Value</span>
                </div>
                <ul className="opportunities-model-list">
                  <li>✓ Bulk wholesale pricing</li>
                  <li>✓ Manage dealer network</li>
                  <li>✓ Higher profit margins</li>
                  <li>✓ Dedicated account manager</li>
                  <li>✓ Priority product supply</li>
                </ul>
                <div className="opportunities-model-footer">
                  <span className="opportunities-model-price">Investment: ₹5-20 Lakhs</span>
                  <button className="opportunities-model-btn">Enquire Now</button>
                </div>
              </div>

              <div className="opportunities-model-card">
                <div className="opportunities-model-header">
                  <span className="opportunities-model-icon">🔌</span>
                  <h3>Installer</h3>
                  <span className="opportunities-model-badge">New</span>
                </div>
                <ul className="opportunities-model-list">
                  <li>✓ Certified installation partner</li>
                  <li>✓ Free technical training</li>
                  <li>✓ Installation support</li>
                  <li>✓ Warranty support</li>
                  <li>✓ Priority service calls</li>
                </ul>
                <div className="opportunities-model-footer">
                  <span className="opportunities-model-price">Investment: ₹50K-2 Lakhs</span>
                  <button className="opportunities-model-btn">Enquire Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="opportunities-benefits">
          <div className="opportunities-container">
            <h2>Partner Benefits</h2>
            <p className="opportunities-subtitle">
              What you get when you join our partner network
            </p>
            
            <div className="opportunities-benefits-grid">
              <div className="opportunities-benefit">
                <span className="opportunities-benefit-icon">🎓</span>
                <div>
                  <h3>Training & Development</h3>
                  <p>Regular training sessions on new products and technologies</p>
                </div>
              </div>
              <div className="opportunities-benefit">
                <span className="opportunities-benefit-icon">📣</span>
                <div>
                  <h3>Marketing Support</h3>
                  <p>Marketing materials, digital campaigns, and lead generation</p>
                </div>
              </div>
              <div className="opportunities-benefit">
                <span className="opportunities-benefit-icon">🔧</span>
                <div>
                  <h3>Technical Support</h3>
                  <p>24/7 technical support and warranty services</p>
                </div>
              </div>
              <div className="opportunities-benefit">
                <span className="opportunities-benefit-icon">📊</span>
                <div>
                  <h3>Sales Support</h3>
                  <p>Sales presentations, demos, and customer support</p>
                </div>
              </div>
              <div className="opportunities-benefit">
                <span className="opportunities-benefit-icon">🏆</span>
                <div>
                  <h3>Rewards & Incentives</h3>
                  <p>Performance-based bonuses and rewards</p>
                </div>
              </div>
              <div className="opportunities-benefit">
                <span className="opportunities-benefit-icon">📱</span>
                <div>
                  <h3>Partner Portal</h3>
                  <p>Exclusive partner portal for orders, training, and support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Portfolio */}
        <section className="opportunities-products">
          <div className="opportunities-container">
            <h2>Product Portfolio</h2>
            <p className="opportunities-subtitle">
              Premium products you can offer to your customers
            </p>
            
            <div className="opportunities-products-grid">
              <div className="opportunities-product">
                <span>☀️</span>
                <h3>Solar Panels</h3>
                <ul>
                  <li>Monocrystalline & Polycrystalline</li>
                  <li>400W - 600W panels</li>
                  <li>25-year warranty</li>
                  <li>22% efficiency</li>
                </ul>
              </div>
              <div className="opportunities-product">
                <span>⚡</span>
                <h3>Inverters</h3>
                <ul>
                  <li>1kW - 10kW capacity</li>
                  <li>Pure sine wave technology</li>
                  <li>LCD display</li>
                  <li>Smart battery management</li>
                </ul>
              </div>
              <div className="opportunities-product">
                <span>🔋</span>
                <h3>Batteries</h3>
                <ul>
                  <li>100Ah - 500Ah capacity</li>
                  <li>Lithium-ion & Tubular</li>
                  <li>Deep cycle technology</li>
                  <li>5-year warranty</li>
                </ul>
              </div>
              <div className="opportunities-product">
                <span>🔄</span>
                <h3>Generators</h3>
                <ul>
                  <li>2kVA - 50kVA capacity</li>
                  <li>Silent operation</li>
                  <li>Automatic start</li>
                  <li>Fuel-efficient engines</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="opportunities-apply">
          <div className="opportunities-container">
            <h2>How to Apply</h2>
            <p className="opportunities-subtitle">
              Simple 5-step process to become our partner
            </p>
            
            <div className="opportunities-apply-steps">
              <div className="opportunities-step">
                <div className="opportunities-step-number">1</div>
                <div className="opportunities-step-content">
                  <h3>Fill Application</h3>
                  <p>Submit your business details and contact information</p>
                </div>
              </div>
              <div className="opportunities-step">
                <div className="opportunities-step-number">2</div>
                <div className="opportunities-step-content">
                  <h3>Initial Discussion</h3>
                  <p>Our team will contact you for a detailed discussion</p>
                </div>
              </div>
              <div className="opportunities-step">
                <div className="opportunities-step-number">3</div>
                <div className="opportunities-step-content">
                  <h3>Site Visit</h3>
                  <p>We'll visit your location for assessment</p>
                </div>
              </div>
              <div className="opportunities-step">
                <div className="opportunities-step-number">4</div>
                <div className="opportunities-step-content">
                  <h3>Agreement & Training</h3>
                  <p>Sign agreement and get training on products</p>
                </div>
              </div>
              <div className="opportunities-step">
                <div className="opportunities-step-number">5</div>
                <div className="opportunities-step-content">
                  <h3>Start Business</h3>
                  <p>Start selling and earning with our support</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="opportunities-faq">
          <div className="opportunities-container">
            <h2>Frequently Asked Questions</h2>
            <p className="opportunities-subtitle">
              Common questions about our partnership program
            </p>
            
            <div className="opportunities-faq-grid">
              <div className="opportunities-faq-item">
                <h3>Who can become a partner?</h3>
                <p>Any individual or business with a registered entity can become our partner. Experience in electrical or solar industry is a plus but not mandatory.</p>
              </div>
              <div className="opportunities-faq-item">
                <h3>What is the minimum investment?</h3>
                <p>Investment starts from ₹50,000 for installer partners and goes up to ₹20 lakhs for distributors. We have flexible options for all budgets.</p>
              </div>
              <div className="opportunities-faq-item">
                <h3>Do you provide training?</h3>
                <p>Yes, we provide comprehensive training on all products, installation, sales, and customer support. Training is conducted online and offline.</p>
              </div>
              <div className="opportunities-faq-item">
                <h3>What support do you offer?</h3>
                <p>We provide technical support, marketing support, sales support, and after-sales service. You'll also get access to our partner portal.</p>
              </div>
              <div className="opportunities-faq-item">
                <h3>How long does it take to start?</h3>
                <p>The entire process from application to starting business takes about 2-3 weeks, depending on location and agreement signing.</p>
              </div>
              <div className="opportunities-faq-item">
                <h3>What territories are available?</h3>
                <p>We are offering partnerships across India. Specific territories are available based on existing partner presence in the region.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="opportunities-cta">
          <div className="opportunities-container">
            <div className="opportunities-cta-content">
              <h2>Start Your Business Journey Today</h2>
              <p>Join us and be part of India's renewable energy revolution</p>
              <div className="opportunities-cta-buttons">
                <button className="opportunities-btn-primary">Apply Now</button>
                <button className="opportunities-btn-secondary">Download Brochure</button>
              </div>
              <div className="opportunities-cta-contact">
                <p>📞 For inquiries: +91 9760401780, +91 9873890236</p>
                <p>✉️ bestelectricrepairingcenter@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Business;
