import Instagram from './InstagramIcon';
import { ExternalLink, Play } from 'lucide-react';
import { BUSINESS } from '../data/config';

export default function InstagramSection() {
  const instagramPosts = [
    {
      id: 1,
      type: 'post',
      title: '😎 HANDSOME — Our Star Boer Breeder Buck',
      url: 'https://www.instagram.com/dhebe.mama__boer_goat_farm/',
      img: `${import.meta.env.BASE_URL}images/handsome-boer-real.jpg`,
      likes: '2.4K+',
    },
    {
      id: 2,
      type: 'reel',
      title: 'Heavy Weight Breeding Male Buck',
      url: 'https://www.instagram.com/dhebe.mama__boer_goat_farm/',
      img: `${import.meta.env.BASE_URL}images/goat-boer.jpg`,
      likes: '5.1K+',
    },
    {
      id: 3,
      type: 'reel',
      title: 'Purebred Boer Female Doe Stock',
      url: 'https://www.instagram.com/dhebe.mama__boer_goat_farm/',
      img: `${import.meta.env.BASE_URL}images/goat-boer-doe.jpg`,
      likes: '3.8K+',
    },
    {
      id: 4,
      type: 'reel',
      title: 'Healthy Boer Goat Kids Group Update',
      url: 'https://www.instagram.com/dhebe.mama__boer_goat_farm/',
      img: `${import.meta.env.BASE_URL}images/goat-boer-kids.jpg`,
      likes: '4.2K+',
    },
  ];

  return (
    <section className="instagram" aria-label="Follow us on Instagram">
      <div className="container">
        <div className="instagram__header" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div className="instagram__icon" style={{ margin: '0 auto 1rem', display: 'inline-flex', padding: '1rem', background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)', borderRadius: '50%', color: '#fff' }}>
            <Instagram size={36} />
          </div>
          <h2 style={{ fontSize: '2rem', color: '#1a330e', marginBottom: '0.5rem' }}>
            Follow @dhebe.mama__boer_goat_farm on Instagram
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#4a5d40', maxWidth: '650px', margin: '0 auto 1.5rem' }}>
            Watch daily farm videos, Boer goat stock updates, breeding tips, and live video tours directly from our Instagram feed of <strong>21,000+ followers</strong>!
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <span style={{ background: '#eef6ea', color: '#2d5317', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: '600', fontSize: '0.95rem' }}>
              📸 290+ Photos & Reels
            </span>
            <span style={{ background: '#eef6ea', color: '#2d5317', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: '600', fontSize: '0.95rem' }}>
              👥 21.1K+ Followers
            </span>
            <span style={{ background: '#eef6ea', color: '#2d5317', padding: '0.4rem 1rem', borderRadius: '50px', fontWeight: '600', fontSize: '0.95rem' }}>
              🐐 100% Pure Boer Breed
            </span>
          </div>
        </div>

        {/* Instagram Post Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="insta-card"
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
                display: 'block',
                textDecoration: 'none',
                background: '#fff',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
            >
              <div style={{ height: '240px', position: 'relative', overflow: 'hidden' }}>
                <img
                  src={post.img}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0,0,0,0.65)',
                    color: '#fff',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  {post.type === 'reel' ? <Play size={12} fill="#fff" /> : <Instagram size={12} />}
                  {post.type.toUpperCase()}
                </div>
              </div>
              <div style={{ padding: '1.2rem', background: '#fff' }}>
                <h4 style={{ fontSize: '0.95rem', color: '#1a330e', margin: '0 0 0.5rem', lineHeight: '1.4', fontWeight: '600' }}>
                  {post.title}
                </h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: '#666' }}>
                  <span>❤️ {post.likes} Likes</span>
                  <span style={{ color: '#bc1888', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    View Post <ExternalLink size={12} />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="instagram__btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.9rem 2rem',
              borderRadius: '50px',
              fontSize: '1.05rem',
              fontWeight: '600',
              color: '#fff',
              background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              boxShadow: '0 8px 20px rgba(220,39,67,0.3)',
              textDecoration: 'none',
            }}
          >
            <Instagram size={20} />
            Visit Official Instagram Profile (@dhebe.mama__boer_goat_farm)
          </a>
        </div>
      </div>
    </section>
  );
}
