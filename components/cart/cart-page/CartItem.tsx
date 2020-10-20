import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { getUpdatedItems, image, products, item } from '../../../functions';
import { v4 } from 'uuid';

type updateCart = {

};

const CartItem = ({ item,
                    products,
                    updateCartProcessing,
                    handleRemoveProductClick,
                    updateCart}: {item: item, 
                                products: products,
                                updateCartProcessing: boolean,
                                handleRemoveProductClick: (event: React.MouseEvent<HTMLElement>, cartKey:string, products:products) => void,
                                updateCart: updateCart}) => {

    const [productCount, setProductCount ] = useState(item.qty);

    /**
     * When user changes the qty from product input update the cart in localstorage
     * Also update the cart in global context
     * 
     * @param {Object} event event
     * @return {void}
     */
    const handleQtyChange = (event:React.ChangeEvent<HTMLInputElement>, cartKey:string) => {
        if(process.browser){

            event.stopPropagation();

            // If the previous update cart mutation request is still processing, then return.
			if ( updateCartProcessing ) {
				return;
			}

            const newQty = ( event.target.value ) ? parseInt( event.target.value ) : 1;
            setProductCount(newQty);

            if ( products.length ) {

				const updatedItems = getUpdatedItems( products, newQty.toString(), cartKey );
				updateCart( {
					variables: {
						input: {
							clientMutationId: v4(),
							items: updatedItems
						}
					},
				} );
			}
        }
    }

    return(
        <tr className="blackseed-cart-item" key={item.productId}>
            {/* Cross Icon */}
            <th className="blackseed-cart-element blackseed-cart-el-close">
                <span className="blackseed-cart-close-icon" onClick={ (event) => handleRemoveProductClick( event, item.key, products) }>
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
                data-cart-key={item.key}
                className={`blackseed-cart-qty-input form-control ${ updateCartProcessing ? 'blackseed-cart-disabled' : '' }`}
                value={ productCount }
                onChange={( event ) => handleQtyChange( event, item.key )}/>
                { updateCartProcessing ?
					<img className="blackseed-cart-item-spinner" src="/cart-spinner.gif" alt="spinner"/> : '' }
            </td>
            {/* Total */}
            <td className="blackseed-cart-element">
                {( 'string' !== typeof item.totalPrice ) ? item.totalPrice.toFixed( 2 ) : item.totalPrice}
            </td>
        </tr>
    )
};

export default CartItem;