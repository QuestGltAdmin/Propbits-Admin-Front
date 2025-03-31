import { createSlice } from "@reduxjs/toolkit";

const helperSlice = createSlice({
  name: "helper",
  initialState: {
    currencies: [],
    selectedCurrency: ''
  },

  reducers: {
    setCurrencies: (state, action) => {
      state.currencies = action.payload
    },
    setSelectedCurrency: (state, action) => {
      state.selectedCurrency = action.payload
      localStorage.setItem('selectedCurrency', action.payload)
    },
  }
});

export const {
  setCurrencies,
  setSelectedCurrency
} = helperSlice.actions;

export default helperSlice.reducer;
