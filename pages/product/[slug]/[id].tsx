import Layout from "../../../components/Layout";
import client from "../../../components/ApolloClient";
import GET_PRODUCT_PATHS_QUERY from '../../../queries/get-product-paths';
import PRODUCT_QUERY from '../../../queries/get-product-byId';
import { GetStaticProps, GetStaticPaths } from 'next';

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

export const getStaticProps: GetStaticProps = async ( context ) => {

    const {params} = context;
    const result = await client.query({query: PRODUCT_QUERY,variables: {id:params.id}});

    return{
        props:{
            product: result.data.simpleProduct
        }
    }
}

export const getStaticPaths: GetStaticPaths = async() => {
    const {data} = await client.query(
        {query: GET_PRODUCT_PATHS_QUERY  
        });

    let pathList = new Array();

    data.products.nodes.map((path) => {
        pathList.push({
            params:{
                slug: path.slug.replace(/\s+/g, '-').toLowerCase(),
                id: path.productId.toString()
            }
        })
    })
    
    return{
        paths: pathList,
        fallback: false
    }

}

export default Product;