import {gql} from "@apollo/client";
import {client} from "../index";

export const getProductDetails = async (id) => {
  return await client.query({
    query: gql`
      query {
  product(id: "${id}") {
    name, brand, gallery, description, prices {
      currency {
        label, symbol
      }, amount
    }, attributes {
      name, type, items {
        value, displayValue, id
      }
    }
  }
}
    `
  }).then(response => {
    return response;
  })
}