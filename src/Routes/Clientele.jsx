import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./Clientele.css";

function Clientele() {
  return (
    <>
      <Navbar />
      <main className="clientele-page">
        {/* Hero Section */}
        <section className="clientele-hero">
          <div className="clientele-container">
            <div className="clientele-hero-content">
              <h1>Our Clientele</h1>
              <p>
                Trusted by thousands of customers across India for reliable 
                solar panels, inverters, generators, and battery solutions
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="clientele-stats">
          <div className="clientele-container">
            <div className="clientele-stats-grid">
              <div className="clientele-stat">
                <span className="clientele-stat-number">10,000+</span>
                <span className="clientele-stat-label">Happy Customers</span>
              </div>
              <div className="clientele-stat">
                <span className="clientele-stat-number">500+</span>
                <span className="clientele-stat-label">Projects Completed</span>
              </div>
              <div className="clientele-stat">
                <span className="clientele-stat-number">98%</span>
                <span className="clientele-stat-label">Satisfaction Rate</span>
              </div>
              <div className="clientele-stat">
                <span className="clientele-stat-number">50+</span>
                <span className="clientele-stat-label">Cities Served</span>
              </div>
            </div>
          </div>
        </section>

        {/* Residential Clients */}
        <section className="clientele-residential">
          <div className="clientele-container">
            <h2>Residential Clients</h2>
            <p className="clientele-subtitle">Trusted by homeowners across the country</p>
            
            <div className="clientele-cards-grid">
              <div className="clientele-card">
                <div className="clientele-card-icon">🏠</div>
                <h3>Home Power Backup</h3>
                <p>Complete inverter + battery solutions for homes</p>
                <div className="clientele-card-tag">500+ Homes</div>
              </div>
              <div className="clientele-card">
                <div className="clientele-card-icon">☀️</div>
                <h3>Solar Panel Installation</h3>
                <p>Rooftop solar systems for residential buildings</p>
                <div className="clientele-card-tag">300+ Installations</div>
              </div>
              <div className="clientele-card">
                <div className="clientele-card-icon">🏘️</div>
                <h3>Apartment Complexes</h3>
                <p>Centralized power backup for apartment buildings</p>
                <div className="clientele-card-tag">50+ Complexes</div>
              </div>
              <div className="clientele-card">
                <div className="clientele-card-icon">🔋</div>
                <h3>Battery Replacements</h3>
                <p>Long-lasting battery solutions for homes</p>
                <div className="clientele-card-tag">1000+ Replacements</div>
              </div>
            </div>
          </div>
        </section>

        {/* Commercial Clients */}
        <section className="clientele-commercial">
          <div className="clientele-container">
            <h2>Commercial Clients</h2>
            <p className="clientele-subtitle">Powering businesses and enterprises</p>
            
            <div className="clientele-cards-grid">
              <div className="clientele-card">
                <div className="clientele-card-icon">🏢</div>
                <h3>Offices & Corporates</h3>
                <p>UPS and generator solutions for office buildings</p>
                <div className="clientele-card-tag">100+ Offices</div>
              </div>
              <div className="clientele-card">
                <div className="clientele-card-icon">🏪</div>
                <h3>Retail Stores</h3>
                <p>Inverter and battery backup for shops</p>
                <div className="clientele-card-tag">200+ Stores</div>
              </div>
              <div className="clientele-card">
                <div className="clientele-card-icon">🏨</div>
                <h3>Hotels & Restaurants</h3>
                <p>Heavy-duty generators and solar systems</p>
                <div className="clientele-card-tag">75+ Hotels</div>
              </div>
              <div className="clientele-card">
                <div className="clientele-card-icon">🏥</div>
                <h3>Hospitals & Clinics</h3>
                <p>Critical power backup solutions</p>
                <div className="clientele-card-tag">30+ Healthcare</div>
              </div>
            </div>
          </div>
        </section>

        {/* Industrial Clients */}
        <section className="clientele-industrial">
          <div className="clientele-container">
            <h2>Industrial Clients</h2>
            <p className="clientele-subtitle">Reliable power for heavy industries</p>
            
            <div className="clientele-cards-grid">
              <div className="clientele-card">
                <div className="clientele-card-icon">🏭</div>
                <h3>Factories & Manufacturing</h3>
                <p>Large capacity generators and solar systems</p>
                <div className="clientele-card-tag">40+ Factories</div>
              </div>
              <div className="clientele-card">
                <div className="clientele-card-icon">📦</div>
                <h3>Warehouses</h3>
                <p>Backup power for storage facilities</p>
                <div className="clientele-card-tag">25+ Warehouses</div>
              </div>
              <div className="clientele-card">
                <div className="clientele-card-icon">🚜</div>
                <h3>Agricultural Farms</h3>
                <p>Solar pumps and power solutions for farms</p>
                <div className="clientele-card-tag">150+ Farms</div>
              </div>
              <div className="clientele-card">
                <div className="clientele-card-icon">⛽</div>
                <h3>Fuel Stations</h3>
                <p>UPS and generator backup solutions</p>
                <div className="clientele-card-tag">20+ Stations</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="clientele-testimonials">
          <div className="clientele-container">
            <h2>What Our Clients Say</h2>
            <p className="clientele-subtitle">Real feedback from our satisfied customers</p>
            
            <div className="clientele-testimonials-grid">
              <div className="clientele-testimonial">
                <div className="clientele-testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p>"Excellent solar panel installation! The team was professional and completed the work on time. Our electricity bill has reduced significantly."</p>
                <div className="clientele-testimonial-author">
                  <strong>Rajesh Kumar</strong>
                  <span>Homeowner, Mumbai</span>
                </div>
              </div>

              <div className="clientele-testimonial">
                <div className="clientele-testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p>"We installed a 10kW solar system for our factory. The quality of service and product is outstanding. Highly recommend their services."</p>
                <div className="clientele-testimonial-author">
                  <strong>Priya Sharma</strong>
                  <span>Factory Owner, Pune</span>
                </div>
              </div>

              <div className="clientele-testimonial">
                <div className="clientele-testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p>"The inverter and battery solution for our office has been working perfectly. Their after-sales support is excellent and responsive."</p>
                <div className="clientele-testimonial-author">
                  <strong>Amit Patel</strong>
                  <span>Business Owner, Ahmedabad</span>
                </div>
              </div>

              <div className="clientele-testimonial">
                <div className="clientele-testimonial-rating">⭐⭐⭐⭐⭐</div>
                <p>"Best generator solution for our farm. Reliable power during emergencies and the maintenance service is top-notch."</p>
                <div className="clientele-testimonial-author">
                  <strong>Suresh Reddy</strong>
                  <span>Farmer, Telangana</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted Brands */}
        <section className="clientele-brands">
          <div className="clientele-container">
            <h2>Trusted Brands We Work With</h2>
            <p className="clientele-subtitle">Partners in powering your world</p>
            
            <div className="clientele-brands-grid">
              <div className="clientele-brand">
                <span>🔋</span>
                <p>Luminous</p>
              </div>
              <div className="clientele-brand">
                <span>⚡</span>
                <p>Microtek</p>
              </div>
              <div className="clientele-brand">
                <span>☀️</span>
                <p>SolarMax</p>
              </div>
              <div className="clientele-brand">
                <span>🔄</span>
                <p>Kirloskar</p>
              </div>
              <div className="clientele-brand">
                <span>🔋</span>
                <p>Exide</p>
              </div>
              <div className="clientele-brand">
                <span>⚡</span>
                <p>Havells</p>
              </div>
              <div className="clientele-brand">
                <span>☀️</span>
                <p>Waaree</p>
              </div>
              <div className="clientele-brand">
                <span>🔄</span>
                <p>Mahindra</p>
              </div>
            </div>
          </div>
        </section>

        {/* Map / Locations */}
        <section className="clientele-locations">
          <div className="clientele-container">
            <h2>Our Presence Across India</h2>
            <p className="clientele-subtitle">Serving customers in 50+ cities</p>
            
            <div className="clientele-locations-grid">
              <div className="clientele-location">
                <h3>North India</h3>
                <ul>
                  <li>Delhi NCR</li>
                  <li>Chandigarh</li>
                  <li>Lucknow</li>
                  <li>Jaipur</li>
                  <li>Amritsar</li>
                </ul>
              </div>
              <div className="clientele-location">
                <h3>West India</h3>
                <ul>
                  <li>Mumbai</li>
                  <li>Pune</li>
                  <li>Ahmedabad</li>
                  <li>Surat</li>
                  <li>Vadodara</li>
                </ul>
              </div>
              <div className="clientele-location">
                <h3>South India</h3>
                <ul>
                  <li>Bangalore</li>
                  <li>Chennai</li>
                  <li>Hyderabad</li>
                  <li>Coimbatore</li>
                  <li>Kochi</li>
                </ul>
              </div>
              <div className="clientele-location">
                <h3>East India</h3>
                <ul>
                  <li>Kolkata</li>
                  <li>Bhubaneswar</li>
                  <li>Patna</li>
                  <li>Guwahati</li>
                  <li>Ranchi</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="clientele-cta">
          <div className="clientele-container">
            <div className="clientele-cta-content">
              <h2>Join Our Happy Customers</h2>
              <p>Get the best power solutions for your home or business today</p>
              <button className="clientele-btn-primary">Get a Free Quote</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Clientele;