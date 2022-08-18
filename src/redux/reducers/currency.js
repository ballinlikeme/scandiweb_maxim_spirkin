import { getFromLocalstorage, saveToLocalstorage } from "../../js/localstorage";

const CHANGE_CURRENCY = "CHANGE_CURRENCY";

const initialState = {
  currentCurrency: getFromLocalstorage("currency")?.currency || "USD",
  currentCurrencySymbol: getFromLocalstorage("currency")?.symbol || "$",
};

export const currencyReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_CURRENCY:
      saveToLocalstorage("currency", {
        currency: payload.currency,
        symbol: payload.symbol,
      });

      return {
        ...state,
        currentCurrency: payload.currency,
        currentCurrencySymbol: payload.symbol,
      };

    default:
      return state;
  }
};
