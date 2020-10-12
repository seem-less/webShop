import Layout from "../components/Layout";
import Product from "../components/Product";
import ParentCategoriesBlock from "../components/category/category-block/ParentCategoriesBlock";
import { gql } from '@apollo/client';
import client from "../components/ApolloClient";
import GallerySection from "../components/GallerySection/gallerySection";
import {ParentCategoriesBlockProps} from '../components/category/category-block/ParentCategoriesBlock';

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

const Index = (props: indexInitialProps) => {
    
    const {products, productCategories} = props;

    return(
    <Layout>
        {/* Categories */}
        <div className="mt-5 text-center">
          <h2>Categories</h2>
          <ParentCategoriesBlock productCategories={productCategories} />
          {/* <GallerySection /> */}
          {/* <GallerySectionItem catId={'dGVybToxNw=='} products={products} /> */}
        </div>



        {/* Products */}
        {/* <h2 className="mt-5 text-center">Products</h2>
        <div className="product-container">
            {products.length ? (
                products.map(product => <Product key={product.id} product={ product } />)
            ) : ''}
        </div> */}
    </Layout>
    )
}

export interface indexInitialProps extends ParentCategoriesBlockProps {
  products: {
    nodes:[{
      id: string,
      name: string,
      price: string,
      image: {
        uri: string,
        title: string,
        srcSet?: string,
        sourceUrl: string,
        description?: string, 
      },
      productId: number,
      averageRating: number,
      slug: string
    }]
  },
}

Index.getInitialProps = async (): Promise<indexInitialProps> => {
    const result = await client.query({query: PRODUCTS_AND_CATEGORIES_QUERY});

    return{
      products: result.data.products.nodes,
      productCategories: result.data.productCategories.nodes
    }
}

export default Index;