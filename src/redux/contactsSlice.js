import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.contacts.push(action.payload);
      },
      prepare: (name, number) => {
        const id = nanoid();
        return { payload: { id, name, number } };
      },
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        constact => constact.id !== action.payload
      );
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
