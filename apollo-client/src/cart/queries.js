import gql from "graphql-tag";

export const cartQuery = gql`
  {
    cart {
      products {
        id
        brand
        name
        price
        image
      }
    }
  }
`;
