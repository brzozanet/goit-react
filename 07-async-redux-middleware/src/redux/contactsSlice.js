// import { createSlice, nanoid } from "@reduxjs/toolkit";

// // get from localStorage
// const contactsInitialState = JSON.parse(localStorage.getItem("contacts")) || [];

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         // set to localStorage
//         const newState = [...state, action.payload];
//         localStorage.setItem("contacts", JSON.stringify(newState));
//         return newState;
//       },
//       prepare(name, phone) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             phone,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       // set to localStorage
//       const newState = state.filter((contact) => contact.id !== action.payload);
//       localStorage.setItem("contacts", JSON.stringify(newState));
//       return newState;
//     },
//   },
// });

// // generatory akcji:
// export const { addContact, deleteContact } = contactsSlice.actions;

// // reducer slice'u
// export const contactsReducer = contactsSlice.reducer;

// NOTE: Async Redux

// import { createSlice } from "@reduxjs/toolkit";
// import { fetchContacts } from "./operations";

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: {
//     contacts: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.contacts = action.payload;
//       state.error = null;
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;

// NOTE: createAsyncThunk()

import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
        state.error = null;
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        const contactIndex = state.contacts.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.contacts.splice(contactIndex, 1);
        state.error = null;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;
