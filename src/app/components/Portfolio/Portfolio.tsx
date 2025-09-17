"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { Heart, Lock, ExternalLink, Grid } from "lucide-react";
import "./Portfolio.css";

type PortfolioItem = {
  id: number;
  category: string;
  title: string;
  imgUrl: string;
  likes: number;
  icon: ReactNode; // ✅ Fixed: Use ReactNode instead of JSX.Element
  locked: boolean;
};

const Portfolio = () => {
  const items: PortfolioItem[] = [
    {
      id: 1,
      category: "GALLERY",
      title: "NFT Dashboard Application Development.",
      imgUrl:
        "https://images.unsplash.com/photo-1602524814174-f89805da4e30?auto=format&fit=crop&w=800&q=80",
      likes: 1739,
      icon: <Grid size={18} />,
      locked: false,
    },
    {
      id: 2,
      category: "VIDEO",
      title: "Online Food Delivery Mobile App Design.",
      imgUrl:
        "https://images.unsplash.com/photo-1580657019800-3f3e0f858d8c?auto=format&fit=crop&w=800&q=80",
      likes: 82,
      icon: <Lock size={18} />,
      locked: true,
    },
    {
      id: 3,
      category: "EXTERNAL LINK",
      title: "Travel App Design Creativity & Application.",
      imgUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
      likes: 808,
      icon: <ExternalLink size={18} />,
      locked: false,
    },
    {
      id: 4,
      category: "WEB APP",
      title: "Fitness Tracker App Development.",
      imgUrl:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
      likes: 345,
      icon: <Grid size={18} />,
      locked: false,
    },
    {
      id: 5,
      category: "UI/UX",
      title: "Crypto Exchange Mobile UI.",
      imgUrl:
        "https://images.unsplash.com/photo-1504691342899-8d9d0a6113ef?auto=format&fit=crop&w=800&q=80",
      likes: 921,
      icon: <Lock size={18} />,
      locked: true,
    },
    {
      id: 6,
      category: "DESIGN",
      title: "Smart Home App Design & Branding.",
      imgUrl:
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=800&q=80",
      likes: 476,
      icon: <ExternalLink size={18} />,
      locked: false,
    },
  ];

  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <p className="portfolio-subtitle">
          VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK
        </p>
        <h2 className="portfolio-title">My Portfolio</h2>
      </div>

      <div className="portfolio-grid">
        {items.map((item) => (
          <div className="portfolio-card" key={item.id}>
            <div className="portfolio-image-wrapper">
              <Image
                src={item.imgUrl}
                alt={item.title}
                className="portfolio-image"
                width={800}
                height={500}
                style={{ objectFit: "cover" }} // ✅ Fixed: objectFit moved to style
              />
              <div className="portfolio-icon">{item.icon}</div>
            </div>
            <div className="portfolio-content">
              <span className="portfolio-category">{item.category}</span>
              <h3 className="portfolio-card-title">{item.title}</h3>
              <div className="portfolio-likes">
                <Heart size={16} className="heart-icon" />
                <span>{item.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
