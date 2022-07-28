
const initialState = {
  products: []
}

// products: [
//  {
//    brand: ""
//    name: ""
//    prices: [{}, {}]
//    attributes: [{}, {}]
//    amount: [{}, {}]
//  }
// ]

export const cartItemsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case "ADD_PRODUCT":
      return {...state, products: state.products.push(payload)}

    case "REMOVE_PRODUCT":
      return {...state, products: state.products.filter(product => product.name !== payload.name)}

    default:
      return state
  }
}