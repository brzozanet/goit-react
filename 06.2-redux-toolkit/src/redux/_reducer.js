// import { combineReducers } from "redux";

// const contactsInitialState = [];

// const contactsReducer = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case "contacts/addContact":
//       return [...state, action.payload];
//     case "contacts/deleteContact":
//       return state.filter((contact) => contact.id !== action.payload.id);
//     default:
//       return state;
//   }
// };

// const filterInitialStore = "";

// const filterReducer = (state = filterInitialStore, action) => {
//   switch (action.type) {
//     case "filter/filteredContacts":
//       return action.payload.query;
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// NOTE: Redux Toolkit

// import { createReducer } from "@reduxjs/toolkit";
// import { addContact, deleteContact, filteredContacts } from "./actions";

// const contactsInitialState = [
//   { id: 1, name: "Amelia Sarnowska", phone: "652310257" },
//   { id: 2, name: "Katarzyna Atemborska", phone: "632580125" },
//   { id: 3, name: "Malgorzata Gwiazdon", phone: "500126987" },
//   { id: 4, name: "Dorota Ruta", phone: "520147632" },
//   { id: 5, name: "Ilona Cynk Kastelik", phone: "200126845" },
// ];

// export const contactsReducer = createReducer(
//   contactsInitialState,
//   (builder) => {
//     builder
//       .addCase(addContact, (state, action) => {
//         return [...state, action.payload];
//         // state.push(action.payload);
//       })
//       .addCase(deleteContact, (state, action) => {
//         return state.filter((contact) => contact.id !== action.payload);
//       });
//   }
// );

// const filterInitialStore = "";

// export const filterReducer = createReducer(filterInitialStore, (builder) => {
//   builder.addCase(filteredContacts, (state, action) => {
//     return action.payload;
//   });
// });
