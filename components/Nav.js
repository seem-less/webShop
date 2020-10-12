import Link from 'next/link';
import CartIcon from './cart/Carticon';
const Nav = () => {
    return (
        <>
        {/* Page Header */}
        <header className="section page-header header-creative-wrap context-dark">
            {/* RD Navbar */}
            <div className="rd-navbar-wrap">
                <nav className="rd-navbar rd-navbar-creative rd-navbar-creative-2" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-fixed" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-lg-stick-up-offset="100px" data-xl-stick-up-offset="112px" data-xxl-stick-up-offset="132px" data-lg-stick-up="true" data-xl-stick-up="true" data-xxl-stick-up="true">
                    <div className="rd-navbar-collapse-toggle rd-navbar-fixed-element-1" data-rd-navbar-toggle=".rd-navbar-collapse">
                        <span></span>
                    </div>
                    <div className="rd-navbar-aside-outer">
                    <div className="rd-navbar-aside">
                        <div className="rd-navbar-collapse">
                        <ul className="contacts-classic">
                            <li><span className="contacts-classic-title">Call us:</span> <a className="link" href="tel:#">+1 (844) 123 456 78</a>
                            </li>
                            <li><a href="mailto:#">info@demolink.org</a></li>
                        </ul><a className="rd-navbar-basket rd-navbar-basket-mobile fl-bigmug-line-shopping202" href="#"><span>2</span></a>
                        </div>
                        {/* RD Navbar Panel */}
                        <div className="rd-navbar-panel">
                        {/* <!-- RD Navbar Toggle--> */}
                        <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                        {/* <!-- RD Navbar Brand--> */}
                        <div className="rd-navbar-brand">
                            {/* <!--Brand--> */}
                            <a className="brand" href="index.html"><img className="brand-logo-dark" src="images/logo-default-234x82.png" alt="" width="117" height="41"/><img className="brand-logo-light" src="images/logo-inverse-234x82.png" alt="" width="117" height="41"/></a>
                        </div>
                        </div>
                        <div className="rd-navbar-aside-element">
                        {/* <!-- RD Navbar Search--> */}
                        <div className="rd-navbar-search rd-navbar-search-2">
                            <button className="rd-navbar-search-toggle rd-navbar-fixed-element-3" data-rd-navbar-toggle=".rd-navbar-search"><span></span></button>
                            <form className="rd-search" action="search-results.html" data-search-live="rd-search-results-live" method="GET">
                            <div className="form-wrap">
                                <input className="rd-navbar-search-form-input form-input" id="rd-navbar-search-form-input" type="text" name="s" autoComplete="off"/>
                                <label className="form-label" htmlFor="rd-navbar-search-form-input">Search...</label>
                                <div className="rd-search-results-live" id="rd-search-results-live"></div>
                                <button className="rd-search-form-submit fl-bigmug-line-search74" type="submit"></button>
                            </div>
                            </form>
                        </div>
                        {/* <!-- RD Navbar Basket--> */}
                        <div className="rd-navbar-basket-wrap">
                            <button className="rd-navbar-basket fl-bigmug-line-shopping202" data-rd-navbar-toggle=".cart-inline"><span>2</span></button>
                            <div className="cart-inline">
                            <div className="cart-inline-header">
                                <h5 className="cart-inline-title">In cart:<span> 2</span> Products</h5>
                                <h6 className="cart-inline-title">Total price:<span> $44</span></h6>
                            </div>
                            <div className="cart-inline-body">
                                <div className="cart-inline-item">
                                <div className="unit unit-spacing-sm align-items-center">
                                    <div className="unit-left"><a className="cart-inline-figure" href="single-product.html"><img src="images/product-mini-1-106x104.jpg" alt="" width="106" height="104"/></a></div>
                                    <div className="unit-body">
                                    <h6 className="cart-inline-name"><a href="single-product.html">Forest Berry</a></h6>
                                    <div>
                                        <div className="group-xs group-middle">
                                        <div className="table-cart-stepper">
                                            <input className="form-input" type="number" data-zeros="true" defaultValue="1" min="1" max="1000"/>
                                        </div>
                                        <h6 className="cart-inline-title">$18.00</h6>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="cart-inline-item">
                                <div className="unit unit-spacing-sm align-items-center">
                                    <div className="unit-left"><a className="cart-inline-figure" href="single-product.html"><img src="images/product-mini-2-106x104.jpg" alt="" width="106" height="104"/></a></div>
                                    <div className="unit-body">
                                    <h6 className="cart-inline-name"><a href="single-product.html">Tomatoes</a></h6>
                                    <div>
                                        <div className="group-xs group-middle">
                                        <div className="table-cart-stepper">
                                            <input className="form-input" type="number" data-zeros="true" min="1" max="1000"/>
                                        </div>
                                        <h6 className="cart-inline-title">$16.00</h6>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className="cart-inline-footer">
                                <div className="group-sm"><a className="button button-default-outline-2 button-zakaria" href="cart-page.html">Go to cart</a><a className="button button-primary button-zakaria" href="checkout.html">Checkout</a></div>
                            </div>
                            </div>
                        </div>
                        <div className="rd-navbar-fixed-element-2 select-inline">
                            <select data-dropdown-class="select-inline-dropdown">
                            <option value="en">en</option>
                            <option value="fr">fr</option>
                            <option value="es">es</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="rd-navbar-main-outer">
                    <div className="rd-navbar-main">
                        <div className="rd-navbar-nav-wrap">
                        <ul className="rd-navbar-nav">
                            <li className="rd-nav-item active">                        
                                <Link href="/">
                                    <a className="rd-nav-link">Home<span className="sr-only">(current)</span></a>
                                </Link>
                            </li>
                            <li className="rd-nav-item"><a className="rd-nav-link" href="#">Pages</a>
                            <ul className="rd-menu rd-navbar-dropdown">
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="about-us.html">About Us</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="what-we-offer.html">What We Offer</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="our-team.html">Our Team</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="pricing-list.html">Pricing List</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="testimonials.html">Testimonials</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="404-page.html">404 Page</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="coming-soon.html">Coming Soon</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="privacy-policy.html">Privacy Policy</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="search-results.html">Search Results</a>
                                </li>
                            </ul>
                            </li>
                            <li className="rd-nav-item"><a className="rd-nav-link" href="blog-list.html">Blog</a>
                            <ul className="rd-menu rd-navbar-dropdown">
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="grid-blog.html">Grid Blog</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="blog-post.html">Blog Post</a>
                                </li>
                            </ul>
                            </li>
                            <li className="rd-nav-item"><a className="rd-nav-link" href="gallery.html">Gallery</a>
                            <ul className="rd-menu rd-navbar-dropdown">
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="grid-gallery.html">Grid Gallery</a>
                                </li>
                            </ul>
                            </li>
                            <li className="rd-nav-item"><a className="rd-nav-link" href="grid-shop.html">Shop</a>
                            <ul className="rd-menu rd-navbar-dropdown">
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="grid-shop.html">Grid Shop</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="shop-list.html">Shop List</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="single-product.html">Single Product</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="cart-page.html">Cart Page</a>
                                </li>
                                <li className="rd-dropdown-item"><a className="rd-dropdown-link" href="checkout.html">Checkout</a>
                                </li>
                            </ul>
                            </li>
                            <li className="rd-nav-item"><a className="rd-nav-link" href="contact-us.html">Contact Us</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </nav>
            </div>
        </header>
        </>
        // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        //     <div className="collapse navbar-collapse" id="navbarColor01">
        //         <ul className="navbar-nav mr-auto">
        //         <li className="nav-item active">
        //             <Link href="/">
        //                 <a className="nav-link">Home<span className="sr-only">(current)</span></a>
        //             </Link>
        //         </li>
        //         <li className="nav-item">
        //             <Link href="/categories">
        //                 <a className="nav-link">Categories<span className="sr-only">(current)</span></a>
        //             </Link>
        //         </li>
        //         <li className="nav-item dropdown">
        //             <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        //             <div className="dropdown-menu">
        //             <a className="dropdown-item" href="#">Action</a>
        //             <a className="dropdown-item" href="#">Another action</a>
        //             <a className="dropdown-item" href="#">Something else here</a>
        //             <div className="dropdown-divider"></div>
        //             <a className="dropdown-item" href="#">Separated link</a>
        //             </div>
        //         </li>
        //         </ul>
        //         <CartIcon />
        //     </div>
        // </nav>
    )
}

export default Nav;