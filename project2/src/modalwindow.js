import React from 'react';
import './modalwindow.css'; // Ensure your modal CSS is imported

function ModalWindow({ isOpen, onClose, title, imageSrc, description }) {
  if (!isOpen) return null; // Don't render the modal if it's not open

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{title}</h2>
        <img src={imageSrc} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ModalWindow;
