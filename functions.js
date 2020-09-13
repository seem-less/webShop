export const getFloatVal = (string) => {
    /**
     * drop the first char (typically a currency sign) from price string in db
     * and return the value as a float
     */
    let floatValue = string.match( /[+-]?\d+(\.\d+)?/g )[0];
    return ( floatValue !== null ) ? parseFloat( parseFloat(floatValue).toFixed(2)) : '';
}

export const addFirstProduct = ( product ) => {
    let productPrice = getFloatVal( product.price );

    // Create an empty array and push the item

    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: productPrice
    }

    const newProduct = createNewProduct( product, productPrice, 1 );
    newCart.products.push(newProduct);

    localStorage.setItem('blackseed-cart', JSON.stringify( newCart ));
    return newCart;
}

/**
 * Create a new product object
 * 
 * @param product 
 * @param productPrice 
 * @param qty 
 * @return object
 */
export const createNewProduct = (product, productPrice, qty) => {
    return{
        productId: product.productId,
        image: product.image,
        name: product.name,
        price: productPrice,
        qty: qty,
        totalPrice: parseFloat((productPrice * qty).toFixed(2))
    }
}

export const updateCart = ( existingCart, product, qtyToBeAdded, newQty = false ) => {
    const updatedProducts = getUpdatedProducts( existingCart.products, product, qtyToBeAdded, newQty);

    const addPrice = (total, item) => {
        total.totalPrice += item.totalPrice;
        total.qty += item.qty;

        return total;
    }

    // loop through the updated product array and add the totalPrice of each item to get the totalPrice.
    let total = updatedProducts.reduce(addPrice, { totalPrice: 0, qty: 0 });

    const updatedCart = {
        products: updatedProducts,
        totalProductsCount: parseInt(total.qty),
        totalProductsPrice: parseFloat( total.totalPrice )
    };

    localStorage.setItem('blackseed-cart', JSON.stringify( updatedCart ));

    return updatedCart;

}

/**
 * Get updated products array,
 * Updated the product if it exists
 * and add the new product to the existing cart
 * 
 * @param {*} existingProductsInCart 
 * @param {*} product 
 * @param {*} qtyToBeAdded 
 * @param {*} newQty 
 */

export const getUpdatedProducts = (existingProductsInCart, product, qtyToBeAdded, newQty = false) => {
    const ProductExistsIndex = isProductInCart(existingProductsInCart, product.productId);

    // if product exists (index of that product is found in the array), update the product quantity and totalPrice
    if(-1 < ProductExistsIndex){
        let updatedProducts = existingProductsInCart;
        let updatedProduct = updatedProducts[ ProductExistsIndex ];

        // If we have the new qty of the product available, set that else add the qtyToBeAdded
        updatedProduct.qty = (newQty) ? parseInt(newQty) : parseInt(updatedProduct.qty + qtyToBeAdded);
        updatedProduct.totalPrice = parseFloat(updatedProduct.price * updatedProduct.qty ).toFixed(2);
        
        return updatedProducts;
    } else {
        // if product not found push the new product to the existing products array.
        let productPrice = getFloatVal( product.price );
        const newProduct = createNewProduct( product, productPrice, qtyToBeAdded);
        existingProductsInCart.push( newProduct );

        return existingProductsInCart;
    }
}

/**
 * return index of the product if it exists
 * 
 * @param {*} existingProductsInCart 
 * @param {*} productId 
 * @return {number | *}
 */

export const isProductInCart = (existingProductsInCart, productId) => {
    const returnItemThatExists = (item, index) => {
        if( productId === item.productId ){
            return item;
        }
    };

    const newArray = existingProductsInCart.filter( returnItemThatExists );

    return existingProductsInCart.indexOf( newArray[0] );
}

export const removeItemFromCart = (productId) => {
    // get the existing cart data.
    let existingCart = localStorage.getItem( 'blackseed-cart' );
    existingCart = JSON.parse(existingCart);

    // if there is only one item in the cart, delete the cart
    if(1 === existingCart.products.length){
        localStorage.removeItem('blackseed-cart');
        return null;
    }

    // check if the product already exists in the cart
    const productExistsIndex = isProductInCart(existingCart.products, productId);

    // if product to be removed exists
    if(-1 < productExistsIndex){
        const productToBeRemoved = existingCart.products[productExistsIndex];
        const qtyToBeRemovedFromTotal = productToBeRemoved.qty;
        const priceToBeDeductedFromTotal = productToBeRemoved.totalPrice;

        // remove that product from the array and update the total price and total qty
        let updatedCart = existingCart;
        updatedCart.products.splice( productExistsIndex, 1 );
        updatedCart.totalProductsCount = updatedCart.totalProductsCount - qtyToBeRemovedFromTotal;
        updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeDeductedFromTotal;
        
        localStorage.setItem('black-seed', JSON.stringify(updatedCart));

        return updatedCart;
    }else{
        return existingCart;
    }

}