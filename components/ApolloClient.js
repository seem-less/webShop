import fetch from 'node-fetch';
import {ApolloClient, InMemoryCache, ApolloLink, createHttpLink} from '@apollo/client';
import clientConfig from '../client-config';


/**
 * Middleware operation
 * If we have a session token in localStorage, add it to the GraphQL request as a session header.
 */
export const middleware = new ApolloLink((operation,forward)=> {
    const session = (process.browser) ? localStorage.getItem("woo-session"): null;

    if (session){
        operation.setContext( ( {headers = {} } ) =>( {
            headers: {
                "woocommerce-session": `Session ${ session }`
            }
        } ) );
    }

    return forward(operation);
});

/**
 * Afterware operation
 * 
 * This catches the incoming session token and stores it in localStorage, for future GraphQL requests
 */
export const afterware = new ApolloLink( (operation, forward)  => {
    return forward( operation ).map( response => {
        /**
         * Check for session header and update session in local storage accordingly
         */
        const context = operation.getContext();
        const { response: { headers } } = context;
        const session = headers.get("woocommerce-session");

        if (session) {
            // Remove session data if session is destroyed.
            if (session === "false"){
                localStorage.removeItem("woo-session");

                //Update session to new data if changed.
            }else if (localStorage.getItem("woo-session") !== session){
                localStorage.setItem("woo-session", headers.get("woocommerce-session"));
            }
        }

        return response;

    })
})

const client = new ApolloClient( {
    link: middleware.concat(afterware.concat(createHttpLink({
        uri: clientConfig.graphqlUrl,
        fetch: fetch
    }))),
    cache: new InMemoryCache()
});

export default client;