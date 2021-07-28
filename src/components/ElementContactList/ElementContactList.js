import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { getVisibleContacts, deleteContact } from 'redux/contacts';

import s from './ElementContactList.module.css';

const ElementContactList = () => {
  const contacts = useSelector(state => getVisibleContacts(state));

  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(deleteContact(id));

  return contacts.map(({ name, number, id }) => {
    return (
      <li className={s.item} key={id}>
        <a className={s.link} href={`tel:${number}`}>
          <span className={s.span}>
            <ContactPhoneIcon color="primary" fontSize="large" />
          </span>
          <span className={s.spanLink}>
            {name}: {number}
          </span>
        </a>
        <button
          type="button"
          className={s.btnList}
          onClick={() => onDeleteContact(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ElementContactList;
