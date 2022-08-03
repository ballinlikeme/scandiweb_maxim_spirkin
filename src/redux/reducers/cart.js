
const ADD_PRODUCT = "ADD_PRODUCT"
const REMOVE_PRODUCT = "REMOVE_PRODUCT"
const INCREASE_AMOUNT = "INCREASE_AMOUNT"
const DECREASE_AMOUNT = "DECREASE_AMOUNT"

const initialState = {
  products: [],
};

// payload: {
//  name,
//  selectedAttributes,
// }

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
      const productIndex = products.findIndex(product => {
        return product.name ===
           payload.name &&
           JSON.stringify(product.selectedAttributes)
           === JSON.stringify(payload.selectedAttributes)
      })

      products[productIndex].amount++;
      return {...state, products: products};

    case DECREASE_AMOUNT:


      const allProducts = state.products;
      const selectedProductIndex = allProducts.findIndex(product => {
        return product.name ===
           payload.name &&
           JSON.stringify(product.selectedAttributes)
           === JSON.stringify(payload.selectedAttributes)
      })

      allProducts[selectedProductIndex].amount--;

      const amount = allProducts[selectedProductIndex].amount;

      if (amount === 0) {
        return {...state, products: state.products.filter(product => {
          return product.amount !== 0
          })}
      }

      return {...state, products: allProducts}

    default:
      return state;
  }
};
