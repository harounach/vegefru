import validator from "validator";

export const hasError = (data) => {
  return data.hasOwnProperty("errors");
};

/**
 * Check fullName
 * @param {string} fullName
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
