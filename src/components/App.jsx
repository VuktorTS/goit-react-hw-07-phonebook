import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchAll } from 'services/api';

export const App = () => {
  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className={css.main}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        <p className={css.emptyInfo}>
          Your phonebook is empty. Add first contact!
        </p>
      )}
    </div>
  );
};
