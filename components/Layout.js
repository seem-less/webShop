import Head from 'next/head';
import Header from './Header';
import { AppProvider } from './context/AppContext';
import {ApolloProvider} from '@apollo/client';
import client from "../components/ApolloClient";

const Layout = (props) => {
    return(
        <AppProvider>
            <ApolloProvider client={client}>
                <div>
                    <Head>
                        <title>Blackseed site</title>
                    </Head>
                    <Header />
                    {props.children}
                </div>
            </ApolloProvider>
        </AppProvider>
    )
}

export default Layout;