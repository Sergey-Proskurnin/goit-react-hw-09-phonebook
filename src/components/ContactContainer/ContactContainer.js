import React, { useState } from 'react';

import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Modal from 'components/Modal';

import s from './ContactContainer.module.css';

const ContactContainer = () => {
  const [showModal, setStateShowModal] = useState(false);

  const toggleModal = () => {
    setStateShowModal(!showModal);
  };

  return (
    <div className={s.contactContainer}>
      <Filter />
      <div className={s.contactList}>
        <ContactList toggleModal={toggleModal} />
      </div>
      {showModal && <Modal toggleModal={toggleModal} />}
    </div>
  );
};

export default ContactContainer;
