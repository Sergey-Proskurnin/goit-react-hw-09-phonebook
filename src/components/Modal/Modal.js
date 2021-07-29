import React, { useEffect } from 'react';

import s from './Modal.module.css';

const Modal = ({ toggleModal }) => {
  const onKeyDown = e => {
    if (e.key === 'Escape') {
      toggleModal(e);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  });

  return (
    <div onClick={toggleModal} className={s.Overlay}>
      <div className={s.Modal}>
        {/* <img src={this.props.modalImg} alt={this.props.modalAlt} /> */}
      </div>
    </div>
  );
};

export default Modal;
