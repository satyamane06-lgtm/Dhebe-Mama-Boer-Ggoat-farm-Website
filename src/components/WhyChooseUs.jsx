import {
  HeartPulse,
  Wheat,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Users,
  MapPin,
  BadgeCheck,
} from 'lucide-react';
import { BUSINESS } from '../data/config';

const reasons = [
  {
    icon: HeartPulse,
    title: 'Healthy & Quality Goats',
    desc: 'Well-maintained goats with proper health records and vaccination.',
  },
  {
    icon: Wheat,
    title: 'Proper Feeding & Care',
    desc: 'Balanced nutrition with green fodder, dry feed, and mineral supplements.',
  },
  {
    icon: Leaf,
    title: 'Clean Farm Environment',
    desc: 'Hygienic farm conditions with regular cleaning and maintenance.',
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    desc: 'Honest information about goat health, breed, age, and pricing.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality Goat Selection',
    desc: 'Carefully selected goats with good genetics and breed characteristics.',
  },
  {
    icon: Users,
    title: 'Customer Support',
    desc: 'Helpful guidance on goat selection, care, and post-purchase queries.',
  },
  {
    icon: ShieldCheck,
    title: 'Easy WhatsApp Enquiry',
    desc: 'Quick and convenient enquiry process through WhatsApp messaging.',
  },
  {
    icon: MapPin,
    title: 'Convenient Farm Location',
    desc: `Easy to reach farm in ${BUSINESS.address.village}, ${BUSINESS.address.taluka}, ${BUSINESS.address.district}.`,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="section section--dark" aria-label="Why choose us">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Why Us</span>
          <h2>Why Choose {BUSINESS.name}?</h2>
          <p>
            We are committed to providing quality goats and a trustworthy
            farming experience for every customer.
          </p>
        </div>

        <div className="why__grid">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="why__item">
              <div className="why__item-icon">
                <Icon size={22} />
              </div>
              <div className="why__item-content">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
