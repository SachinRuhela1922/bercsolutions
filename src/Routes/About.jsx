import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useRef, useState } from "react";
import "./About.css";

function About() {
  const [counts, setCounts] = useState({ 
    experience: 0, 
    projects: 0, 
    clients: 0, 
    awards: 0 
  });
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetCounts = { 
      experience: 12, 
      projects: 350, 
      clients: 280, 
      awards: 45 
    };
    const duration = 2000;
    const steps = 60;
    const increment = {
      experience: targetCounts.experience / steps,
      projects: targetCounts.projects / steps,
      clients: targetCounts.clients / steps,
      awards: targetCounts.awards / steps,
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounts((prev) => ({
        experience: Math.min(Math.round(increment.experience * currentStep), targetCounts.experience),
        projects: Math.min(Math.round(increment.projects * currentStep), targetCounts.projects),
        clients: Math.min(Math.round(increment.clients * currentStep), targetCounts.clients),
        awards: Math.min(Math.round(increment.awards * currentStep), targetCounts.awards),
      }));
      if (currentStep >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <>
      <Navbar />
      <main className="about-page-new">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="about-hero-bg"></div>
          <div className="about-hero-content">
            <div className="about-hero-text">
              <span className="about-tag">ABOUT US</span>
              <h1 className="about-hero-title">
                We're on a <span className="about-gradient-text">Mission</span> to<br />
                Transform Ideas into Reality
              </h1>
              <p className="about-hero-desc">
                We are a passionate team of innovators, designers, and engineers 
                dedicated to crafting digital experiences that make a difference.
              </p>
              <div className="about-hero-buttons">
                <button className="about-btn-primary">Explore Our Work</button>
                <button className="about-btn-outline">Contact Us</button>
              </div>
            </div>
            <div className="about-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&crop=center" 
                alt="Team collaboration" 
              />
              <div className="about-floating-card about-card-1">
                <span>🚀</span>
                <div>
                  <strong>12+ Years</strong>
                  <p>Of Excellence</p>
                </div>
              </div>
              <div className="about-floating-card about-card-2">
                <span>⭐</span>
                <div>
                  <strong>4.9/5</strong>
                  <p>Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="about-story">
          <div className="about-container">
            <div className="about-story-grid">
              <div className="about-story-image">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&crop=center" 
                  alt="Our story" 
                />
                <div className="about-story-experience">
                  <span>12</span>
                  <p>Years of<br />Innovation</p>
                </div>
              </div>
              <div className="about-story-text">
                <span className="about-section-tag">OUR STORY</span>
                <h2>Building the Future,<br />One Project at a Time</h2>
                <p>
                  Founded in 2014, we started with a simple belief: technology should 
                  serve humanity, not the other way around. Today, we're a global team 
                  of 50+ creative minds working across 15 countries.
                </p>
                <p>
                  We've helped 280+ businesses transform their digital presence, 
                  from startups to Fortune 500 companies, always pushing the boundaries 
                  of what's possible.
                </p>
                <div className="about-story-mission">
                  <div>
                    <span>🎯</span>
                    <div>
                      <strong>Our Mission</strong>
                      <p>Empower businesses through innovative digital solutions</p>
                    </div>
                  </div>
                  <div>
                    <span>👁️</span>
                    <div>
                      <strong>Our Vision</strong>
                      <p>Be the global leader in creative technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-stats-section" ref={statsRef}>
          <div className="about-container">
            <div className="about-stats-grid">
              <div className="about-stat-item">
                <span className="about-stat-number">{counts.experience}+</span>
                <span className="about-stat-label">Years Experience</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-number">{counts.projects}+</span>
                <span className="about-stat-label">Projects Completed</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-number">{counts.clients}+</span>
                <span className="about-stat-label">Happy Clients</span>
              </div>
              <div className="about-stat-item">
                <span className="about-stat-number">{counts.awards}+</span>
                <span className="about-stat-label">Awards Won</span>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="about-values">
          <div className="about-container">
            <div className="about-values-header">
              <span className="about-section-tag">OUR VALUES</span>
              <h2>What Drives Us Every Day</h2>
              <p>The principles that guide our work and define our culture</p>
            </div>
            <div className="about-values-grid">
              <div className="about-value-card">
                <div className="about-value-icon">💡</div>
                <h3>Innovation First</h3>
                <p>We constantly explore new technologies and approaches to deliver cutting-edge solutions.</p>
              </div>
              <div className="about-value-card">
                <div className="about-value-icon">🤝</div>
                <h3>Client Partnership</h3>
                <p>We treat our clients as true partners, working together to achieve shared success.</p>
              </div>
              <div className="about-value-card">
                <div className="about-value-icon">🎨</div>
                <h3>Design Excellence</h3>
                <p>Every pixel matters. We craft beautiful, intuitive experiences that users love.</p>
              </div>
              <div className="about-value-card">
                <div className="about-value-icon">🌍</div>
                <h3>Global Impact</h3>
                <p>We create solutions that make a positive impact on communities worldwide.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-team">
          <div className="about-container">
            <div className="about-team-header">
              <span className="about-section-tag">MEET THE TEAM</span>
              <h2>The People Behind the Magic</h2>
              <p>Passionate creators building the future together</p>
            </div>
            <div className="about-team-grid">
              <div className="about-team-card">
                <div className="about-team-img">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center" 
                    alt="Alex Rivera" 
                  />
                </div>
                <h4>Alex Rivera</h4>
                <p>CEO & Creative Director</p>
                <div className="about-team-social">
                  <a href="#">📱</a>
                  <a href="#">🐦</a>
                  <a href="#">🔗</a>
                </div>
              </div>
              <div className="about-team-card">
                <div className="about-team-img">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=center" 
                    alt="Jamie Chen" 
                  />
                </div>
                <h4>Jamie Chen</h4>
                <p>Lead Developer</p>
                <div className="about-team-social">
                  <a href="#">📱</a>
                  <a href="#">🐦</a>
                  <a href="#">🔗</a>
                </div>
              </div>
              <div className="about-team-card">
                <div className="about-team-img">
                  <img 
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=center" 
                    alt="Taylor Smith" 
                  />
                </div>
                <h4>Taylor Smith</h4>
                <p>UX/UI Designer</p>
                <div className="about-team-social">
                  <a href="#">📱</a>
                  <a href="#">🐦</a>
                  <a href="#">🔗</a>
                </div>
              </div>
              <div className="about-team-card">
                <div className="about-team-img">
                  <img 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=center" 
                    alt="Maria Garcia" 
                  />
                </div>
                <h4>Maria Garcia</h4>
                <p>Marketing Director</p>
                <div className="about-team-social">
                  <a href="#">📱</a>
                  <a href="#">🐦</a>
                  <a href="#">🔗</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="about-container">
            <div className="about-cta-content">
              <h2>Ready to Create Something <span className="about-gradient-text">Amazing</span>?</h2>
              <p>Let's collaborate and build the future together</p>
              <button className="about-btn-primary">Start Your Project</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;