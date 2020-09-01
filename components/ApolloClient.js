import fetch from 'isomorphic-unfetch';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import clientConfig from '../client-config';

const client = new ApolloClient( {
    uri: clientConfig.graphqlUrl,
    cache: new InMemoryCache(),
    fetch: fetch
});

export default client;