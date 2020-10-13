import Layout from "../components/Layout";
import Product from "../components/Product";
import ParentCategoriesBlock from "../components/category/category-block/ParentCategoriesBlock";

import client from "../components/ApolloClient";
import PRODUCTS_AND_CATEGORIES_QUERY from "../queries/get-products-and-categories";

import { GetStaticProps } from 'next'
import GallerySection from "../components/GallerySection/gallerySection";
import {Category} from '../components/category/category-block/ParentCategoryBlock';
import {ProductTypes} from '../components/Product';

/**
 * Index
 * 
 * @param props
 * @return {*}
 * @constructor 
 */
const Index = (props:{products: Array<ProductTypes>,productCategories: Array<Category>}) => {
  
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
      <h2 className="mt-5 text-center">Products</h2>
      <div className="product-container">
          {products.length ? (
              products.map(product => <Product key={product.id} product={ product } />)
          ) : ''}
      </div>
  </Layout>
  )
}

export interface indexInitialProps {
  props:{
    products: Array<ProductTypes>,
    productCategories: Array<Category>
  }
}

export const getStaticProps: GetStaticProps = async(): Promise<indexInitialProps> => {
  const result = await client.query({query: PRODUCTS_AND_CATEGORIES_QUERY});
  
  return{
    props: {
      products: result.data.products.nodes,
      productCategories: result.data.productCategories.nodes
    }
  }
}

export default Index;