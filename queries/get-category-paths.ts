import { gql } from '@apollo/client';

const GET_CATEGORY_PATHS_QUERY = gql`query {
  products {
    nodes {
      productCategories {
        nodes {
          name
          id
        }
      }
    }
  }
}`
export default GET_CATEGORY_PATHS_QUERY;