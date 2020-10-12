import Layout from '../components/Layout';
import {withRouter} from 'next/router';

import { gql } from '@apollo/client';
import client from "../components/ApolloClient";
import GET_CATEGORY_BY_ID from '../queries/get-categeory-by-id';

import Product from "../components/Product";
import {ProductTypes} from "../components/Product";
import { GetStaticProps } from 'next'

interface ContextType {
    query: {
        id: string
        slug?: string;
    }
}

interface CategoryInitialProps {
    props:{
        categoryName: String,
        products: Array<ProductTypes>
    }
}

const export getStaticProps: GetStaticProps = async (context: ContextType): Promise<CategoryInitialProps> => {
    
    let { query: { slug } } = context;

    const id = slug ? slug.split('-').pop() : context.query.id;

    const result = await client.query({query: GET_CATEGORY_BY_ID, variables: {id}});

    return{
        props:{
            categoryName: result.data.productCategory.name,
            products: result.data.productCategory.products.edges
        }
    }
}

const Category = (props: CategoryInitialProps) => {
    const {categoryName, products} = props;

    return(
        <Layout>
            {categoryName ? <h3>{categoryName}</h3> : ''}
            <div className="product-container row">
                {products !== undefined && products.length ? (
                    products.map(product => 
                        <Product key={product.id} product={product} />
                        )
                ) : ''}
            </div>
        </Layout>
    ) 
}

export default withRouter(Category);