import { v4 } from 'uuid';

/**
 * Application type definitions
 */
export type image = {
    sourceUrl: string,
    srcSet: string,
    title: string
}

export type product = {
    productId: number,
    name: string,
    qty: number,
    price: number|string,
    totalPrice: string,
    key: string,
    image: image
}

type preFormattedCart = {
    cart:{
        contents:{
            nodes: Array<{
                product: {
                    productId: product["productId"],
                    name: product["name"],
                    qty: product["qty"],
                    image: image
                },
                total: string,
                quantity: number,
                key: string
            }>
        },
        total: string
    }
}

export type errors = {
	fieldName: string
};

interface address {
    firstName: string,
    lastName: string,
    address1: string,
    address2: string,
    city: string,
    country: string,
    state: string,
    postcode: string,
    email: string,
    phone: string,
    company: string
}

export interface order extends address{
    paymentMethod: string
}

export interface CheckoutFormInitialState extends order {
	createAccount: boolean,
	orderNotes: string,
	errors: errors | null
}

type checkoutData = {
    clientMutationId:string,
    billing: address,
    shipping: address,
    shipToDifferentAddress: boolean,
    paymentMethod: order["paymentMethod"],
    isPaid: boolean,
    transactionId: string
}

export type updatedItems = {
    key: string,
    quantity: number
}

export type products = Array<{
    key: updatedItems["key"],
    qty: updatedItems["quantity"]
}>

export type item = {
    qty: number,
    productId: number,
    key: string,
    image: image,
    name: string,
    price: number,
    totalPrice: number|string
}

export const getFloatVal = (string: string):number | string => {
    /**
     * drop the first char (typically a currency sign) from price string in db
     * and return the value as a float
     */
    let floatValue:Array<string>|null = string.match( /[+-]?\d+(\.\d+)?/g );
    return ( floatValue !== null ) ? parseFloat( parseFloat(floatValue[0]).toFixed(2)) : '';
}

// FOR IF CONVERTING TO PWA (using localStorage) 
// export const addFirstProduct = ( product ) => {
//     let productPrice = getFloatVal( product.price );

//     // Create an empty array and push the item

//     let newCart = {
//         products: [],
//         totalProductsCount: 1,
//         totalProductsPrice: productPrice
//     }

//     const newProduct = createNewProduct( product, productPrice, 1 );
//     newCart.products.push(newProduct);

//     localStorage.setItem('blackseed-cart', JSON.stringify( newCart ));
//     return newCart;
// }

// NOT CURRENTLY BEING USED
// /**
//  * Create a new product object
//  * 
//  * @param product 
//  * @param productPrice 
//  * @param qty 
//  * @return object
//  */
// export const createNewProduct = (product:product, productPrice:number, qty:number) => {
//     return{
//         productId: product.productId,
//         image: product.image,
//         name: product.name,
//         price: productPrice,
//         qty: qty,
//         totalPrice: parseFloat((productPrice * qty).toFixed(2))
//     }
// }

// NOT CURRENTLY BEING USED
// export const updateCart = ( existingCart, product:product, qtyToBeAdded, newQty = false ) => {
    
//     const updatedProducts = getUpdatedProducts( existingCart.products, product, qtyToBeAdded, newQty);

//     const addPrice = (total, item) => {
//         total.totalPrice += item.totalPrice;
//         total.qty += item.qty;

//         return total;
//     }

//     // loop through the updated product array and add the totalPrice of each item to get the totalPrice.
//     let total = updatedProducts.reduce(addPrice, { totalPrice: 0, qty: 0 });

//     const updatedCart = {
//         products: updatedProducts,
//         totalProductsCount: parseInt(total.qty),
//         totalProductsPrice: parseFloat( total.totalPrice )
//     };

//     localStorage.setItem('blackseed-cart', JSON.stringify( updatedCart ));

//     return updatedCart;

// }


// NOT CURRENTLY BEING USED
// /**
//  * Get updated products array,
//  * Updated the product if it exists
//  * and add the new product to the existing cart
//  * 
//  * @param {*} existingProductsInCart 
//  * @param {*} product 
//  * @param {*} qtyToBeAdded 
//  * @param {*} newQty 
//  */

// export const getUpdatedProducts = (existingProductsInCart, product, qtyToBeAdded, newQty = false) => {
//     const ProductExistsIndex = isProductInCart(existingProductsInCart, product.productId);

//     // if product exists (index of that product is found in the array), update the product quantity and totalPrice
//     if(-1 < ProductExistsIndex){
//         let updatedProducts = existingProductsInCart;
//         let updatedProduct = updatedProducts[ ProductExistsIndex ];

//         // If we have the new qty of the product available, set that else add the qtyToBeAdded
//         updatedProduct.qty = (newQty) ? parseInt(newQty) : parseInt(updatedProduct.qty + qtyToBeAdded);
//         updatedProduct.totalPrice = parseFloat(updatedProduct.price * updatedProduct.qty ).toFixed(2);
        
//         return updatedProducts;
//     } else {
//         // if product not found push the new product to the existing products array.
//         let productPrice = getFloatVal( product.price );
//         const newProduct = createNewProduct( product, productPrice, qtyToBeAdded);
//         existingProductsInCart.push( newProduct );

//         return existingProductsInCart;
//     }
// }


// NOT USED CURRENTLY
// /**
//  * return index of the product if it exists
//  * 
//  * @param {*} existingProductsInCart 
//  * @param {*} productId 
//  * @return {number | *}
//  */

// export const isProductInCart = (existingProductsInCart, productId) => {
//     const returnItemThatExists = (item, index) => {
//         if( productId === item.productId ){
//             return item;
//         }
//     };

//     const newArray = existingProductsInCart.filter( returnItemThatExists );

//     return existingProductsInCart.indexOf( newArray[0] );
// }

// NOT CURRENTLY BEING USED
// export const removeItemFromCart = (productId) => {
//     // get the existing cart data.
//     let existingCart = localStorage.getItem( 'blackseed-cart' );
//     existingCart = JSON.parse(existingCart);

//     // if there is only one item in the cart, delete the cart
//     if(1 === existingCart.products.length){
//         localStorage.removeItem('blackseed-cart');
//         return null;
//     }

//     // check if the product already exists in the cart
//     const productExistsIndex = isProductInCart(existingCart.products, productId);

//     // if product to be removed exists
//     if(-1 < productExistsIndex){
//         const productToBeRemoved = existingCart.products[productExistsIndex];
//         const qtyToBeRemovedFromTotal = productToBeRemoved.qty;
//         const priceToBeDeductedFromTotal = productToBeRemoved.totalPrice;

//         // remove that product from the array and update the total price and total qty
//         let updatedCart = existingCart;
//         updatedCart.products.splice( productExistsIndex, 1 );
//         updatedCart.totalProductsCount = updatedCart.totalProductsCount - qtyToBeRemovedFromTotal;
//         updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeDeductedFromTotal;
        
//         localStorage.setItem('blackseed-cart', JSON.stringify(updatedCart));

//         return updatedCart;
//     }else{
//         return existingCart;
//     }

// }



/**
 * Returns cart data in the required format.
 * @param {object} data Cart data
 */
export const getFormattedCart = (data:preFormattedCart):object|null => {
    let formattedCart:any = null;

    if( data === undefined || !data.cart.contents.nodes.length){
        return formattedCart;
    }

    const givenProducts = data.cart.contents.nodes;

    // Create an empty object.
    formattedCart = {};
    formattedCart.products = [];
    let totalProductsCount = 0;

    for(let i = 0; i < givenProducts.length; i++){
        const givenProduct = givenProducts[i].product;
        const product:any = {};
        const total:number|string = getFloatVal(givenProducts[i].total);

        product.productId = givenProduct.productId;
        product.name = givenProduct.name;
        product.qty = givenProducts[i].quantity;
        product.price = typeof total === "number" ? total / product.qty : '';
        product.totalPrice = givenProducts[i].total;
        product.key = givenProducts[i].key;
        product.image = {
            sourceUrl: givenProduct.image.sourceUrl,
            srcSet: givenProduct.image.srcSet,
            title: givenProduct.image.title
        };

        totalProductsCount += givenProducts[i].quantity;
        //push each item into the products array.
        formattedCart.products.push(product);
    }
    formattedCart.totalProductsCount = totalProductsCount;
	formattedCart.totalProductsPrice = getFloatVal(data.cart.total);
	return formattedCart;
}

/**
 * Sorts checkout data into required shape for WP-woo-commerce
 * 
 * @param {order} order 
 */
export const createCheckoutData = ( order: order ):checkoutData  => {
	const checkoutData = {
		clientMutationId: v4(),

		billing: {
			firstName: order.firstName,
			lastName: order.lastName,
			address1: order.address1,
			address2: order.address2,
			city: order.city,
			country: order.country,
			state: order.state,
			postcode: order.postcode,
			email: order.email,
			phone: order.phone,
			company: order.company,
		},
		shipping: {
			firstName: order.firstName,
			lastName: order.lastName,
			address1: order.address1,
			address2: order.address2,
			city: order.city,
			country: order.country,
			state: order.state,
			postcode: order.postcode,
			email: order.email,
			phone: order.phone,
			company: order.company,
		},
		shipToDifferentAddress: false,
		paymentMethod: order.paymentMethod,
		isPaid: false,
		transactionId: "hjkhjkhsdsdiui"
	};

	return checkoutData;
};

/**
 * Get the updated items in the below format required for mutation input.
 *
 * [
 * { "key": "33e75ff09dd601bbe6dd51039152189", "quantity": 1 },
 * { "key": "02e74f10e0327ad868d38f2b4fdd6f0", "quantity": 1 },
 * ]
 *
 * Creates an array in above format with the newQty (updated Qty ).
 *
 */
export const getUpdatedItems = ( products:products, newQty:string, cartKey:string ):Array<updatedItems>  => {

	// Create an empty array.
	const updatedItems:any = [];
	// Loop through the product array.
	products.map( ( cartItem ) => {
		// If you find the cart key of the product user is trying to update, push the key and new qty.
		if ( cartItem.key === cartKey ) {

			updatedItems.push( {
				key: cartItem.key,
				quantity: parseInt( newQty )
			} );

			// Otherwise just push the existing qty without updating.
		} else {
			updatedItems.push( {
				key: cartItem.key,
				quantity: cartItem.qty
			} );
		}
	} );

	// Return the updatedItems array with new Qtys.
	return updatedItems;

};