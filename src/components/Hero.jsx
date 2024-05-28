import React from 'react';
import '../styles/hero.scss';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-top">
          <div className="hero-box hero-left">
            <h1 className="hero-heading">DUMMY CONTENT FOR TEMPLATE</h1>
            <div className="live-now-card">
              {/* Live now card content */}
            </div>
          </div>
          <div className="hero-box hero-right">
            <div className="countdown-card">
<h1> Match countdown card content</h1>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <div className="hero-box hero-bottom-box">
<h1>Bottom box content</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
