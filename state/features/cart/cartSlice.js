import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter();
const initialState = cartAdapter.getInitialState({
  status: "Idle",
});

const cartSlice = createSlice({
  name: "cartProducts",
  initialState,
  reducers: {
    cartAdded: cartAdapter.addOne,
    cartDeleted: cartAdapter.removeOne,
    resetCart: cartAdapter.removeAll,
  },
});

// action creators
export const { cartAdded, cartDeleted, resetCart } = cartSlice.actions;

// selectors
export const { selectAll: selectCartProducts, selectById: selectCartById } =
  cartAdapter.getSelectors((state) => state.cartProducts);

export const selectCartProductsIds = createSelector(
  selectCartProducts,
  (products) => products.map((product) => product.id)
);

// reducer
export default cartSlice.reducer;
