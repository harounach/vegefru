import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  shipping: {
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    fillBilling: false,
  },
  billing: {
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  },
  paymentMethod: "Credit Card",
};

const orderSlice = createSlice({
  name: "order",
  initialState: initialState,
  reducers: {
    addShipping(state, action) {
      state.shipping = action.payload;
    },
    addBilling(state, action) {
      state.billing = action.payload;
    },
    addPaymentMethod(state, action) {
      state.paymentMethod = action.payload;
    },
    resetOrder(state, action) {
      state.shipping = {
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        fillBilling: false,
      };

      state.billing = {
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
      };

      state.paymentMethod = "Credit Card";
    },
  },
});

// action creators
export const { addShipping, addBilling, addPaymentMethod, resetOrder } =
  orderSlice.actions;

// reducer
export default orderSlice.reducer;
