import Link from 'next/link';

const Product = (props) => {

    const {product} = props;
    return (
        <div className="card col-3 mb-3">
            <h3 className="card-header">{product.name}</h3>
            <Link as={`/product/${product.slug}-${product.productId}`} href={`/product?slug=${product.slug}-${product.productId}`} >
                <a>
                    <img src={product.image.sourceUrl} alt={product.name} />
                </a>
            </Link>
            <div className="card-body">
                <h6 className="card-subtitle text-center">{product.price}</h6>
            </div>
        </div>
    )
}

export default Product

