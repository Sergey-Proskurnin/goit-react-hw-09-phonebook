// import React from 'react';
import alert from 'helpers/alert';

const addNoRepeatContact = (contact, contacts) => {
  const { name, number } = contact;
  if (
    contacts.some(
      contacts => contacts.name.toLowerCase() === name.toLowerCase(),
    )
  ) {
    alert(`${name} is already in contacts`);
    return;
  }
  if (contacts.some(contacts => contacts.number === number)) {
    alert(`${number} is already in contacts`);
    return;
  }
  return contact;
};

export default addNoRepeatContact;
