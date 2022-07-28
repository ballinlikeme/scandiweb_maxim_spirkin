import { gql } from "@apollo/client";
import { client } from "../index";

export const getProductsInCategory = async (category) => {
  let result = [];

  await client
    .query({
      query: gql`
        query {
          category(input: { title: "${category}" }) {
            products {
              id,
              name,
              inStock,
              id,
              gallery,
              prices {
                currency {
                  label
                },
                amount
              }
            }
          }
        }
      `,
    })
    .then((response) => {
      result = response.data.category.products;
    });
  return result;
};
