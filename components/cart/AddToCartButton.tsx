import Link from 'next/link';
import {useState, useContext} from 'react';
import { AppContext } from '../context/AppContext';
import { addFirstProduct, getFormattedCart, updateCart, product } from '../../functions';
import {v4} from 'uuid';
import { useQuery, useMutation } from '@apollo/client';
import GET_CART from '../../queries/get-cart';
import ADD_TO_CART from '../../mutations/add-to-cart';

const AddToCartButton = ( {product}:{product:product} ) => {

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId
    }

    const [ cart, setCart ] = useContext(AppContext);
    const [ showViewCart, setShowViewCart] = useState(false);
    const [ requestError, setRequestError ] = useState<null | string>(null);

    const handleAddToCartClick = () => {
        setRequestError( null );
		addToCart();
	};

    /** FOR IF CONVERTING TO PWA (using localStorage) */
    // const handleAddToCartClick = () => {
    //     if(process.browser){
    //         let existingCart = localStorage.getItem('blackseed-cart');

    //         // If cart has item(s) already, then update the existing cart
    //         if( existingCart ){
    //             existingCart = JSON.parse( existingCart );
    //             const qtyToBeAdded = 1;

    //             const updatedCart = updateCart( existingCart, product, qtyToBeAdded );

    //             setCart( updatedCart );
    //         } else {
    //             /**
    //              *  add first product.
    //              */
    //             const newCart = addFirstProduct(product);
    //             setCart( newCart );
    //         }

    //         setShowViewCart(true);
    //     }
    // }

    // Get Cart Data.
    const {loading, error, data, refetch } = useQuery(GET_CART,{
        notifyOnNetworkStatusChange: true,
        onCompleted: () => {
            // Update cart in the localStorage.
            const updatedCart = getFormattedCart(data);
            localStorage.setItem('blackseed-cart', JSON.stringify(updatedCart));

            setCart(updatedCart);
        }
    });

    // Add to Cart Mutation
    const [addToCart, {
        data: addToCartRes,
        loading: addToCartLoading,
        error: addToCartError
    }] = useMutation(ADD_TO_CART, {
        variables:{
            input: productQryInput
        },
        onCompleted: () => {
            // if error.
            if(addToCartError){
                setRequestError(addToCartError.graphQLErrors[0].message);
            }

            // On success:
            // 1. Make the GET_CART query to update the cart with new values in React
            refetch();

            // 2. Show view cart button
            setShowViewCart(true);
        },
        onError: (error) => {
            if(error) {
                setRequestError(error.graphQLErrors[0].message);
            }
        }

    });

    return (
        <>
        	{/* Add To Cart Loading*/}
			{addToCartLoading && <p>Adding to Cart...</p>}

            <button onClick= { handleAddToCartClick } className="btn btn-secondary">Add to cart</button>
            { showViewCart ? (
                <Link href="/cart">
                    <button className="button button-primary button-zakaria fl-bigmug-line-shopping202">View Cart</button>
                </Link>
            ): ''}
        </>
    )
}

export default AddToCartButton;