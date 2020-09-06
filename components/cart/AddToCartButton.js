import Link from 'next/link';
import {useState, useContext} from 'react';
import { AppContext } from '../context/AppContext';
import { addFirstProduct } from '../../functions';

const AddToCartButton = ( props ) => {

    const {product} = props;
    const [ cart, setCart ] = useContext(AppContext);

    const handleAddToCartClick = () => {
        if(process.browser){
            let existingCart = localStorage.getItem('blackseed-cart');

            // If cart has item(s) already, then update the existing cart
            if( existingCart ){

            } else {
                /**
                 *  add first product.
                 */
                const newCart = addFirstProduct(product);
                setCart( newCart );
            }
        }
    }

    return (
        <>
            <button onClick= { handleAddToCartClick } className="btn btn-secondary">Add to cart</button>
        </>
    )
}

export default AddToCartButton;