import { Menu, BookOpen, Monitor, PenTool, Code, Users } from 'lucide-react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: Menu,
      title: "Business Strategy",
      description: "I throw myself down among the tall grass by the stream as I lie close to the earth."
    },
    {
      icon: BookOpen,
      title: "App Development",
      description: "We'll handle everything from the app development process until it is time to make your project live."
    },
    {
      icon: Monitor,
      title: "UI/UX Design",
      description: "We'll craft intuitive interfaces and seamless experiences to delight your users."
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description: "Creating compelling visuals, logos, and branding assets to elevate your business identity."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and high-performing websites that engage your audience."
    },
    {
      icon: Users,
      title: "Consulting",
      description: "Providing expert advice and actionable insights to grow and scale your business."
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <span className="features-label">FEATURES</span>
          <h2 className="features-heading">What I Do</h2>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="features-card">
                <div className="features-icon">
                  <IconComponent size={32} />
                </div>
                <h3 className="features-card-title">{feature.title}</h3>
                <p className="features-card-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
