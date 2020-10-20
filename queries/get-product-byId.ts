import { gql } from '@apollo/client';

const PRODUCT_QUERY = gql` query Product( $id: Int ! ){
    simpleProduct(productId: $id) {
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
        averageRating
        slug
        productId
    }
}`

export default PRODUCT_QUERY;