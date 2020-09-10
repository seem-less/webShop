import Link from 'next/link';
import {useState, useContext} from 'react';
import { AppContext } from '../context/AppContext';
import { addFirstProduct, updateCart } from '../../functions';

const AddToCartButton = ( props ) => {

    const {product} = props;
    const [ cart, setCart ] = useContext(AppContext);
    const [ showViewCart, setShowViewCart] = useState(false);

    const handleAddToCartClick = () => {
        if(process.browser){
            let existingCart = localStorage.getItem('blackseed-cart');

            // If cart has item(s) already, then update the existing cart
            if( existingCart ){
                existingCart = JSON.parse( existingCart );
                const qtyToBeAdded = 1;

                const updatedCart = updateCart( existingCart, product, qtyToBeAdded );

                setCart( updatedCart );
            } else {
                /**
                 *  add first product.
                 */
                const newCart = addFirstProduct(product);
                setCart( newCart );
            }

            setShowViewCart(true);
        }
    }

    return (
        <>
            <button onClick= { handleAddToCartClick } className="btn btn-secondary">Add to cart</button>
            { showViewCart ? (
                <Link href="/cart">
                    <button className="black-seed-view-cart-btn btn btn-secondary">View Cart</button>
                </Link>
            ): ''}
        </>
    )
}

export default AddToCartButton;