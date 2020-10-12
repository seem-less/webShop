import Layout from "../components/Layout";
import { gql } from '@apollo/client';
import client from "../components/ApolloClient";
import ParentCategoriesBlock from "../components/category/category-block/ParentCategoriesBlock";
import CATEGORIES_QUERY from "../queries/get-categories";

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

Categories.getStaticProps = async () => {
    const result = await client.query({
        query: CATEGORIES_QUERY
    });

    return{
        productCategories: result.data.productCategories.nodes
    }
};

export default Categories;