import Link from 'next/link';
import { transparentPlaceholder } from '../transparentPlaceHolder';
import Product from '../Product';

import GET_CATEGORY_BY_ID from '../../queries/get-categeory-by-id';
import AddToCartButton from '../cart/AddToCartButton';
import { useQuery } from '@apollo/client';
import { useState } from 'react';

// The placeholder image is 4:5, so we should make sure to size our product
// images appropriately.
const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 375;

const UNCONSTRAINED_SIZE_KEY = 'default'

// Gallery switches from two columns to three at 640px.
const IMAGE_WIDTHS = new Map()
    .set(640, IMAGE_WIDTH)
    .set(UNCONSTRAINED_SIZE_KEY, 840);

const ItemPlaceholder = ({ classes }) => (
    <div className={classes.root_pending}>
        <div className={classes.images_pending}>
            <Image
                alt="Placeholder for gallery item image"
                classes={{
                    image: classes.image_pending,
                    root: classes.imageContainer
                }}
                src={transparentPlaceholder}
            />
        </div>
        <div className={classes.name_pending} />
        <div className={classes.price_pending} />
    </div>
);

const GallerySectionItem = props => {
    const {catId} = props;

    const [ productsInCategory, setProductsInCategory ] = useState(null);

    // Get products for given category ID.
    const {loading, error, data, refetch } = useQuery(GET_CATEGORY_BY_ID,{
        variables:{
            id: catId
        },
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            // Update cart in the localStorage.
            // const updatedCart = getFormattedCart(data);
            // localStorage.setItem('blackseed-cart', JSON.stringify(updatedCart));

            // setCart(updatedCart);
            // console.log(data.productCategory.products.edges);
            setProductsInCategory(data.productCategory.products.edges);
        }
    });

    const classes = {};

    // if (!products) {
    //     return <ItemPlaceholder classes={classes} />;
    // }
    //const productsInCategory = item.productImagePreview.items;
    let productItems;
    if (error) {
        productItems = (
            <div className={classes.fetchError}>
                Data Fetch Error: <pre>{error.message}</pre>
            </div>
        );
    }
    if (loading || !productsInCategory) {
        productItems = (
          <div>Loading...</div>
        );
    } else if (productsInCategory.length === 0) {
        productItems = (
            <div>No products found.</div>
        );
    } else {
        productItems = productsInCategory.map(product =>{
            <Product key={product.node.id} product={product.node} />
        });
    }
    
        
        // const productLink = `/product/${product.slug}-${product.productId}`;
        // return (
        //     <div key={product.id} className="col-sm-6 col-lg-4 col-xl-3 isotope-item" data-filter={catId}>
        //     {/* <!-- Thumbnail Classic--> */}
        //         <article className="thumbnail-classic block-1">
        //         <div className="thumbnail-classic-figure">

        //         <Link as={productLink} href={`/product?slug=${product.slug}-${product.productId}`}>
        //             <img
        //                 alt={product.name}
        //                 src={product.image.sourceUrl}
        //                 // classes={{
        //                 //     image: classes.image,
        //                 //     root: classes.imageContainer
        //                 // }}
        //                 //height={IMAGE_HEIGHT}
        //                 //width={IMAGE_WIDTHS}
        //             />
        //         </Link>
        //         </div>
        //         <div className="thumbnail-classic-caption">
        //             <div>
        //             <h5 className="thumbnail-classic-title">
        //             {/* className={classes.name} */}
        //                 <Link as={productLink} href={`/product?slug=${product.slug}-${product.productId}`}>
        //                     <span>{product.name}</span>
        //                 </Link>
        //             </h5>
        //             {/* className={classes.price} */}
        //             <div className="thumbnail-classic-price">
        //                 {product.price}
        //             </div>
        //             <div className="thumbnail-classic-button-wrap">
        //                 <div className="thumbnail-classic-button"><Link as={productLink} href={`/product?slug=${product.slug}-${product.productId}`} className="button button-gray-6 button-zakaria fl-bigmug-line-search74" > </Link></div>
        //                 <div className="thumbnail-classic-button">
        //                 <AddToCartButton product={product} />
        //             </div>
        //             </div>
        //             </div>
        //         </div>
        //         </article>
        //     </div>
        // )
   

    return (
        <>{productItems}</>
    );
};

// GallerySectionItem.propTypes = {
//     productsInCategory: shape({
//         id: number.isRequired,
//         name: string.isRequired,
//         small_image: string.isRequired,
//         url_key: string.isRequired,
//         price: shape({
//             regularPrice: shape({
//                 amount: shape({
//                     value: number.isRequired,
//                     currency: string.isRequired
//                 }).isRequired
//             }).isRequired
//         }).isRequired
//     })
// };

// GallerySectionItem.getInitialProps = async (context) => {

//     let { query: { slug } } = context;

//     const id = slug ? slug.split('-').pop() : context.query.id;

//     const result = await client.query({query: GET_CATEGORY_BY_ID, variables: {id}});

//     return{
//         catId: id,
//         categoryName: result.data.productCategory.name,
//         products: result.data.productCategory.products.edges
//     }
// }

export default GallerySectionItem;
