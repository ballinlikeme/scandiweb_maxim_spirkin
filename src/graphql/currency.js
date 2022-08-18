import { gql } from "@apollo/client";
import { client } from "../index";

export const getCurrencies = async () => {
  let result = [];

  await client
    .query({
      query: gql`
        query {
          currencies {
            label
            symbol
          }
        }
      `,
    })
    .then((response) => {
      result = response.data.currencies;
    });
  return result;
};
