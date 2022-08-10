const ADD_PRODUCT = "ADD_PRODUCT";
const REMOVE_PRODUCT = "REMOVE_PRODUCT";
const INCREASE_AMOUNT = "INCREASE_AMOUNT";
const DECREASE_AMOUNT = "DECREASE_AMOUNT";

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      const currentProducts = state.products;

      const duplicatedProductIndex = currentProducts.findIndex((product) => {
        return (
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

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.name !== payload.name
        ),
      };

    case INCREASE_AMOUNT:
      const products = state.products;
      const productIndex = products.findIndex((product) => {
        return (
          product.name === payload.name &&
          JSON.stringify(product.selectedAttributes) ===
            JSON.stringify(payload.selectedAttributes)
        );
      });

      products[productIndex].amount++;
      return { ...state, products: products };

    case DECREASE_AMOUNT:
      const index = state.products.findIndex((product) => {
        return (
          product.name === payload.name &&
          product.selectedAttributes === payload.selectedAttributes
        );
      });
      const allProducts = state.products;
      allProducts[index].amount--;
      console.log(index, allProducts);
      const productsLeft = allProducts.filter((product) => {
        return product.amount > 0;
      });
      console.log(productsLeft);
      return { ...state, products: productsLeft };

    default:
      return state;
  }
};
