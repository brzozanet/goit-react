import { createSlice, nanoid } from "@reduxjs/toolkit";

// get from localStorage
const contactsInitialState = JSON.parse(localStorage.getItem("contacts")) || [];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        // set to localStorage
        const newState = [...state, action.payload];
        localStorage.setItem("contacts", JSON.stringify(newState));
        return newState;
      },
      prepare(name, phone) {
        return {
          payload: {
            id: nanoid(),
            name,
            phone,
          },
        };
      },
    },
    deleteContact(state, action) {
      // set to localStorage
      const newState = state.filter((contact) => contact.id !== action.payload);
      localStorage.setItem("contacts", JSON.stringify(newState));
      return newState;
    },
  },
});

// generatory akcji:
export const { addContact, deleteContact } = contactsSlice.actions;

// reducer slice'u
export const contactsReducer = contactsSlice.reducer;
