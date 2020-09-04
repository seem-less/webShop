import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import client from "../components/ApolloClient";
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

const Product = ( props ) => {

    const { product } = props;

    return (
        <Layout>
            {product ? (
                <div className="card bg-light mb-3 p-5">
                    <div className="card-header">{ product.name }</div>
                    <div className="card-body">
                        <h4 className="card-title">{ product.name }</h4>
                        <img src={ product.image.sourceUrl } alt={ product.image.title } />
                        <p className="card-text">{ product.description }</p>
                    </div>
                </div>
            ) : ''}
        </Layout>

    )
}

Product.getInitialProps = async ( context ) => {

    let { query: { slug } } = context;

    const id = slug ? parseInt( slug.split('-').pop() ) : context.query.id

    const result = await client.query({query: PRODUCT_QUERY,variables: {id}});

    return{
        product: result.data.simpleProduct
    }
}

export default withRouter(Product);