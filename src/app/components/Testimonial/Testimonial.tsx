'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Star, Quote } from 'lucide-react';
import './Testimonial.css';

type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  project: string;
  date: string;
  text: string;
  rating: number;
};

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: 'Nevine Acotanza',
    role: 'Chief Operating Officer',
    company: 'RAINBOW-THEMES',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80',
    project: 'Android App Development',
    date: 'via Upwork – Mar 4, 2015 – Aug 30, 2021',
    text: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante. The attention to detail and professionalism exceeded our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80',
    project: 'E-commerce Web Platform',
    date: 'via Freelancer – Jan 5, 2018 – Jul 20, 2022',
    text: 'They delivered outstanding results! The project was on time and exceeded expectations. Their technical expertise and communication throughout the process was exceptional. Highly recommend their professionalism and expertise.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Smith Barney',
    role: 'Marketing Lead',
    company: 'CreativeAgency',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=500&q=80',
    project: 'Brand Identity & Campaign',
    date: 'via Fiverr – Oct 10, 2019 – Dec 15, 2023',
    text: 'Working with them was seamless and enjoyable. They understood our needs perfectly and crafted a brand strategy that completely transformed our online presence. The creative process was collaborative and inspiring.',
    rating: 5,
  },
];

const Testimonial = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === current) return;
    setIsAnimating(true);
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [current]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section">
      {/* Background effects */}
      <div className="testimonial-bg-gradient"></div>
      <div className="testimonial-bg-orb-1"></div>
      <div className="testimonial-bg-orb-2"></div>

      <div className="testimonial-container">
        {/* Header */}
        <div className="testimonial-header">
          <p className="testimonial-subtitle11">
            WHAT CLIENTS SAY
          </p>
          <h2 className="testimonial-main-title1">
            Testimonials
          </h2>
          <p className="testimonial-description1">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with us.
          </p>
        </div>

        {/* Main testimonial cards */}
        <div className="testimonial-cards-grid">
          {/* Profile Card */}
          <div 
            key={`profile-${current}`}
            className="testimonial-card testimonial-profile-card animate-slide-in-left"
          >
            <div className="testimonial-avatar-wrapper">
              <div className="testimonial-avatar-glow"></div>
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="testimonial-avatar"
              />
            </div>
            
            <div className="testimonial-profile-details">
              <span className="testimonial-company-badge">
                {testimonials[current].company}
              </span>
              <h3 className="testimonial-client-name">
                {testimonials[current].name}
              </h3>
              <p className="testimonial-client-role">
                {testimonials[current].role}
              </p>
            </div>
          </div>

          {/* Testimonial Content Card */}
          <div 
            key={`content-${current}`}
            className="testimonial-card animate-slide-in-right"
          >
            <div className="testimonial-content-header">
              <Quote className="testimonial-quote-icon" />
              <h3 className="testimonial-project-title">
                {testimonials[current].project}
              </h3>
            </div>
            
            <p className="testimonial-project-date">
              {testimonials[current].date}
            </p>
            
            {/* Star Rating */}
            <div className="testimonial-rating">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`testimonial-star ${
                    i < testimonials[current].rating ? 'filled' : 'empty'
                  }`} 
                />
              ))}
            </div>
            
            <blockquote className="testimonial-text">
              {testimonials[current].text}
            </blockquote>
          </div>
        </div>

        {/* Navigation */}
        <div className="testimonial-navigation">
          <button 
            className="testimonial-nav-button" 
            onClick={prevSlide}
            disabled={isAnimating}
            aria-label="Previous testimonial"
          >
            <ArrowLeft className="nav-icon" />
          </button>
          
          <button 
            className="testimonial-nav-button" 
            onClick={nextSlide}
            disabled={isAnimating}
            aria-label="Next testimonial"
          >
            <ArrowRight className="nav-icon" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === current ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;