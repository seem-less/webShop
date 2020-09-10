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