import { MessageCircle, Check } from 'lucide-react';
import { breeds } from '../data/breeds';
import { getWhatsAppLink } from '../data/config';

export default function GoatBreeds() {
  return (
    <section id="breeds" className="section section--alt" aria-label="Boer Goat Breed Specialty">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Specialty Breed</span>
          <h2>Pure South African Boer Goat</h2>
          <p>
            We specialize exclusively in raising and supplying pure South African Boer goats, 
            world-renowned for exceptional body weight gain, superior meat quality, and top breeding performance.
          </p>
        </div>

        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          {breeds.map((breed) => (
            <div key={breed.id} className="breed-card" style={{ gridTemplateColumns: '1fr' }}>
              <div className="breed-card__image" style={{ height: '320px' }}>
                <img
                  src={breed.image}
                  alt={`${breed.name} goat breed available at Dhebemama Goat Farm Maharashtra`}
                  loading="lazy"
                />
              </div>
              <div className="breed-card__body">
                <h3 className="breed-card__name" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
                  {breed.name} Goat Breed
                </h3>
                <p className="breed-card__desc" style={{ fontSize: '1.05rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                  {breed.description}
                </p>
                <div className="breed-card__chars" style={{ marginBottom: '1.5rem' }}>
                  {breed.characteristics.map((char) => (
                    <span key={char} className="breed-card__char" style={{ fontSize: '0.95rem' }}>
                      <Check size={14} color="#3a6b1e" />
                      {char}
                    </span>
                  ))}
                </div>
                <a
                  href={getWhatsAppLink(
                    `Hi! I'm interested in purchasing pure Boer breed goats. Please share current stock availability and prices.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  Enquire About Boer Stock on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
