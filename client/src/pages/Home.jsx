import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Building the Future, Restoring the Past</h1>
          <p>Your trusted partner for residential and commercial construction.</p>
          <Link to="/contact" className="cta-button">Get a Quote</Link>
        </div>
      </section>

      <section className="services">
        <h2>Our Expertise</h2>
        <div className="service-grid">
          <div className="service-card">
            <span className="icon">🏗️</span>
            <h3>Construction</h3>
            <p>From skyscrapers to family homes, we build structures that last.</p>
          </div>
          <div className="service-card">
            <span className="icon">📐</span>
            <h3>Architecture</h3>
            <p>Blueprints and designs that merge functionality with aesthetics.</p>
          </div>
          <div className="service-card">
            <span className="icon">🔨</span>
            <h3>Renovation</h3>
            <p>Modernizing spaces while preserving their original character.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;