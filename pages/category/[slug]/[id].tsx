import Layout from '../../../components/Layout';
import {withRouter} from 'next/router';

import client from "../../../components/ApolloClient";
import GET_CATEGORY_BY_ID from '../../../queries/get-categeory-by-id';
import GET_CATEGORY_PATHS_QUERY from '../../../queries/get-category-paths';

import Product from "../../../components/Product";
import {ProductTypes} from "../../../components/Product";
import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';

interface CategoryInitialProps {
    props:{
        categoryName: String,
        products: Array<ProductTypes>
    }
}

type params = {
    slug: string
    id: string
}

type resultType = {
    productCategories: {
        nodes: Array<params>
    }
}

export const getStaticProps: GetStaticProps = async (context): Promise<CategoryInitialProps> => {

    const {params} = context;
    
    const result = await client.query({
                            query: GET_CATEGORY_BY_ID,
                            variables: {id: params.id}});

    return{
        props:{
            categoryName: result.data.productCategory.name,
            products: result.data.productCategory.products.edges
        }
    }
}

export const getStaticPaths: GetStaticPaths = async() => {
    const {data} = await client.query(
        {query: GET_CATEGORY_PATHS_QUERY  
        });

    let pathList = new Array();

    data.products.nodes.map((path) => {
        path.productCategories.nodes.map((category) => {
            pathList.push({
                params:{
                    slug: category.name.replace(/\s+/g, '-').toLowerCase(),
                    id: category.id
                }
            })
        });
    })
    
    return{
        paths: pathList,
        fallback: false
    }

}

const Category = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const {categoryName, products} = props;
    
    return(
        <Layout>
            {categoryName ? <h3>{categoryName}</h3> : ''}
            <div className="product-container row">
                {products !== undefined && products.length ? (
                    products.map((product) => 
                        <Product key={product.node.id} product={product.node} />
                        )
                ) : ''}
            </div>
        </Layout>
    ) 
}

export default Category;