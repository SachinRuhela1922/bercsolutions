// src/components/ProductDetail.jsx
import { useEffect } from 'react';
import './ProductDetail.css';

const ProductDetail = ({ product, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!product) return null;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('½');
    }
    while (stars.length < 5) {
      stars.push('☆');
    }
    return stars.join('');
  };

  return (
    <>
      {isOpen && <div className="product-sidebar-overlay" onClick={onClose} />}
      <div className={`product-sidebar ${isOpen ? 'open' : ''}`}>
        <button className="sidebar-close" onClick={onClose}>×</button>
        
        <div className="sidebar-content">
          <div className="product-gallery">
            <div className="main-image">
              <img src={product.images?.[0] || 'https://placehold.co/600x400/0f766e/ffffff?text=Product'} alt={product.name} />
            </div>
            {product.badge && <span className="detail-badge">{product.badge}</span>}
          </div>

          <div className="product-detail-info">
            <h2>{product.name}</h2>
            <div className="product-rating">
              <span className="stars">{renderStars(product.rating)}</span>
              <span className="rating-count">({product.reviews} reviews)</span>
            </div>
            
            <div className="product-pricing">
              <span className="current-price">{product.price}</span>
              {product.oldPrice && <span className="old-price">{product.oldPrice}</span>}
              {product.oldPrice && (
                <span className="discount">
                  Save {Math.round(((parseInt(product.oldPrice.replace(/[^0-9]/g, '')) - parseInt(product.price.replace(/[^0-9]/g, ''))) / parseInt(product.oldPrice.replace(/[^0-9]/g, ''))) * 100)}%
                </span>
              )}
            </div>

            <div className="product-specs">
              <h3>Technical Specifications</h3>
              <div className="specs-grid">
                {product.capacity && <div className="spec-item"><span className="spec-label">Capacity:</span><span className="spec-value">{product.capacity}</span></div>}
                {product.wattage && <div className="spec-item"><span className="spec-label">Wattage:</span><span className="spec-value">{product.wattage}</span></div>}
                {product.warranty && <div className="spec-item"><span className="spec-label">Warranty:</span><span className="spec-value">{product.warranty}</span></div>}
                {product.efficiency && <div className="spec-item"><span className="spec-label">Efficiency:</span><span className="spec-value">{product.efficiency}</span></div>}
                {product.cycles && <div className="spec-item"><span className="spec-label">Cycle Life:</span><span className="spec-value">{product.cycles} cycles</span></div>}
                {product.fuel && <div className="spec-item"><span className="spec-label">Fuel Type:</span><span className="spec-value">{product.fuel}</span></div>}
                {product.type && <div className="spec-item"><span className="spec-label">Type:</span><span className="spec-value">{product.type}</span></div>}
              </div>
            </div>

            <div className="product-description">
              <h3>Description</h3>
              <p>{product.longDescription || product.description}</p>
            </div>

            <div className="product-features-list">
              <h3>Key Features</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <span className="feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={() => alert('Product added to enquiry!')}>
                Enquire Now
              </button>
              <button className="get-quote-btn" onClick={() => {
                onClose();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}>
                Get Best Quote
              </button>
            </div>

            <div className="product-guarantee">
              <div className="guarantee-item">
                <span className="guarantee-icon">🔒</span>
                <div>
                  <strong>Secure Payment</strong>
                  <p>100% secure transactions</p>
                </div>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">🚚</span>
                <div>
                  <strong>Free Delivery</strong>
                  <p>Pan India delivery</p>
                </div>
              </div>
              <div className="guarantee-item">
                <span className="guarantee-icon">✅</span>
                <div>
                  <strong>Genuine Products</strong>
                  <p>Manufacturer warranty</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;