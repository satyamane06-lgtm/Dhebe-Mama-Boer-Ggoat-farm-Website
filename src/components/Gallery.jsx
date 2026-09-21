import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { galleryImages, galleryCategories } from '../data/gallery';
import Lightbox from './Lightbox';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages =
    activeCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = () =>
    setLightboxIndex((prev) =>
      prev < filteredImages.length - 1 ? prev + 1 : 0
    );
  const goPrev = () =>
    setLightboxIndex((prev) =>
      prev > 0 ? prev - 1 : filteredImages.length - 1
    );

  return (
    <section id="gallery" className="section section--alt" aria-label="Farm photo gallery">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Gallery</span>
          <h2>Farm Gallery</h2>
          <p>
            Take a look at our goat farm, goats, daily activities, and farming
            practices through these photographs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="gallery__tabs" role="tablist">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={`gallery__tab ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
              role="tab"
              aria-selected={activeCategory === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="gallery__grid">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              className="gallery__item"
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              aria-label={`View ${img.alt}`}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery__item-overlay">
                <ZoomIn size={20} style={{ marginRight: '8px', color: 'white' }} />
                <span>{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      )}
    </section>
  );
}
