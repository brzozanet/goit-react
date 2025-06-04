import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from "./contactsSlice";

axios.defaults.baseURL = "https://65d1f7f4987977636bfbbb88.mockapi.io/";

// export const fetchContacts = () => async (dispatch) => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.get("/contacts");
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//     console.error(`Wystąpił błąd: ${error}, ${error.message}`);
//   }
// };

// NOTE: createAsyncThunk()

export const fetchContacts = createAsyncThunk(
  "contacts/fetch",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/add",
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", { name, phone });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/delete",
  async (contactID, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactID}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
