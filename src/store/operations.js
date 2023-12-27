//https://658476f04d1ee97c6bcfcd6d.mockapi.io/contacts
// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../components/configAxios/api';

// axios.defaults.baseURL = 'https://658476f04d1ee97c6bcfcd6d.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'fetchContacts',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get('contacts');

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await api.delete(`contacts/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'createContactThunk',
  async ({ name, number }, thunkAPI) => {
    try {
      const { data } = await api.post('contacts', {
        name: name,
        number: number,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
