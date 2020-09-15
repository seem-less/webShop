import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { updateCart, removeItemFromCart } from '../../../functions';

const CartItem = ({item, setCart, handleRemoveProductClick}) => {

    const [productCount, setProductCount ] = useState(item.qty);

    /**
     * When user changes the qty from product input update the cart in localstorage
     * Also update the cart in global context
     * 
     * @param {Object} event event
     * @return {void}
     */
    const handleQtyChange = (event) => {
        if(process.browser){
            const newQty = event.target.value;
            setProductCount(newQty);

            let existingCart = localStorage.getItem( 'blackseed-cart' );
            existingCart = JSON.parse(existingCart);

            // update the cart
            const updatedCart = updateCart(existingCart, item, false, newQty);

            setCart(updatedCart);
        }
    }

    return(
        <tr className="blackseed-cart-item" key={item.productId}>
            {/* Cross Icon */}
            <th className="blackseed-cart-element blackseed-cart-el-close">
                <span className="blackseed-cart-close-icon" onClick={ (event) => handleRemoveProductClick(event, item.productId) }>
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </span>
            </th>
            {/* Images */}
            <td className="blackseed-cart-element">
                <img width="64" src={item.image.sourceUrl} srcSet={item.image.srcSet} alt={item.image.title}/>
            </td>
            {/* Name of Product */}
            <td className="blackseed-cart-element">
                {item.name}
            </td>
            {/* Price */}
            <td className="blackseed-cart-element">
                {item.price.toFixed(2)}
            </td>
            {/* Quantity */}
            <td className="blackseed-cart-element">
                <input 
                type="number"
                min="1"
                className="blackseed-cart-qty-input"
                value={ productCount }
                onChange={handleQtyChange}/>
            </td>
            {/* Total */}
            <td className="blackseed-cart-element">
                {item.totalPrice}
            </td>
        </tr>
    )
};

export default CartItem;