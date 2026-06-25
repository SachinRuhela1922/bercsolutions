import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Testimonials.css";

function Testimonials() {
  return (
    <>
      <Navbar />
      <main className="testimonials-page">
        {/* Hero Section */}
        <section className="testimonials-hero">
          <div className="testimonials-container">
            <div className="testimonials-hero-content">
              <h1>What Our Customers Say</h1>
              <p>
                Real stories from real customers who trusted us for their 
                solar, inverter, generator, and battery needs
              </p>
            </div>
          </div>
        </section>

        {/* Rating Overview */}
        <section className="testimonials-rating-overview">
          <div className="testimonials-container">
            <div className="testimonials-rating-box">
              <div className="testimonials-rating-stats">
                <div className="testimonials-rating-big">
                  <span className="testimonials-rating-number">4.9</span>
                  <span className="testimonials-rating-stars">⭐⭐⭐⭐⭐</span>
                  <span className="testimonials-rating-total">Based on 2,500+ reviews</span>
                </div>
                <div className="testimonials-rating-bars">
                  <div className="testimonials-rating-bar">
                    <span>5 Stars</span>
                    <div className="testimonials-bar-track">
                      <div className="testimonials-bar-fill" style={{ width: '85%' }}></div>
                    </div>
                    <span>85%</span>
                  </div>
                  <div className="testimonials-rating-bar">
                    <span>4 Stars</span>
                    <div className="testimonials-bar-track">
                      <div className="testimonials-bar-fill" style={{ width: '10%' }}></div>
                    </div>
                    <span>10%</span>
                  </div>
                  <div className="testimonials-rating-bar">
                    <span>3 Stars</span>
                    <div className="testimonials-bar-track">
                      <div className="testimonials-bar-fill" style={{ width: '3%' }}></div>
                    </div>
                    <span>3%</span>
                  </div>
                  <div className="testimonials-rating-bar">
                    <span>2 Stars</span>
                    <div className="testimonials-bar-track">
                      <div className="testimonials-bar-fill" style={{ width: '1.5%' }}></div>
                    </div>
                    <span>1.5%</span>
                  </div>
                  <div className="testimonials-rating-bar">
                    <span>1 Star</span>
                    <div className="testimonials-bar-track">
                      <div className="testimonials-bar-fill" style={{ width: '0.5%' }}></div>
                    </div>
                    <span>0.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Testimonials */}
        <section className="testimonials-residential">
          <div className="testimonials-container">
            <h2>🏠 From Homeowners</h2>
            <p className="testimonials-subtitle">Real experiences from residential customers</p>
            
            <div className="testimonials-grid">
              <div className="testimonials-card">
                <div className="testimonials-card-header">
                  <div className="testimonials-user">
                    <div className="testimonials-avatar">RK</div>
                    <div>
                      <h3>Rajesh Kumar</h3>
                      <span>Mumbai, Maharashtra</span>
                    </div>
                  </div>
                  <div className="testimonials-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="testimonials-text">
                  "We installed a 5kW solar panel system for our home. The team was professional 
                  and completed the installation within 2 days. Our electricity bill has reduced 
                  by 70%! Highly recommend their solar solutions."
                </p>
                <div className="testimonials-tags">
                  <span>Solar Panel</span>
                  <span>5kW System</span>
                  <span>2024</span>
                </div>
              </div>

              <div className="testimonials-card">
                <div className="testimonials-card-header">
                  <div className="testimonials-user">
                    <div className="testimonials-avatar">SP</div>
                    <div>
                      <h3>Sunita Patel</h3>
                      <span>Ahmedabad, Gujarat</span>
                    </div>
                  </div>
                  <div className="testimonials-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="testimonials-text">
                  "I bought an inverter and battery for my home. The product quality is excellent 
                  and the after-sales support is amazing. They called me twice to check if everything 
                  is working fine. Truly exceptional service!"
                </p>
                <div className="testimonials-tags">
                  <span>Inverter</span>
                  <span>Battery</span>
                  <span>2024</span>
                </div>
              </div>

              <div className="testimonials-card">
                <div className="testimonials-card-header">
                  <div className="testimonials-user">
                    <div className="testimonials-avatar">AM</div>
                    <div>
                      <h3>Amit Mehta</h3>
                      <span>Delhi NCR</span>
                    </div>
                  </div>
                  <div className="testimonials-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="testimonials-text">
                  "Best decision I made for my home. The solar system works perfectly even during 
                  cloudy days. The installation team was very knowledgeable and answered all my 
                  questions patiently. 100% satisfied!"
                </p>
                <div className="testimonials-tags">
                  <span>Solar System</span>
                  <span>Home Backup</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Testimonials */}
        <section className="testimonials-commercial">
          <div className="testimonials-container">
            <h2>🏢 From Business Owners</h2>
            <p className="testimonials-subtitle">Trusted by businesses across industries</p>
            
            <div className="testimonials-grid">
              <div className="testimonials-card">
                <div className="testimonials-card-header">
                  <div className="testimonials-user">
                    <div className="testimonials-avatar">PS</div>
                    <div>
                      <h3>Priya Sharma</h3>
                      <span>Pune, Maharashtra</span>
                    </div>
                  </div>
                  <div className="testimonials-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="testimonials-text">
                  "We run a 50-employee office and needed a reliable power backup solution. 
                  They installed a 10kW solar system and generators for us. We've had zero 
                  power interruptions since. Their team is excellent!"
                </p>
                <div className="testimonials-tags">
                  <span>Solar System</span>
                  <span>Generator</span>
                  <span>2024</span>
                </div>
              </div>

              <div className="testimonials-card">
                <div className="testimonials-card-header">
                  <div className="testimonials-user">
                    <div className="testimonials-avatar">VK</div>
                    <div>
                      <h3>Vikram Khanna</h3>
                      <span>Bangalore, Karnataka</span>
                    </div>
                  </div>
                  <div className="testimonials-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="testimonials-text">
                  "Our restaurant needed a heavy-duty inverter system. These guys delivered 
                  beyond expectations. The system is silent, efficient, and has saved us a 
                  lot on electricity bills. Great service!"
                </p>
                <div className="testimonials-tags">
                  <span>Inverter</span>
                  <span>Commercial</span>
                  <span>2024</span>
                </div>
              </div>

              <div className="testimonials-card">
                <div className="testimonials-card-header">
                  <div className="testimonials-user">
                    <div className="testimonials-avatar">RR</div>
                    <div>
                      <h3>Rahul Reddy</h3>
                      <span>Hyderabad, Telangana</span>
                    </div>
                  </div>
                  <div className="testimonials-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="testimonials-text">
                  "We have a retail store chain with 5 locations. They provided complete 
                  power solutions for all our stores. The maintenance team is very responsive 
                  and we've never faced any major issues."
                </p>
                <div className="testimonials-tags">
                  <span>Retail</span>
                  <span>Power Backup</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Testimonials */}
        <section className="testimonials-industrial">
          <div className="testimonials-container">
            <h2>🏭 From Industrial Clients</h2>
            <p className="testimonials-subtitle">Powering industries with reliable solutions</p>
            
            <div className="testimonials-grid">
              <div className="testimonials-card">
                <div className="testimonials-card-header">
                  <div className="testimonials-user">
                    <div className="testimonials-avatar">SK</div>
                    <div>
                      <h3>Sanjay Kumar</h3>
                      <span>Ludhiana, Punjab</span>
                    </div>
                  </div>
                  <div className="testimonials-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="testimonials-text">
                  "Our factory runs 24/7 and we needed a reliable generator. They provided 
                  a 50kVA generator with automatic start. It's been 2 years and the performance 
                  is still outstanding. Highly professional team."
                </p>
                <div className="testimonials-tags">
                  <span>Generator</span>
                  <span>Industrial</span>
                  <span>2023</span>
                </div>
              </div>

              <div className="testimonials-card">
                <div className="testimonials-card-header">
                  <div className="testimonials-user">
                    <div className="testimonials-avatar">DG</div>
                    <div>
                      <h3>Deepak Gupta</h3>
                      <span>Faridabad, Haryana</span>
                    </div>
                  </div>
                  <div className="testimonials-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="testimonials-text">
                  "We installed a massive solar system for our warehouse. The savings on 
                  electricity bills have been incredible. The system is monitored remotely 
                  and we get regular performance reports. Great technology!"
                </p>
                <div className="testimonials-tags">
                  <span>Solar System</span>
                  <span>Warehouse</span>
                  <span>2024</span>
                </div>
              </div>

              <div className="testimonials-card">
                <div className="testimonials-card-header">
                  <div className="testimonials-user">
                    <div className="testimonials-avatar">MS</div>
                    <div>
                      <h3>Mohan Singh</h3>
                      <span>Jaipur, Rajasthan</span>
                    </div>
                  </div>
                  <div className="testimonials-rating">⭐⭐⭐⭐⭐</div>
                </div>
                <p className="testimonials-text">
                  "Our farm needed solar pumps and power backup. They customized a complete 
                  solution for us. Now we have reliable power for irrigation and farming 
                  equipment. Excellent products and service."
                </p>
                <div className="testimonials-tags">
                  <span>Solar Pumps</span>
                  <span>Agriculture</span>
                  <span>2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Special Categories */}
        <section className="testimonials-special">
          <div className="testimonials-container">
            <h2>⭐ Featured Testimonials</h2>
            <p className="testimonials-subtitle">Some of our most appreciated customer stories</p>
            
            <div className="testimonials-special-grid">
              <div className="testimonials-special-card testimonials-special-1">
                <span className="testimonials-quote">"</span>
                <p>
                  "I was skeptical about solar at first, but their team explained everything 
                  clearly. Now I'm saving ₹4,000 every month on electricity bills. Best investment 
                  for my home!"
                </p>
                <div className="testimonials-special-author">
                  <strong>Ananya Reddy</strong>
                  <span>Chennai, Tamil Nadu</span>
                </div>
                <div className="testimonials-special-badge">Most Helpful</div>
              </div>

              <div className="testimonials-special-card testimonials-special-2">
                <span className="testimonials-quote">"</span>
                <p>
                  "They completed our office solar installation in record time. The quality 
                  of products and professionalism of the team is unmatched. We're saving 
                  ₹15,000 monthly on electricity!"
                </p>
                <div className="testimonials-special-author">
                  <strong>Neeraj Malhotra</strong>
                  <span>Delhi NCR</span>
                </div>
                <div className="testimonials-special-badge">Top Rated</div>
              </div>

              <div className="testimonials-special-card testimonials-special-3">
                <span className="testimonials-quote">"</span>
                <p>
                  "We've been using their inverters and batteries for 3 years now. Never had 
                  any issue. Their products are durable and the warranty is truly honored. 
                  Highly recommended for anyone in India."
                </p>
                <div className="testimonials-special-author">
                  <strong>Sunil Tiwari</strong>
                  <span>Lucknow, UP</span>
                </div>
                <div className="testimonials-special-badge">Long Term</div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials Section */}
        <section className="testimonials-video">
          <div className="testimonials-container">
            <h2>📹 Video Testimonials</h2>
            <p className="testimonials-subtitle">Hear directly from our happy customers</p>
            
            <div className="testimonials-video-grid">
              <div className="testimonials-video-card">
                <div className="testimonials-video-placeholder">
                  <span>▶</span>
                </div>
                <h4>Home Solar Installation</h4>
                <p>Ravi from Mumbai shares his experience</p>
              </div>
              <div className="testimonials-video-card">
                <div className="testimonials-video-placeholder">
                  <span>▶</span>
                </div>
                <h4>Office Power Backup</h4>
                <p>Meera from Bangalore reviews our service</p>
              </div>
              <div className="testimonials-video-card">
                <div className="testimonials-video-placeholder">
                  <span>▶</span>
                </div>
                <h4>Factory Generator Setup</h4>
                <p>Amit from Pune shares his feedback</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="testimonials-cta">
          <div className="testimonials-container">
            <div className="testimonials-cta-content">
              <h2>Ready to Join Our Happy Customers?</h2>
              <p>Get the best power solutions for your home or business today</p>
              <div className="testimonials-cta-buttons">
                <button className="testimonials-btn-primary">Get a Free Quote</button>
                <button className="testimonials-btn-secondary">View Our Products</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Testimonials;