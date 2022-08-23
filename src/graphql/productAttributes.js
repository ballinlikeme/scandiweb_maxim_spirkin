import { gql } from "@apollo/client";
import { client } from "../index";

export const getProductAttributes = async (id) => {
  return await client.query({
    query: gql`
          
               query {
                    product(id: "${id}") {
                         attributes {
                              name,
                              type,
                              items {
                                   displayValue,
                                   value
                              }
                         }
                    }
               }

          `,
  });
};
