import {useContext, useState, useEffect} from 'react';
import {AppContext} from '../../context/AppContext';
import CartItem from './CartItem'; 
import { removeItemFromCart, getUpdatedItems, getFormattedCart } from '../../../functions';
import Link from 'next/link';
import UPDATE_CART from "../../../mutations/update-cart";
import GET_CART from '../../../queries/get-cart.js'
import CLEAR_CART_MUTATION from "../../../mutations/clear-cart";
import { useMutation, useQuery } from '@apollo/client';
import { v4 } from 'uuid';

const CartItemsContainer = () => {

    // @TODO for offline version (PWA)
    const[cart, setCart] = useContext(AppContext);
    const [requestError, setRequestError] = useState( null );

    // Get Cart Data.
    const {loading, error, data, refetch } = useQuery(GET_CART,{
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {

            // Update cart in the localStorage.
			const updatedCart = getFormattedCart( data );
			localStorage.setItem( 'blackseed-cart', JSON.stringify( updatedCart ) );

			// Update cart data in React Context.
			setCart( updatedCart );

        }
    });

    // Update Cart Mutation.
	const [updateCart, { data: updateCartResponse, loading: updateCartProcessing, error: updateCartError }] = useMutation( UPDATE_CART, {
		onCompleted: () => {
			refetch();
		},
		onError: ( error ) => {
			if ( error ) {
				setRequestError( error.graphQLErrors[ 0 ].message );
			}
		}
    } );
    
    // Clear Cart Mutation.
	const [clearCart, { data: clearCartRes, loading: clearCartProcessing, error: clearCartError }] = useMutation( CLEAR_CART_MUTATION, {
		onCompleted: () => {
			refetch();
		},
		onError: ( error ) => {
			if ( error ) {
				setRequestError( error.graphQLErrors[ 0 ].message );
			}
		}
	} );

    /**
     * Handle remove product click.
     * 
     * @param {Object} event 
     * @param {Object} products 
     * 
     * @return {void}
     */
	const handleRemoveProductClick = ( event, cartKey, products ) => {

		event.stopPropagation();
		if ( products.length ) {

			// By passing the newQty to 0 in updateCart Mutation, it will remove the item.
			const newQty = 0;
			const updatedItems = getUpdatedItems( products, newQty, cartKey );
			updateCart( {
				variables: {
					input: {
						clientMutationId: v4(),
						items: updatedItems
					}
				},
			} );
		}
    };
    
    // Clear the entire cart.
	const handleClearCart = ( event ) => {

		event.stopPropagation();

		if ( clearCartProcessing ) {
			return;
		}

		clearCart( {
			variables: {
				input: {
					clientMutationId: v4(),
					all: true
				}
			},
		} );
	}

    return(
        <div>
            { cart ? (
                <div className="blackseed-cart-wrapper container">
                    <h1 className="blackseed-cart-heading mt-5">Cart</h1>
                    <table className="table table-hover">
                    <thead>
                        <tr className="blackseed-cart-header-container">
                            <th className="blackseed-cart-heading" scope="col"/>
                            <th className="blackseed-cart-heading" scope="col"/>
                            <th className="blackseed-cart-heading" scope="col">Product</th>
                            <th className="blackseed-cart-heading" scope="col">Price</th>
                            <th className="blackseed-cart-heading" scope="col">Quantity</th>
                            <th className="blackseed-cart-heading" scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.products.length ? (
                            cart.products.map(item => (
                                <CartItem
                                key={item.productId}
                                item={ item }
                                updateCartProcessing={ updateCartProcessing }
                                products={ cart.products }
                                handleRemoveProductClick={ handleRemoveProductClick }
                                updateCart={ updateCart }
                                />
                            ))
                        ): ''}
                    </tbody>
                    </table>

                    {/*Clear entire cart*/}
					<div className="clear-cart">
						<button className="btn btn-secondary " onClick={ ( event ) => handleClearCart( event ) } disabled={ clearCartProcessing }>
							<span className="woo-next-cart">Clear Cart</span>
							<i className="fa fa-arrow-alt-right"/>
						</button>
						{ clearCartProcessing ? <p>Clearing...</p> : '' }
					</div>

                    {/* Display Errors if any */}
					{ requestError ? <div className="row woo-next-cart-total-container mt-5"> { requestError } </div> : '' }

                    {/* Cart Total */}
                    <div className="row blackseed-cart-total-container mt-5">
                        <h2>Cart Total</h2>
                        <table className="table table-hover">
                            <tbody>
                                <tr className="table-light">
                                    <td className="blackseed-cart-element-total">Subtotal</td>
                                    <td className="blackseed-cart-element-amt">{( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice}</td>
                                </tr>
                                <tr className="table-light">
                                    <td className="blackseed-cart-element-total">Total</td>
                                    <td className="blackseed-cart-element-amt">{( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Proceed to checkout */}
                    <Link href="/checkout">
                        <button className="btn btn-secondary blackseed-large-black">
                            <span className="blackseed-cart-checkout-text">
                                Proceed to Checkout
                            </span>
                        </button> 
                    </Link>
                </div>
            ) : (
            <div className="container mt-5">
            <h2>No items in the cart</h2>
                <Link href="/">
                    <button className="btn btn-secondary woo-next-large-black-btn">
                        <span className="woo-next-cart-checkout-txt">Add New Products</span>
                        <i className="fas fa-long-arrow-alt-right"/>
                    </button>
                </Link>
            </div>)
        }
        </div>
    )
};

export default CartItemsContainer;