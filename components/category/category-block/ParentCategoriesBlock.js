import ParentCategoryBlock from "./ParentCategoryBlock";

const ParentCategoriesBlock = (props) => {

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