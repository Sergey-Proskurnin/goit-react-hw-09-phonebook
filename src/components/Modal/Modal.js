import React, { useEffect, useContext } from 'react';
import { useDispatch } from 'react-redux';

import contextProps from 'context/context';
import ContactFormChange from 'components/ContactFormChange';
import { contactChange } from 'redux/contacts';
import s from './Modal.module.css';

const Modal = () => {
  const dispatch = useDispatch();
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
      dispatch(contactChange({}));
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
