import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <>
        <footer className="section footer-modern footer-modern-2">
            <div className="footer-modern-body section-xl context-dark">
                <div className="container">
                    <div className="row row-40 row-md-50 justify-content-xl-between">
                        <div className="col-sm-6 col-md-7 col-lg-5 wow fadeInRight" data-wow-delay=".1s">
                            <h5 className="footer-modern-title">Quick Links</h5>
                            <ul className="footer-modern-list footer-modern-list-2 d-sm-inline-block d-md-block">
                            <li><a href="our-team.html">Our Team</a></li>
                            <li><a href="grid-shop.html">New Products</a></li>
                            <li><a href="blog-list.html">Blog</a></li>
                            <li><a href="about-us.html">About Us</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="contact-us.html">Contact Us</a></li>
                            <li><a href="#">Smoothies</a></li>
                            <li><a href="#">Energy Bowls</a></li>
                            <li><a href="#">Juices</a></li>
                            <li><a href="#">Ingredients</a></li>
                            <li><a href="#">Delivery</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 wow fadeInRight" data-wow-delay=".2s">
                            <h5 className="footer-modern-title">Get in touch</h5>
                            <ul className="contacts-creative">
                            <li>
                                <div className="unit unit-spacing-sm flex-column flex-md-row">
                                <div className="unit-left"><FontAwesomeIcon icon={faMapMarker} /></div>
                                <div className="unit-body"><a href="#">523 Sylvan Ave, 5th Floor<br/>Mountain View, CA 94041 USA</a></div>
                                </div>
                            </li>
                            <li>
                                <div className="unit unit-spacing-sm flex-column flex-md-row">
                                <div className="unit-left"><FontAwesomeIcon icon={faPhone} /></div>
                                <div className="unit-body"><a href="tel:#">+1 (844) 123 456 78</a></div>
                                </div>
                            </li>
                            <li>
                                <div className="unit unit-spacing-sm flex-column flex-md-row">
                                <div className="unit-left"><FontAwesomeIcon icon={faEnvelope} /></div>
                                <div className="unit-body"><a href="mailto:#">info@demolink.org</a></div>
                                </div>
                            </li>
                            </ul>
                            <ul className="list-inline list-social-3 list-inline-sm">
                            <li><a className="icon mdi mdi-facebook icon-xxs" href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            <div className="footer-modern-panel text-center">
                <div className="container">
                    <p className="rights"><span>&copy;&nbsp; </span><span className="copyright-year"></span><span>&nbsp;</span><span>Vegano</span><span>.&nbsp; All rights reserved.</span><span>&nbsp;</span><a href="privacy-policy.html">Privacy Policy</a><span>.</span></p>
                </div>
            </div>
      </footer>
      </>
    )
}

export default Footer
