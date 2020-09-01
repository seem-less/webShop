import Layout from "../components/Layout";
import Product from "../components/Product"

import clientConfig from "../client-config";
import fetch from 'isomorphic-unfetch';

const Index = ( props ) => {
    
    const {products} = props;
    
    return(
    <Layout>
        {products.length ? (
            products.map(product => <Product product={ product } />)
        ) : ''}
    </Layout>
    )
}

Index.getInitialProps = async () => {
    const res = await fetch(`${clientConfig.siteUrl}/getProducts`);
    const productsData = await res.json();

    return{
        products: productsData
    }
}

export default Index;