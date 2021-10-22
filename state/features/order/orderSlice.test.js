import orderReducer, {
  addShipping,
  addBilling,
  addPaymentMethod,
} from "./orderSlice";

describe("orderSlice", () => {
  test("should add shipping info", () => {
    const initialState = {
      shipping: {
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
      },
    };

    const shippingInfo = {
      fullName: "John Doe",
      address: "Address 2021",
      city: "Algiers",
      postalCode: "12000",
      country: "United States",
    };

    const newState = orderReducer(initialState, addShipping(shippingInfo));

    expect(newState.shipping.fullName).toBe(shippingInfo.fullName);
    expect(newState.shipping.address).toBe(shippingInfo.address);
    expect(newState.shipping.city).toBe(shippingInfo.city);
    expect(newState.shipping.postalCode).toBe(shippingInfo.postalCode);
    expect(newState.shipping.country).toBe(shippingInfo.country);
  });

  test("should add billing info", () => {
    const initialState = {
      billing: {
        fullName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
      },
    };

    const billingInfo = {
      fullName: "John Doe",
      address: "Address 2021",
      city: "Algiers",
      postalCode: "12000",
      country: "United States",
    };

    const newState = orderReducer(initialState, addBilling(billingInfo));

    expect(newState.billing.fullName).toBe(billingInfo.fullName);
    expect(newState.billing.address).toBe(billingInfo.address);
    expect(newState.billing.city).toBe(billingInfo.city);
    expect(newState.billing.postalCode).toBe(billingInfo.postalCode);
    expect(newState.billing.country).toBe(billingInfo.country);
  });

  test("should add payment method", () => {
    const initialState = {
      paymentMethod: "creditCard",
    };

    const paypal = "Paypal";

    const newState = orderReducer(initialState, addPaymentMethod(paypal));

    expect(newState.paymentMethod).toBe(paypal);
  });
});
