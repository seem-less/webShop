import Layout from "../components/Layout";
import client from "../components/ApolloClient";
import ParentCategoriesBlock from "../components/category/category-block/ParentCategoriesBlock";
import CATEGORIES_QUERY from "../queries/get-categories";
import { GetStaticProps } from 'next'
import {Category} from "../components/category/category-block/ParentCategoryBlock";

const Categories = (props: {productCategories: Array<Category>}) => {

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

export const getStaticProps: GetStaticProps = async () => {
    const result = await client.query({
        query: CATEGORIES_QUERY
    });

    return{
        props:{
            productCategories: result.data.productCategories.nodes
        }
    }
};

export default Categories;