import {
  createSlice,
  createEntityAdapter,
  createSelector,
} from "@reduxjs/toolkit";

const favoriteAdapter = createEntityAdapter();
const initialState = favoriteAdapter.getInitialState({
  status: "Idle",
});

const favoriteSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    favoriteAdded: favoriteAdapter.addOne,
    favoriteDeleted: favoriteAdapter.removeOne,
  },
});

// action creators
export const { favoriteAdded, favoriteDeleted } = favoriteSlice.actions;

// selectors
export const {
  selectAll: selectFavoriteProducts,
  selectById: selectFavoriteById,
} = favoriteAdapter.getSelectors((state) => state.favoriteProducts);

export const selectFavoriteProductsIds = createSelector(
  selectFavoriteProducts,
  (products) => products.map((product) => product.id)
);

// reducer
export default favoriteSlice.reducer;
