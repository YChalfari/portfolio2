import { useState } from 'react';
import { createPortal } from 'react-dom';
import './ProjectGallery.css';

function normalizeMedia(item, index) {
  if (typeof item === 'string') {
    return { type: 'image', src: item, alt: `Image ${index + 1}` };
  }
  return {
    type: item.type || 'image',
    src: item.src,
    poster: item.poster,
    caption: item.caption,
    alt: item.alt || `Image ${index + 1}`,
  };
}

const ProjectGallery = ({ images, media, projectTitle }) => {
  const items = (media || images || []).map(normalizeMedia);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  if (items.length === 0) {
    return (
      <div className="gallery-placeholder">
        <span>No images available</span>
      </div>
    );
  }

  const openModal = (index) => {
    setModalIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const nextModalImage = () => {
    setModalIndex((prev) => (prev + 1) % items.length);
  };

  const prevModalImage = () => {
    setModalIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const renderVisual = (item, { inModal = false } = {}) => {
    if (item.type === 'video') {
      return (
        <video
          className={inModal ? 'gallery-modal-image' : 'gallery-main-image gallery-main-video'}
          src={item.src}
          poster={item.poster}
          muted={!inModal}
          loop
          playsInline
          autoPlay
          controls={inModal}
          aria-label={item.alt}
        />
      );
    }

    return (
      <img
        src={item.src}
        alt={item.alt || projectTitle}
        className={inModal ? 'gallery-modal-image' : 'gallery-main-image'}
      />
    );
  };

  const current = items[currentIndex];
  const modalItem = items[modalIndex];

  return (
    <>
      <div className="project-gallery">
        <div className="gallery-main" onClick={() => openModal(currentIndex)}>
          {renderVisual(current)}
          {items.length > 1 && (
            <>
              <button
                className="gallery-nav gallery-prev"
                onClick={(event) => {
                  event.stopPropagation();
                  prevImage();
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="gallery-nav gallery-next"
                onClick={(event) => {
                  event.stopPropagation();
                  nextImage();
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
        </div>
        {current.caption && <p className="gallery-caption">{current.caption}</p>}
        {items.length > 1 && (
          <div className="gallery-thumbnails">
            {items.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={`gallery-thumbnail ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={item.caption || `${projectTitle} media ${index + 1}`}
              >
                <img src={item.type === 'video' ? item.poster || item.src : item.src} alt="" />
              </button>
            ))}
          </div>
        )}
      </div>

      {isModalOpen && createPortal(
        <div className="gallery-modal" onClick={closeModal}>
          <button className="gallery-modal-close" onClick={closeModal} aria-label="Close gallery">
            ×
          </button>
          {items.length > 1 && (
            <>
              <button
                className="gallery-modal-nav gallery-modal-prev"
                onClick={(event) => {
                  event.stopPropagation();
                  prevModalImage();
                }}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="gallery-modal-nav gallery-modal-next"
                onClick={(event) => {
                  event.stopPropagation();
                  nextModalImage();
                }}
                aria-label="Next image"
              >
                ›
              </button>
            </>
          )}
          <div className="gallery-modal-content" onClick={(e) => e.stopPropagation()}>
            {renderVisual(modalItem, { inModal: true })}
            {modalItem.caption && <p className="gallery-modal-caption">{modalItem.caption}</p>}
            <div className="gallery-modal-counter">
              {modalIndex + 1} / {items.length}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default ProjectGallery;
