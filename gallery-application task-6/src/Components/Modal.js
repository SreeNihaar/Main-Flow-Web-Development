// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ image, closeModal, nextImage, prevImage }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={closeModal}>×</button>
        <div className='prev'>
            <button className="modal-prev" onClick={prevImage}>‹</button>
        </div>
        <img src={image} alt="Modal" />
        <div className='next'>
            <button className="modal-next" onClick={nextImage}>›</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
