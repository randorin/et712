import React from 'react';
import './modalwindow.css'
function ModalWindow({ closeModal, content }) {
  if (!content) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>X</span>
        <h2>{content.name}</h2>
        <img src={content.image} alt={content.name} />
        <p>{content.detailedDescription}</p>

        {content.causeOfDeath && (
          <p><strong>Cause of death:</strong> {content.causeOfDeath}</p>
        )}
        {content.appearance && (
          <p><strong>Appears in:</strong> {content.appearance}</p>
        )}
      </div>
    </div>
  );
}

export default ModalWindow;
