import React, { useEffect, useContext } from 'react';

import contextProps from 'context/context';
import ContactFormChange from 'components/ContactFormChange';

import s from './Modal.module.css';

const Modal = () => {
  const toggleModal = useContext(contextProps);

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
  const closeModal = e => {
    console.dir(e.target);
    if (e.target.nodeName === 'DIV') {
      return toggleModal();
    }
  };

  return (
    <div onClick={closeModal} className={s.Overlay}>
      <div className={s.Modal}>
        <ContactFormChange />
      </div>
    </div>
  );
};

export default Modal;
