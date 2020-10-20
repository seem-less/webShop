import { gql } from '@apollo/client';

const PRODUCTS_AND_CATEGORIES_QUERY = gql`query{
    products(first: 10) {
      nodes {
        ... on SimpleProduct {
          id
          name
          price
          image {
            uri
            title
            srcSet
            sourceUrl
            description
          }
          productId
          averageRating
          slug
        }
      }
    }
    productCategories(first: 3) {
        nodes {
        name
        id
        slug
        image {
            sourceUrl
          }
        }
    }
  }`

export default PRODUCTS_AND_CATEGORIES_QUERY;