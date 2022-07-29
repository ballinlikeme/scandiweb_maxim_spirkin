const initialState = {
  products: [],
};

// products: [
//  {
//    brand: ""
//    name: ""
//    prices: [{}, {}]
//    attributes: [{}, {}]
//    amount: 1
//  }
// ]

export const cartItemsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT":
      const currentProducts = state.products;

      const duplicatedProductIndex = currentProducts.findIndex((product) => {
        return (
          product.brand === payload.brand &&
          product.name === payload.name &&
          JSON.stringify(product.selectedAttributes) ===
            JSON.stringify(payload.selectedAttributes)
        );
      });

      if (duplicatedProductIndex > -1) {
        currentProducts[duplicatedProductIndex].amount++;
        return { ...state, products: currentProducts };
      }

      return { ...state, products: [...state.products, payload] };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.name !== payload.name
        ),
      };

    default:
      return state;
  }
};
