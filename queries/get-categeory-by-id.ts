import { gql } from '@apollo/client';

const GET_CATEGORY_BY_ID = gql`query Product_Category( $id: ID! ){
    productCategory(id: $id) {
        name
        products {
            edges {
                node {
                ... on SimpleProduct {
                        id
                        name
                        productId
                        slug
                        description
                        price
                        image {
                            uri
                            srcSet
                            sourceUrl
                            title
                        }
                    }
                }
            }
        }
    }
}
`
export default GET_CATEGORY_BY_ID;