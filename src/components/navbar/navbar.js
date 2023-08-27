import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import user from '../.././/assets/img/icon-user.png'
import fav from '../.././/assets/img/icon-fav.png'
import cart from '../.././/assets/img/icon-cart.png'

export const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    const [showSidebar, setShowSidebar] = useState(false);

    // Event handler function to toggle the sidebar visibility
    const handleButtonClick = () => {
        setShowSidebar(!showSidebar);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });

        setShowSidebar(false);
    }

    return (
        <nav>
            <label><Link to="/E-Commerce" onClick={scrollToTop}>Fit & Casual</Link></label>
            <ul className={`navbar-ul ${isMenuOpen ? 'active' : ''}`}>
                <li><Link to="/men" className="le" onClick={scrollToTop}>Men</Link>
                    <ul className="sub-menu-box">
                        <li className="sub-menu-title"><a href="#!">Collection</a></li>
                        <li className="sub-li"><a href="#!">Simpsons</a></li>
                        <li className="sub-li"><a href="#!">Bombers</a></li>
                        <li className="sub-li"><a href="#!">Hoodies</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box1">
                        <li className="sub-menu-title"><a href="clothes/clothes.html">Clothes</a></li>
                        <li className="sub-li"><a href="#!">T-Shirts</a></li>
                        <li className="sub-li"><a href="#!">Shirts</a></li>
                        <li className="sub-li"><a href="#!">Sweatshirt</a></li>
                        <li className="sub-li"><a href="#!">Jacket</a></li>
                        <li className="sub-li"><a href="#!">Joggers</a></li>
                        <li className="sub-li"><a href="#!">Pants</a></li>
                        <li className="sub-li"><a href="#!">Swimwear</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box2">
                        <li className="sub-menu-title"><a href="jeans/jeans.html">Jeans</a></li>
                        <li className="sub-li"><a href="#!">Skinny</a></li>
                        <li className="sub-li"><a href="#!">Relax</a></li>
                        <li className="sub-li"><a href="#!">Slim</a></li>
                        <li className="sub-li"><a href="#!">straight</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box3">
                        <li className="sub-menu-title"><a href="underwear/underwear.html">Underwear</a></li>
                        <li className="sub-li"><a href="#!">Boxer</a></li>
                        <li className="sub-li"><a href="#!">Socks</a></li>
                    </ul>
                </li>
                <li><Link className="le" to="/women" onClick={scrollToTop}>Women</Link>
                    <ul className="sub-menu-box">
                        <li className="sub-menu-title"><a href="/content/women/collection/collection.html">Collection</a></li>
                        <li className="sub-li"><a href="#!">Monster High</a></li>
                        <li className="sub-li"><a href="#!">Push Up Jeans</a></li>
                        <li className="sub-li"><a href="#!">Dresses</a></li>
                        <li className="sub-li"><a href="#!">shirts</a></li>
                        <li className="sub-li"><a href="#!">Hoodies</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box1">
                        <li className="sub-menu-title"><a href="/content/women/clothes/clothes.html">Clothes</a></li>
                        <li className="sub-li"><a href="#!">Tops</a></li>
                        <li className="sub-li"><a href="#!">Blouses</a></li>
                        <li className="sub-li"><a href="#!">Shirts</a></li>
                        <li className="sub-li"><a href="#!">Skirts</a></li>
                        <li className="sub-li"><a href="#!">Dresses</a></li>
                        <li className="sub-li"><a href="#!">Sweatshirt</a></li>
                        <li className="sub-li"><a href="#!">Jacket</a></li>
                        <li className="sub-li"><a href="#!">Pants</a></li>
                        <li className="sub-li"><a href="#!">Swimwear</a></li>
                        <li className="sub-li"><a href="#!">Shorts</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box2">
                        <li className="sub-menu-title"><a href="/content/women/jeans/jeans.html">Jeans</a></li>
                        <li className="sub-li"><a href="#!">Skinny</a></li>
                        <li className="sub-li"><a href="#!">Wide Leg</a></li>
                        <li className="sub-li"><a href="#!">Flare</a></li>
                        <li className="sub-li"><a href="#!">Cargo</a></li>
                        <li className="sub-li"><a href="#!">Mom Fit</a></li>
                        <li className="sub-li"><a href="#!">Kick Flare</a></li>
                        <li className="sub-li"><a href="#!">Straight</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box3">
                        <li className="sub-menu-title"><a href="/content/women/sportive/sportive.html">Sportive</a></li>
                        <li className="sub-li"><a href="#!">Biker</a></li>
                        <li className="sub-li"><a href="#!">Leggins</a></li>
                        <li className="sub-li"><a href="#!">Short</a></li>
                        <li className="sub-li"><a href="#!">Top</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box4">
                        <li className="sub-menu-title"><a href="/content/women/lingerie/lingerie.html">Lingerie</a></li>
                        <li className="sub-li"><a href="#!">Bras</a></li>
                        <li className="sub-li"><a href="#!">Panties</a></li>
                        <li className="sub-li"><a href="#!">Pijamas</a></li>
                    </ul>
                </li>
                <li><Link className="le" href="#!" to="/kids" onClick={scrollToTop}>Kids</Link>
                    <ul className="sub-menu-box">
                        <li className="sub-menu-title"><a href="#!">Boy</a></li>
                        <li className="sub-li"><a href="#!">Shirts</a></li>
                        <li className="sub-li"><a href="#!">Jeans</a></li>
                        <li className="sub-li"><a href="#!">Jacket</a></li>
                        <li className="sub-li"><a href="#!">T-Shirts</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box1">
                        <li className="sub-menu-title"><a href="#!">Girl</a></li>
                        <li className="sub-li"><a href="#!">Blouses</a></li>
                        <li className="sub-li"><a href="#!">Shirts</a></li>
                        <li className="sub-li"><a href="#!">Jeans</a></li>
                        <li className="sub-li"><a href="#!">Dresses</a></li>
                        <li className="sub-li"><a href="#!">T-Shirts</a></li>
                    </ul>
                </li>
                <li><Link className="le" to="/accesories" onClick={scrollToTop}>Accessories</Link>
                    <ul className="sub-menu-box">
                        <li className="sub-menu-title"><a href="#!">Man</a></li>
                        <li className="sub-li"><a href="#!">Backpacks</a></li>
                        <li className="sub-li"><a href="#!">Wallets</a></li>
                        <li className="sub-li"><a href="#!">Caps and Hats</a></li>
                        <li className="sub-li"><a href="#!">Belts</a></li>
                        <li className="sub-li"><a href="#!">Sunglasses</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box1">
                        <li className="sub-menu-title"><a href="#!">Women</a></li>
                        <li className="sub-li"><a href="#!">Jewelry</a></li>
                        <li className="sub-li"><a href="#!">Bags</a></li>
                        <li className="sub-li"><a href="#!">Backpacks</a></li>
                        <li className="sub-li"><a href="#!">Purses and Cosmetics</a></li>
                        <li className="sub-li"><a href="#!">Hair Accessories</a></li>
                        <li className="sub-li"><a href="#!">Belts</a></li>
                        <li className="sub-li"><a href="#!">Sunglasses</a></li>
                    </ul>
                </li>

            </ul>
            <div className='icon-right'>
                <Link to="/account" onClick={scrollToTop}><img className="nav-icon1" src={user} alt=""></img></Link>
                <a href="#!" ><img className="nav-icon1" src={fav} alt=""></img></a>
                <a href="#!" onClick={handleButtonClick}><img className="nav-icon1" src={cart} alt=""></img></a>
            </div>

            <div className="toggle-button" onClick={handleMenuToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className={`sidebar ${showSidebar ? '' : 'active'}`}>
                <div className='cart-box'>
                    <h2>Your Cart</h2>
                    <div className='cart-content'>
                        <div className='cart-item'>
                            <img src='https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_31646.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds' alt=''></img>
                            <div>
                                <p>Black Denim Jacket</p>
                                <p>1 x $49.00</p>
                            </div>
                        </div>
                    </div>
                    <div className='cart-check'>
                        <p>Total: $49.00</p>
                        <div>
                            <Link to="/cart" onClick={scrollToTop}>View Cart</Link>
                            <Link onClick={scrollToTop}>Check Out</Link>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}

// Scrolls to the top of the page when clicked

