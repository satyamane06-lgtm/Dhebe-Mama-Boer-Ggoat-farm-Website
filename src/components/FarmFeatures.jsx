import {
  Leaf,
  Wheat,
  HeartPulse,
  HandHeart,
  Activity,
  Home,
} from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Clean Farm Environment',
    desc: 'We maintain a clean and hygienic farm environment with regular cleaning schedules and proper waste management.',
  },
  {
    icon: Wheat,
    title: 'Quality Feed',
    desc: 'Our goats are fed with balanced, nutritious feed including green fodder, dry feed, and essential minerals.',
  },
  {
    icon: HeartPulse,
    title: 'Healthy Goats',
    desc: 'Every goat receives regular health checkups, timely vaccinations, and deworming to ensure peak health.',
  },
  {
    icon: HandHeart,
    title: 'Proper Animal Care',
    desc: 'Our experienced team provides attentive daily care with a focus on each goat\'s well-being and comfort.',
  },
  {
    icon: Activity,
    title: 'Regular Monitoring',
    desc: 'We monitor goat health, weight gain, and behavior daily to catch and address any issues early.',
  },
  {
    icon: Home,
    title: 'Spacious Goat Housing',
    desc: 'Well-ventilated, spacious goat sheds with proper flooring, clean water access, and comfortable resting areas.',
  },
];

export default function FarmFeatures() {
  return (
    <section id="farm" className="section" aria-label="Inside our goat farm">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Farm</span>
          <h2>Inside Our Goat Farm</h2>
          <p>
            We take pride in maintaining a clean, organized, and well-managed goat
            farming facility in Turchi, Tasgaon, Sangli.
          </p>
        </div>

        <div className="grid-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="feature-card">
              <div className="feature-card__icon">
                <Icon size={28} />
              </div>
              <h3 className="feature-card__title">{title}</h3>
              <p className="feature-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
