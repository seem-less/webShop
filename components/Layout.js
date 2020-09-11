import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import Head from 'next/head';
import Header from './Header';
import { AppProvider } from './context/AppContext';

const Layout = (props) => {
    return(
        <AppProvider>
            <div>
                <Head>
                    <title>Blackseed site</title>
                </Head>
                <Header />
                {props.children}
            </div>
        </AppProvider>
    )
}

export default Layout;