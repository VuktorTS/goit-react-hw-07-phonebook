import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import css from './App.module.css';

import { useSelector } from 'react-redux';
import { getContacts } from '../redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

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
