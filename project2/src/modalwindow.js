import React from "react";

function ModalWindow({ isOpen, onClose, title, imageSrc, description }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{title}</h2>
        <img src={imageSrc} alt={title} className="modal-image" />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ModalWindow;
