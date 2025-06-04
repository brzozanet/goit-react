import { createSlice } from "@reduxjs/toolkit";

const filterInitialState = "";

const filterSlice = createSlice({
  name: "filter",
  initialState: filterInitialState,
  reducers: {
    filteredContacts(state, action) {
      return action.payload;
    },
  },
});

// generator akcji:
export const { filteredContacts } = filterSlice.actions;

// reducer slice'u
export const filterReducer = filterSlice.reducer;
