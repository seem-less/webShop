import Link from 'next/link'


export interface Category {
    __typename: string,
    name: string,
    id: string,
    slug: string,
    image?: {
        __typename: string,
        sourceUrl: string
    }
}

interface ParentCategoryBlockProps {
    key: string,
    category : Category
}

const ParentCategoryBlock = (props: ParentCategoryBlockProps) => {

    const {category} = props;
    return(
        <div className="col-lg-3 col-md-6 col-sm-12" >
            <h5 className="card-header text-header">{category.name}</h5>
            <Link as={`/category/${category.slug}-${category.id}`} href={`/category?slug=${category.slug}-${category.id}`} >
                <a>
                    <img src={category.image != null ? category.image.sourceUrl : ''} />
                </a>
            </Link>
        </div>
    )
}

export default ParentCategoryBlock;