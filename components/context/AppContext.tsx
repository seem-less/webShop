import React, {useState, useEffect} from 'react';

export const AppContext: React.Context<{}[]> = React.createContext([
    {},
    () => {}
]);

export const AppProvider = ( {children}:{children:object} ) => {
    const [ cart, setCart ] = useState< string | null >( null );
    useEffect( () => {
        if( process.browser ){
            let cartData = localStorage.getItem('blackseed-cart');
            cartData = cartData !== null ? JSON.parse( cartData ) : {};
            
            setCart( cartData );
        }
    }, [] );

    return  <AppContext.Provider value={ [cart, setCart] }>
                {children}
            </AppContext.Provider>
}