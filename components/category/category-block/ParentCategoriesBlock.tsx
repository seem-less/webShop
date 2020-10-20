import ParentCategoryBlock from "./ParentCategoryBlock";
import {Category} from "./ParentCategoryBlock";

export interface ParentCategoriesBlockProps {
    productCategories: Array<Category>
}

const ParentCategoriesBlock = (props: ParentCategoriesBlockProps) => {

    const {productCategories} = props;

    return(
        <div className="product-container row d-flex justify-content-center">
            {productCategories.length ? (
                productCategories.map( productCategory => 
                    <ParentCategoryBlock key={productCategory.id} category={productCategory} />
                )
            ) : ''}
        </div>
    )
}

export default ParentCategoriesBlock;