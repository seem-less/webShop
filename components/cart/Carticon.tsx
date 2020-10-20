import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const CartIcon = () => {
    const [ cart, setCart ] = useContext(AppContext);
    const productsCount = (cart !== null && Object.keys(cart).length) ? cart.totalProductsCount : '';
    const totalProductsPrice = (cart !== null && Object.keys(cart).length) ? cart.totalProductsPrice : '';

    return(
        <>
            <Link href="/cart">
                <a>
                    <div className="black-seed-cart-wrap">
                        {totalProductsPrice ? <span>${totalProductsPrice.toFixed(2)}</span>:''}
                        <span className="black-seed-cart-icon-container">
                            <FontAwesomeIcon icon={faShoppingCart} className="black-seed-cart-icon" />
                            {productsCount ? <span className="black-seed-cart-count">{productsCount}</span>:''}
                        </span>
                    </div>
                </a>
            </Link>
        </>
    )
}

export default CartIcon;