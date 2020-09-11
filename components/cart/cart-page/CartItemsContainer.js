import {useContext} from 'react';
import {AppContext} from '../../context/AppContext';
import CartItem from './CartItem'; 

const CartItemsContainer = () => {

    const[cart, setCart] = useContext(AppContext);

    const handleRemoveProductClick = () => {
        
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
                </div>
            ) : ''}
        </div>
    )
};

export default CartItemsContainer;