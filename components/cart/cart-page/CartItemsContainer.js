import {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import CartItem from './CartItem'; 
import { removeItemFromCart } from '../../../functions';
import Link from 'next/link';

const CartItemsContainer = () => {

    const[cart, setCart] = useContext(AppContext);

    const handleRemoveProductClick = (event,productId) => {
        const updatedCart = removeItemFromCart(productId);

        setCart(updatedCart);
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
                                setCart= { setCart }
                                handleRemoveProductClick = {handleRemoveProductClick}
                                />
                            ))
                        ): ''}
                    </tbody>
                    </table>
                    {/* Cart Total */}
                    <div className="row blackseed-cart-total-container mt-5">
                        <h2>Cart Total</h2>
                        <table className="table table-hover">
                            <tbody>
                                <tr className="table-light">
                                    <td className="blackseed-cart-element-total">Subtotal</td>
                                    <td className="blackseed-cart-element-amt">{cart.totalProductsPrice}</td>
                                </tr>
                                <tr className="table-light">
                                    <td className="blackseed-cart-element-total">Total</td>
                                    <td className="blackseed-cart-element-amt">{cart.totalProductsPrice}</td>
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
            ) : ''}
        </div>
    )
};

export default CartItemsContainer;