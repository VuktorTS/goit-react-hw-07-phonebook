import css from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';

import { addContact } from '../../redux/contactsSlice';
import { getContacts } from '../../redux/selectors';

import { nanoid } from '@reduxjs/toolkit';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const onSubmitForm = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const { name, number } = form.elements;

    const isInContacts = contacts.some(
      contact => name.value.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${name.value} is already in contacts`);
      return;
    }

    dispatch(addContact(name.value, number.value));

    form.reset();
  };
  return (
    <form action="" onSubmit={onSubmitForm} className={css.formContact}>
      <label className={css.formContactLable} htmlFor={nanoid()}>
        Name
        <input
          type="text"
          name="name"
          className={css.inputFormContact}
          required
        />
      </label>
      <label className={css.formContactLable} htmlFor={nanoid()}>
        Number
        <input
          type="tel"
          name="number"
          className={css.inputFormContact}
          required
        />
      </label>

      <button className={css.addContactBtn} type="submit">
        add contact
      </button>
    </form>
  );
};
