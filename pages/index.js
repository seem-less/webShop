import Layout from "../components/Layout";
import Product from "../components/Product";
import { gql } from '@apollo/client';
import client from "../components/ApolloClient";

const PRODUCTS_QUERY = gql`query{
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
}`

/**
 * Index
 * 
 * @param props
 * @return {*}
 * @constructor 
 */

const Index = ( props ) => {
    
    const {products} = props;
    
    return(
    <Layout>
        <div className="product-container">
            {products.length ? (
                products.map(product => <Product key={product.id} product={ product } />)
            ) : ''}
        </div>
    </Layout>
    )
}

Index.getInitialProps = async () => {
    const result = await client.query({query: PRODUCTS_QUERY});

    return{
        products: result.data.products.nodes
    }
}

export default Index;