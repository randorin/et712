import React from 'react';
import PropTypes from 'prop-types';
import './modalwindow.css';

const ModalWindow = ({ isOpen, onClose, title, imageSrc, description }) => {
  if (!isOpen) return null;

  return (
    <div className="modal open">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>{title}</h2>
        <img src={imageSrc} alt={title} className="modal-image" />
        <p>{description}</p>
      </div>
    </div>
  );
}

ModalWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  description: PropTypes.string,
};

export default ModalWindow;
