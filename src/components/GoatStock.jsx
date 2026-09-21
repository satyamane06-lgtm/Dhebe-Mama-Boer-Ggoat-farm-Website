import { useState } from 'react';
import { MessageCircle, Calendar, Weight, Heart, Tag, Star } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { goats } from '../data/goats';
import { BUSINESS, getWhatsAppLink } from '../data/config';

export default function GoatStock() {
  const [filter, setFilter] = useState('All');

  const featured = goats.find((g) => g.featured);
  const rest = goats.filter((g) => !g.featured);

  const filteredGoats = filter === 'All'
    ? rest
    : rest.filter((g) => g.status === filter);

  return (
    <section id="goats" className="section" aria-label="Our goats stock">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Our Stock</span>
          <h2>Our Pure Boer Goats</h2>
          <p>
            Browse our premium Boer goat stock — featuring our star breeder and available animals.
            Contact us on WhatsApp for pricing and live farm visit.
          </p>
        </div>

        {/* ⭐ FEATURED STAR BREEDER — HANDSOME */}
        {featured && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem',
              background: 'linear-gradient(135deg, #1a330e 0%, #2d5317 50%, #3a6b1e 100%)',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(26,51,14,0.25)',
            }}
          >
            {/* Image Side */}
            <div style={{ position: 'relative', minHeight: '360px', overflow: 'hidden' }}>
              <img
                src={featured.image}
                alt={`${featured.name} — Star Boer Breeder Buck at SidhiGanesh Goat Farm`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Instagram badge */}
              <div style={{
                position: 'absolute', top: '16px', left: '16px',
                background: 'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)',
                color: '#fff', padding: '6px 14px', borderRadius: '30px',
                fontSize: '0.78rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px',
              }}>
                <InstagramIcon size={12} /> From @dhebe.mama__boer_goat_farm
              </div>
              <div style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'rgba(255,215,0,0.95)', color: '#5c3a00',
                padding: '6px 14px', borderRadius: '30px',
                fontSize: '0.78rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '5px',
              }}>
                <Star size={12} fill="#5c3a00" /> STAR BREEDER
              </div>
            </div>

            {/* Info Side */}
            <div style={{ padding: '2.5rem', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{
                fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase',
                color: '#a8d977', marginBottom: '0.5rem',
              }}>
                🏆 Champion Breeder Buck
              </div>
              <h3 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', margin: '0 0 0.5rem', lineHeight: '1.2' }}>
                {featured.name}
              </h3>
              <div style={{ fontSize: '0.9rem', color: '#c5e8a0', marginBottom: '1rem', fontWeight: '600' }}>
                {featured.breed}
              </div>
              <p style={{ fontSize: '1rem', color: '#d4eebb', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                {featured.description}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: <Calendar size={14} />, label: 'Age', val: featured.age },
                  { icon: <Tag size={14} />, label: 'Gender', val: featured.gender },
                  { icon: <Weight size={14} />, label: 'Weight', val: featured.weight },
                  { icon: <Heart size={14} />, label: 'Health', val: featured.healthStatus },
                ].map(({ icon, label, val }) => (
                  <div key={label} style={{
                    background: 'rgba(255,255,255,0.08)', borderRadius: '10px',
                    padding: '0.6rem 0.9rem', display: 'flex', alignItems: 'center', gap: '8px',
                    fontSize: '0.85rem', color: '#e0f0cc',
                  }}>
                    <span style={{ color: '#a8d977' }}>{icon}</span>
                    <span><strong style={{ color: '#fff' }}>{label}:</strong> {val}</span>
                  </div>
                ))}
              </div>

              <a
                href={getWhatsAppLink(
                  `Hi! I'm interested in learning about your star breeder buck "HANDSOME". Please share details about his stud services and any kids for sale.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '0.85rem 1.5rem', borderRadius: '50px',
                  background: '#25D366', color: '#fff',
                  fontWeight: '700', fontSize: '1rem', textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(37,211,102,0.35)',
                }}
              >
                <MessageCircle size={18} />
                Enquire About HANDSOME on WhatsApp
              </a>
            </div>
          </div>
        )}

        {/* Filter Buttons */}
        <div className="goat-stock__filter">
          {['All', 'Available', 'Sold'].map((status) => (
            <button
              key={status}
              className={`goat-stock__filter-btn ${filter === status ? 'active' : ''}`}
              onClick={() => setFilter(status)}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Goat Cards Grid */}
        <div className="grid-3">
          {filteredGoats.map((goat) => (
            <div key={goat.id} className="goat-card">
              <div className="goat-card__image">
                <img
                  src={goat.image}
                  alt={`${goat.breed} ${goat.gender} goat at ${BUSINESS.name} in Maharashtra`}
                  loading="lazy"
                />
                <span
                  className={`goat-card__badge goat-card__badge--${goat.status.toLowerCase()}`}
                >
                  {goat.status}
                </span>
              </div>
              <div className="goat-card__body">
                <div className="goat-card__breed">{goat.breed}</div>
                <h3 className="goat-card__name">{goat.name}</h3>

                <div className="goat-card__health">
                  <Heart size={12} />
                  {goat.healthStatus}
                </div>

                <div className="goat-card__details">
                  <div className="goat-card__detail">
                    <Calendar size={14} />
                    <span>{goat.age}</span>
                  </div>
                  <div className="goat-card__detail">
                    <Tag size={14} />
                    <span>{goat.gender}</span>
                  </div>
                  <div className="goat-card__detail">
                    <Weight size={14} />
                    <span>{goat.weight}</span>
                  </div>
                </div>

                <div className="goat-card__price">{goat.price}</div>

                {goat.status === 'Available' && (
                  <a
                    href={getWhatsAppLink(
                      `Hi! I'm interested in the ${goat.breed} goat "${goat.name}" (${goat.age}, ${goat.weight}). Please share more details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--whatsapp btn--sm"
                    style={{ width: '100%' }}
                  >
                    <MessageCircle size={16} />
                    Enquire on WhatsApp
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
