const CHANGE_CURRENCY = "CHANGE_CURRENCY";

const initialState = {
  currentCurrency: "USD",
  currentCurrencySymbol: "$",
};

export const currencyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_CURRENCY:
      return {
        ...state,
        currentCurrency: payload.currency,
        currentCurrencySymbol: payload.symbol,
      };

    default:
      return state;
  }
};
