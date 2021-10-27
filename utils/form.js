import validator from "validator";

export const hasError = (data) => {
  return data.hasOwnProperty("errors");
};

/**
 * @typedef Result
 * @property {boolean} answer
 * @property {string} errorMessage
 */

/**
 * Check fullName
 * @param {string} fullName
 *
 * @returns {Result}
 */
export const isValidFullName = (fullName) => {
  let answer = false;
  let errorMessage = "";

  answer = fullName.length > 3 ? true : false;

  if (!answer) {
    errorMessage = "FullName must be more than 3 characters long";
  }

  return {
    answer,
    errorMessage,
  };
};

/**
 * Check address
 * @param {string} address
 *
 * @returns {Result}
 */
export const isValidAddress = (address) => {
  let answer = false;
  let errorMessage = "";

  answer = address.length > 3 ? true : false;

  if (!answer) {
    errorMessage = "Address must be more than 3 characters long";
  }

  return {
    answer,
    errorMessage,
  };
};

/**
 * Check city
 * @param {string} city
 *
 * @returns {Result}
 */
export const isValidCity = (city) => {
  let answer = false;
  let errorMessage = "";

  answer = city.length > 3 ? true : false;

  if (!answer) {
    errorMessage = "City must be more 3 characters long";
  }

  return {
    answer,
    errorMessage,
  };
};

/**
 * Check postalCode
 * @param {string} postalCode
 *
 * @returns {Result}
 */
export const isValidPostalCode = (postalCode) => {
  let answer = false;
  let errorMessage = "";

  answer = validator.isPostalCode(postalCode, "US");

  if (!answer) {
    errorMessage = "Postal Code is invalid";
  }

  return {
    answer,
    errorMessage,
  };
};

/**
 * Check country
 * @param {string} country
 *
 * @returns {Result}
 */
export const isValidCountry = (country) => {
  let answer = false;
  let errorMessage = "";

  answer = country.length > 3 ? true : false;

  if (!answer) {
    errorMessage = "Country must be more 3 characters long";
  }

  return {
    answer,
    errorMessage,
  };
};

/* 
 Product Specific
 **************************************************************
 */

/**
 * Check name
 * @param {string} name
 *
 * @returns {Result}
 */
export const isValidName = (name) => {
  let answer = false;
  let errorMessage = "";

  answer = name.length > 2 ? true : false;

  if (!answer) {
    errorMessage = "Name must be more 2 characters long";
  }

  return {
    answer,
    errorMessage,
  };
};

/**
 * Check price
 * @param {number} price
 *
 * @returns {Result}
 */
export const isValidPrice = (price) => {
  let answer = false;
  let errorMessage = "";

  answer = price > 0 ? true : false;

  if (!answer) {
    errorMessage = "Price is invalid";
  }

  return {
    answer,
    errorMessage,
  };
};

/**
 * Check qtyUnit
 * @param {string} qtyUnit
 *
 * @returns {Result}
 */
export const isValidQtyUnit = (qtyUnit) => {
  let answer = false;
  let errorMessage = "";

  const qtyUnitValues = ["head", "kg", "bunch"];

  answer = qtyUnitValues.includes(qtyUnit.toLowerCase());

  if (!answer) {
    errorMessage = "QtyUnit must be one of: head, kg, bunch";
  }

  return {
    answer,
    errorMessage,
  };
};

/**
 * Check image
 * @param {string} image
 *
 * @returns {Result}
 */
export const isValidImage = (image) => {
  let answer = false;
  let errorMessage = "";

  answer = image.length > 3 ? true : false;

  if (!answer) {
    errorMessage = "Image must be more 3 characters long";
  }

  return {
    answer,
    errorMessage,
  };
};

/**
 * Check countInStock
 * @param {number} countInStock
 *
 * @returns {Result}
 */
export const isValidCountInStock = (countInStock) => {
  let answer = false;
  let errorMessage = "";

  answer = countInStock > 0 ? true : false;

  if (!answer) {
    errorMessage = "CountInStock is invalid";
  }

  return {
    answer,
    errorMessage,
  };
};

/**
 * Check rating
 * @param {number} rating
 *
 * @returns {Result}
 */
export const isValidRating = (rating) => {
  let answer = false;
  let errorMessage = "";

  answer = rating > 0 ? true : false;

  if (!answer) {
    errorMessage = "Rating is invalid";
  }

  return {
    answer,
    errorMessage,
  };
};

/**
 * Check numReviews
 * @param {number} numReviews
 *
 * @returns {Result}
 */
export const isValidNumReviews = (numReviews) => {
  let answer = false;
  let errorMessage = "";

  answer = numReviews > 0 ? true : false;

  if (!answer) {
    errorMessage = "NumReviews is invalid";
  }

  return {
    answer,
    errorMessage,
  };
};
