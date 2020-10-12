import Layout from '../components/Layout';
import {withRouter} from 'next/router';
import { gql } from '@apollo/client';
import client from "../components/ApolloClient";
import Product from "../components/Product";
import GET_CATEGORY_BY_ID from '../queries/get-categeory-by-id';

const Category = (props) => {
    const {categoryName, products} = props;

    return(
        <Layout>
            {categoryName ? <h3>{categoryName}</h3> : ''}
            <div className="product-container row">
                {products !== undefined && products.length ? (
                    products.map(product => 
                        <Product key={product.node.id} product={product.node} />
                        )
                ) : ''}
            </div>
        </Layout>
    ) 
}

Category.getInitialProps = async (context) => {

    let { query: { slug } } = context;

    const id = slug ? slug.split('-').pop() : context.query.id;

    const result = await client.query({query: GET_CATEGORY_BY_ID, variables: {id}});

    return{
        categoryName: result.data.productCategory.name,
        products: result.data.productCategory.products.edges
    }
}

export default withRouter(Category);