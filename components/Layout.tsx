import Head from 'next/head';
import Header from './Header';
import { AppProvider } from './context/AppContext';
import {ApolloProvider} from '@apollo/client';
import client from "../components/ApolloClient";
import Footer from './Footer';

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
                    <Footer />
                </div>
            </ApolloProvider>
        </AppProvider>
    )
}

export default Layout;