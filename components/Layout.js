import Head from 'next/head';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css' 

const Layout = (props) => {
    return(
        <div>
            <Head>
                <title>Blackseed site</title>
            </Head>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout;