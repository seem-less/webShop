import Link from 'next/link';
import {useState, useContext} from 'react';
import { AppContext } from '../context/AppContext';
import { addFirstProduct, getFormattedCart, updateCart } from '../../functions';
import {v4} from 'uuid';
import { gql, useQuery, useMutation } from '@apollo/client';

const GET_CART = gql`query {
    cart {
      contents {
        nodes {
          key
          product {
            id
            productId
            name
            description
            type
            onSale
            slug
            averageRating
            reviewCount
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
            galleryImages {
              nodes {
                id
                sourceUrl
                srcSet
                altText
                title
              }
            }
          }
          variation {
            id
            variationId
            name
            description
            type
            onSale
            price
            regularPrice
            salePrice
            image {
              id
              sourceUrl
              srcSet
              altText
              title
            }
            attributes {
              nodes {
                id
                name
                value
              }
            }
          }
          quantity
          total
          subtotal
          subtotalTax
        }
      }
      appliedCoupons {
        nodes {
          couponId
          discountType
          amount
          dateExpiry
          products {
            nodes {
              id
            }
          }
          productCategories {
            nodes {
              id
            }
          }
        }
      }
      subtotal
      subtotalTax
      shippingTax
      shippingTotal
      total
      totalTax
      feeTax
      feeTotal
      discountTax
      discountTotal
    }
}`

const ADD_TO_CART = gql`mutation AddToCart($input: AddToCartInput! ){
    addToCart(input: $input) {
      cartItem {
        key
        product {
          id
          productId
          name
          description
          type
          onSale
          slug
          averageRating
          reviewCount
          image {
            id
            sourceUrl
            altText
          }
          galleryImages {
            nodes {
              id
              sourceUrl
              altText
            }
          }
        }
        variation {
          id
          variationId
          name
          description
          type
          onSale
          price
          regularPrice
          salePrice
          image {
            id
            sourceUrl
            altText
          }
          attributes {
            nodes {
              id
              attributeId
              name
              value
            }
          }
        }
        quantity
        total
        subtotal
        subtotalTax
      }
    }
  }`

const AddToCartButton = ( props ) => {

    const {product} = props;

    const productQryInput = {
        clientMutationId: v4(), // Generate a unique id.
        productId: product.productId
    }

    const [ cart, setCart ] = useContext(AppContext);
    const [ showViewCart, setShowViewCart] = useState(false);
    const [ requestError, setRequestError ] = useState(null);

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
                setRequestError(error.graphQlErrors[0].message);
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
                    <button className="black-seed-view-cart-btn btn btn-secondary">View Cart</button>
                </Link>
            ): ''}
        </>
    )
}

export default AddToCartButton;