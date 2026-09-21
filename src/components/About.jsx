import { Heart, Leaf, Shield, Users, Droplets, MapPin } from 'lucide-react';
import { BUSINESS, getWhatsAppLink } from '../data/config';

const features = [
  { icon: Heart, label: 'Healthy Goats' },
  { icon: Leaf, label: 'Quality Feed' },
  { icon: Shield, label: 'Proper Vaccination' },
  { icon: Droplets, label: 'Clean Environment' },
  { icon: Users, label: 'Customer Focused' },
  { icon: MapPin, label: 'Convenient Location' },
];

export default function About() {
  return (
    <section id="about" className="section section--alt" aria-label="About our goat farm">
      <div className="container">
        <div className="about__grid">
          {/* Image */}
          <div className="about__image">
            <img
              src="/images/dhebe-mama-logo.jpg"
              alt="Farmer caring for goats at SidhiGanesh Goat Farm in Turchi Tasgaon Sangli Maharashtra"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="about__content">
            <span className="section-label">About Us</span>
            <h2>About {BUSINESS.name}</h2>
            <p>
              We are a dedicated goat farming business located in {BUSINESS.address.full}.
              Our farm is committed to raising healthy, well-maintained goats using
              responsible farming practices and quality nutrition.
            </p>
            <p>
              At {BUSINESS.name}, we prioritize the health and well-being of every goat.
              From proper feeding schedules and clean housing to regular health monitoring
              and vaccination, we ensure that our goats receive the best possible care.
              We specialize exclusively in premium Boer goats, known for their
              exceptional genetics and growth.
            </p>
            <p>
              Whether you are looking to buy quality goats for breeding, farming, or other
              purposes, we are here to help. Our transparent approach and direct communication
              ensure you find exactly what you need.
            </p>

            <div className="about__features">
              {features.map(({ icon: Icon, label }) => (
                <div key={label} className="about__feature">
                  <div className="about__feature-icon">
                    <Icon size={18} />
                  </div>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
