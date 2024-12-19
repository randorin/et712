import React, { useState } from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';

const ModalWindow = ({ isOpen, onClose, content }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  const handleAddClick = () => {
    addToCart({ ...content, quantity });
    setSuccessMessage('Added to cart!');
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-icon" onClick={onClose}>&times;</span>
        <img src={content.image} alt={content.title} className="modal-image" />
        <h2>{content.title}</h2>
        <p>{content.description}</p>
        <p className="modal-price">{content.price}</p>
        <div className="quantity-selection">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            min="1"
            onChange={handleQuantityChange}
            className="quantity-input"
          />
        </div>
        <button onClick={handleAddClick} className="add-to-cart-btn">Add to Cart</button>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {successMessage && <Link to="/cart" className="go-to-cart-link">Go to Cart</Link>}
      </div>
    </div>
  );
};

export default ModalWindow;
