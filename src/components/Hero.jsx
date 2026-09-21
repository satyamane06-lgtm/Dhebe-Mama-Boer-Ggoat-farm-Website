import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';
import InstagramIcon from './InstagramIcon';

function YoutubeIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}


export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Hero section">
      {/* Background Image */}
      <div className="hero__bg">
        <img
          src="/images/boer-herd-grazing.jpg"
          alt="SidhiGanesh Goat Farm panoramic view with goats grazing in Sangli Maharashtra"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="hero__overlay" />

      {/* Content */}
      <div className="hero__content">
        <div className="hero__badge">
          <span>🐐</span>
          <span>Trusted Goat Farm in Maharashtra</span>
        </div>

        <h1 className="hero__title">
          Premium Goat Farming &{' '}
          <span>Quality Goats</span> in Maharashtra
        </h1>

        <p className="hero__subtitle">
          Healthy, well-maintained and quality goats raised with proper care
          and responsible farming practices at our farm in Turchi, Tasgaon, Sangli.
        </p>

        <div className="hero__buttons">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--lg"
          >
            <MessageCircle size={20} />
            Contact on WhatsApp
          </a>
          <a
            href="https://www.instagram.com/dhebe.mama__boer_goat_farm"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--instagram btn--lg"
          >
            <InstagramIcon size={20} />
            See Instagram
          </a>
          <a
            href="https://www.youtube.com/@sidhiganeshboergoat9265"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--youtube btn--lg"
          >
            <YoutubeIcon size={20} />
            YouTube Channel
          </a>
        </div>

        <div className="hero__trust">
          {['Quality', 'Care', 'Healthy Goats', 'Trusted Service'].map((item) => (
            <div key={item} className="hero__trust-item">
              <div className="hero__trust-dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
