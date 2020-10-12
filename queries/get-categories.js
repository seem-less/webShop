import { gql } from '@apollo/client';

const CATEGORIES_QUERY = gql`query {
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
export default CATEGORIES_QUERY;