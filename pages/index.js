import Layout from "../components/Layout";
import Product from "../components/Product";
import ParentCategoriesBlock from "../components/category/category-block/ParentCategoriesBlock";
import { gql } from '@apollo/client';
import client from "../components/ApolloClient";

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

/**
 * Index
 * 
 * @param props
 * @return {*}
 * @constructor 
 */

const Index = ( props ) => {
    
    const {products, productCategories} = props;
    
    return(
    <Layout>
        {/* Categories */}
        <div className="mt-5 text-center">
          <h2>Categories</h2>
          <ParentCategoriesBlock productCategories={productCategories} />
        </div>

        {/* Products */}
        <h2 className="mt-5 text-center">Products</h2>
        <div className="product-container">
            {products.length ? (
                products.map(product => <Product key={product.id} product={ product } />)
            ) : ''}
        </div>
    </Layout>
    )
}

Index.getInitialProps = async () => {
    const result = await client.query({query: PRODUCTS_AND_CATEGORIES_QUERY});

    return{
      products: result.data.products.nodes,
      productCategories: result.data.productCategories.nodes
    }
}

export default Index;