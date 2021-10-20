import favoriteReducer, {
  favoriteAdded,
  favoriteDeleted,
} from "./favoriteSlice";

describe("favoriteSlice", () => {
  test("should add product to favorite", () => {
    const initialState = {
      ids: [],
      status: "idle",
      entities: {},
    };

    const newProduct = {
      id: "vege_6",
      name: "tomato",
      price: 2.17,
      qty_unit: "kg",
      rating: 5,
      reviews: 278,
      image: "images/vegetables/tomato",
    };

    const newState = favoriteReducer(initialState, favoriteAdded(newProduct));

    expect(newState.entities[newProduct.id]).not.toBeNull();
  });

  test("should delete product from cart", () => {
    const initialState = {
      ids: ["vege_6"],
      status: "idle",
      entities: {
        vege_6: {
          id: "vege_6",
          name: "tomato",
          price: 2.17,
          qty_unit: "kg",
          rating: 5,
          reviews: 278,
          image: "images/vegetables/tomato",
        },
      },
    };

    const productId = "vege_6";

    const deletedState = favoriteReducer(
      initialState,
      favoriteDeleted(productId)
    );
    expect(deletedState.entities[productId]).toBeUndefined();
  });
});
