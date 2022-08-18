import { gql } from "@apollo/client";
import { client } from "../index";

export const getAllCategories = async () => {
  let result = [];

  await client
    .query({
      query: gql`
        query {
          categories {
            name
            name
          }
        }
      `,
    })
    .then((response) => {
      result = response.data.categories;
    });
  return result;
};
