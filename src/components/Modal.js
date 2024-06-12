// src/components/Modal.js
import React from 'react';

const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const contentStyles = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  position: 'relative',
};

const closeButtonStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  cursor: 'pointer',
};

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div style={modalStyles} onClick={closeModal}>
      <div style={contentStyles} onClick={handleModalClick}>
        <span style={closeButtonStyles} onClick={closeModal}>
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
