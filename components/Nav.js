import Link from 'next/link';
import CartIcon from './cart/Carticon';

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link href="/">
                        <a className="nav-link">Home<span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/categories">
                        <a className="nav-link">Categories<span className="sr-only">(current)</span></a>
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </li>
                </ul>
                <CartIcon />
            </div>
        </nav>
    )
}

export default Nav;