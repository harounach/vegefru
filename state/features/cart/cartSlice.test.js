import cartReducer, { cartAdded, cartDeleted, resetCart } from "./cartSlice";

describe("cartSlice", () => {
  test("should add product to cart", () => {
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

    const newState = cartReducer(initialState, cartAdded(newProduct));

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

    const deletedState = cartReducer(initialState, cartDeleted(productId));
    expect(deletedState.entities[productId]).toBeUndefined();
  });

  test("should reset cart to initial state", () => {
    const initialState = {
      ids: ["vege_6", "fru_1"],
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
        fru_1: {
          id: "fru_1",
          name: "apple",
          price: 4.5,
          qty_unit: "kg",
          rating: 5,
          reviews: 480,
          image: "images/fruits/apple",
        },
      },
    };

    const resetState = cartReducer(initialState, resetCart());
    expect(resetState.entities).toStrictEqual({});
    expect(resetState.ids).toStrictEqual([]);
  });
});
