import Layout from "../components/Layout";
import { gql } from '@apollo/client';
import client from "../components/ApolloClient";
import ParentCategoriesBlock from "../components/category/category-block/ParentCategoriesBlock";

const CATEGORIES_QUERY = gql`query {
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

const Categories = (props) => {

    const {productCategories} = props;

    return(
        <Layout>
            {/* Categories */}
            <div className="text-center mt-5">
                <h2>Categories</h2>
                <ParentCategoriesBlock
                    productCategories={ productCategories }
                />
                
            </div>
        </Layout>
    )
}

Categories.getInitialProps = async () => {
    const result = await client.query({
        query: CATEGORIES_QUERY
    });

    return{
        productCategories: result.data.productCategories.nodes
    }
};

export default Categories;