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