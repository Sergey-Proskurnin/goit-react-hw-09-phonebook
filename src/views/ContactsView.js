import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import OnLoader from 'components/OnLoader';
import ContactForm from 'components/ContactForm';
import Container from 'components/Container';
import ContactContainer from 'components/ContactContainer';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import { getLoading } from 'redux/contacts/contacts-selectors';

import s from './Views.module.css';
import sAl from 'helpers/animation/animationLeft.module.css';
import sAr from 'helpers/animation/animationRight.module.css';

const ContactsView = () => {
  const isLoadingContacts = useSelector(state => getLoading(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={s.ContactsContainer}>
      <Container title="Phonebook">
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames={sAl}
          unmountOnExit
        >
          <ContactForm />
        </CSSTransition>
      </Container>

      <Container title="Contacts">
        {isLoadingContacts ? (
          <OnLoader />
        ) : (
          <CSSTransition
            in={true}
            appear={true}
            timeout={500}
            classNames={sAr}
            unmountOnExit
          >
            <ContactContainer />
          </CSSTransition>
        )}
      </Container>
    </div>
  );
};

export default ContactsView;
