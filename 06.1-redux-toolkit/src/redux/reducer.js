import { combineReducers } from "redux";

const contactsInitialState = [
  { id: 1, name: "Amelia Sarnowska", phone: "652310257" },
  { id: 2, name: "Katarzyna Atemborska", phone: "632580125" },
  { id: 3, name: "Malgorzata Gwiazdon", phone: "500126987" },
  { id: 4, name: "Dorota Ruta", phone: "520147632" },
  { id: 5, name: "Ilona Cynk Kastelik", phone: "200126845" },
];

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return [...state, action.payload];
    case "contacts/deleteContact":
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      return state;
  }
};

const filterInitialStore = "";

const filterReducer = (state = filterInitialStore, action) => {
  switch (action.type) {
    case "filter/filteredContacts":
      return action.payload.query;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
