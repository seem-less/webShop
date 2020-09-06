import React, {useState, useEffect} from 'react';

export const AppContext = React.createContext([
    {},
    () => {}
]);

export const AppProvider = ( props ) => {
    const [ cart, setCart ] = useState( null );

    useEffect( () => {
        if( process.browser ){
            let cartData = localStorage.getItem( 'blackseed-cart');
            cartData = cartData !== null ? JSON.parse( cartData ) : '';
            setCart( cartData );
        }
    }, [] );

    return  <AppContext.Provider value={ [cart, setCart] }>
                {props.children}
            </AppContext.Provider>
}