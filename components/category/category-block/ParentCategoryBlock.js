import Link from 'next/link'

const ParentCategoryBlock = (props) => {

    const {category} = props;

    return(
        <div className="col-lg-3 col-md-6 col-sm-12" >
            <h5 className="card-header text-header">{category.name}</h5>
            <Link as={`/category/${category.slug}-${category.id}`} href={`/category?slug=${category.slug}-${category.id}`} >
                <a>
                    <img src={category.image !== null ? category.image.sourceUrl : ''} />
                </a>
            </Link>
        </div>
    )
}

export default ParentCategoryBlock;