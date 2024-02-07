import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Zoom, toast } from 'react-toastify';

const instanse = axios.create({
  baseURL: 'https://65bd5dd5b51f9b29e9335ab7.mockapi.io',
});

const notify = () =>
  (toastId = toast.info('... Please wait a new contact is added', {
    autoClose: false,
    transition: Zoom,
  }));
const update = data =>
  toast.update(toastId, {
    render: `Added a new contact: ${data.name}`,
    type: 'success',
    autoClose: 2000,
    transition: Zoom,
  });

let toastId = null;

export const fetchAll = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instanse.get('/contacts');
      toast.info(`You have ${data.length} contacts`, { transition: Zoom });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      notify();
      const { data } = await instanse.post('/contacts', newContact);
      update(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/delContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await instanse.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
