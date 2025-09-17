'use client'; // only if using App Router

import { Volume2 } from 'lucide-react';
import Image from 'next/image';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container hero-desktop">
        {/* Left Column - Text Content */}
        <div className="hero-text">
          <p className="hero-welcome">WELCOME TO MY WORLD</p>
          <h1 className="hero-heading">
            Hi, I&apos;m <span className="gradient-text">Shabach Bako</span>
            <br />
          </h1>
          <p className="hero-description">
            I use animation as a third dimension by which to simplify experiences and guiding 
            through each and every interaction. I&apos;m not adding motion just to spruce things up, 
            but doing it in ways that.
          </p>
          <button className="hero-sound-button">
            <Volume2 size={20} />
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="hero-image">
          <div className="hero-image-container">
            <Image 
              src="/sha.png" // from public folder
              alt="Jone Lee - Professional Developer" 
              className="hero-profile-image"
              width={400}  // adjust to your image width
              height={400} // adjust to your image height
              priority     // preload for performance
            />
            <div className="hero-image-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
