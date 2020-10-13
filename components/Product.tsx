import Link from 'next/link';
import AddToCartButton from './cart/AddToCartButton';

export interface ProductTypes {
        id: string,
        name: string,
        price: string,
        image: {
            uri: string,
            title: string,
            srcSet?: string,
            sourceUrl: string,
            description?: string, 
        },
        productId: number,
        averageRating: number,
        slug: string
}

export interface ProductProps {
    key: string
    product: ProductTypes
}

const Product = (props: ProductProps) => {

    const {product} = props;
    
    const productLink = `/product/${product.slug}-${product.productId}`;
    return (
        <div key={product.id} className="col-sm-6 col-lg-4 col-xl-3 isotope-item">
        {/* <!-- Thumbnail Classic--> */}
            <article className="thumbnail-classic block-1">
            <div className="thumbnail-classic-figure">

            <Link href={productLink}>
                <img
                    alt={product.name}
                    src={product.image.sourceUrl}
                />
            </Link>
            </div>
            <div className="thumbnail-classic-caption">
                <div>
                <h5 className="thumbnail-classic-title">
                {/* className={classes.name} */}
                    <Link href={productLink}>
                        <span>{product.name}</span>
                    </Link>
                </h5>
                {/* className={classes.price} */}
                <div className="thumbnail-classic-price">
                    {product.price}
                </div>
                <div className="thumbnail-classic-button-wrap">
                    <div className="thumbnail-classic-button">
                        <Link href={productLink}>
                            <a className="button button-gray-6 button-zakaria fl-bigmug-line-search74" />
                        </Link>
                    </div>
                    <div className="thumbnail-classic-button">
                    <AddToCartButton product={product} />
                </div>
                </div>
                </div>
            </div>
            </article>
        </div>
    )
}

export default Product

