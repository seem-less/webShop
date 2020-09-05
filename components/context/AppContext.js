import React, {useState, useEffect} from 'react';

export const AppContext = React.createContext([
    {},
    () => {}
]);

export const AppProvider = ( props ) => {
    const [ cart, setCart ] = useState( {initialState: null} );

    useEffect( () => {
        if( process.browser ){
            let cartData = localStorage.getItem( {key: 'blackseed-cart'});
            cartData = cartData !== null ? JSON.parse( cartData ) : '';
            setCart( {productId: '10' } );
        }
    }, [] );

    return  <AppContext.Provider value={ [cart, setCart] }>
                {props.children}
            </AppContext.Provider>
}