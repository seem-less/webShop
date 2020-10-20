import { gql } from '@apollo/client';

const GET_PRODUCT_PATHS_QUERY = gql`query {
  products {
    nodes {
      slug
      productId
    }
  }
}`
export default GET_PRODUCT_PATHS_QUERY;