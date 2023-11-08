import './navbar.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import user from '../.././/assets/img/icon-user.png'
import fav from '../.././/assets/img/icon-fav.png'
import cart from '../.././/assets/img/icon-cart.png'

// Cart Images
import ProOne from '../../assets/img/navbar/hmgoepprod (1).jpeg'
import ProTwo from '../../assets/img/navbar/hmgoepprod.jpeg'

export const Navbar = () => {

    const [isCartOpen, setCartOpen] = useState(false);

    const handleMenuToggle = () => {
        setCartOpen(!isCartOpen);
        setShowSidebar(false);
    };

    // Event handler function to toggle the sidebar visibility
    const [showSidebar, setShowSidebar] = useState(false);
    const handleButtonClick = () => {
        setShowSidebar(!showSidebar);
        setCartOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });

        setCartOpen(false);
        setShowSidebar(false);
    }

    return (
        <nav>
            <label><Link to="/Fit-and-Casual" onClick={scrollToTop}>Fit & Casual</Link></label>
            <ul className={`navbar-ul ${isCartOpen ? 'active' : ''}`}>
                <li><Link to="/men" className="le" onClick={scrollToTop}>Men</Link>
                    <ul className="sub-menu-box">
                        <li className="sub-menu-title"><a href="#!">Collection</a></li>
                        <li className="sub-li"><a href="#!">Simpsons</a></li>
                        <li className="sub-li"><a href="#!">Bombers</a></li>
                        <li className="sub-li"><a href="#!">Hoodies</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box1">
                        <li className="sub-menu-title"><a href="#!">Clothes</a></li>
                        <li className="sub-li"><a href="#!">T-Shirts</a></li>
                        <li className="sub-li"><a href="#!">Shirts</a></li>
                        <li className="sub-li"><a href="#!">Sweatshirt</a></li>
                        <li className="sub-li"><a href="#!">Jacket</a></li>
                        <li className="sub-li"><a href="#!">Joggers</a></li>
                        <li className="sub-li"><a href="#!">Pants</a></li>
                        <li className="sub-li"><a href="#!">Swimwear</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box2">
                        <li className="sub-menu-title"><a href="#!">Jeans</a></li>
                        <li className="sub-li"><a href="#!">Skinny</a></li>
                        <li className="sub-li"><a href="#!">Relax</a></li>
                        <li className="sub-li"><a href="#!">Slim</a></li>
                        <li className="sub-li"><a href="#!">straight</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box3">
                        <li className="sub-menu-title"><a href="#!">Underwear</a></li>
                        <li className="sub-li"><a href="#!">Boxer</a></li>
                        <li className="sub-li"><a href="#!">Socks</a></li>
                    </ul>
                </li>
                <li><Link className="le" to="/women" onClick={scrollToTop}>Women</Link>
                    <ul className="sub-menu-box">
                        <li className="sub-menu-title"><a href="#!">Collection</a></li>
                        <li className="sub-li"><a href="#!">Monster High</a></li>
                        <li className="sub-li"><a href="#!">Push Up Jeans</a></li>
                        <li className="sub-li"><a href="#!">Dresses</a></li>
                        <li className="sub-li"><a href="#!">shirts</a></li>
                        <li className="sub-li"><a href="#!">Hoodies</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box1">
                        <li className="sub-menu-title"><a href="#!">Clothes</a></li>
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
                        <li className="sub-menu-title"><a href="#!">Jeans</a></li>
                        <li className="sub-li"><a href="#!">Skinny</a></li>
                        <li className="sub-li"><a href="#!">Wide Leg</a></li>
                        <li className="sub-li"><a href="#!">Flare</a></li>
                        <li className="sub-li"><a href="#!">Cargo</a></li>
                        <li className="sub-li"><a href="#!">Mom Fit</a></li>
                        <li className="sub-li"><a href="#!">Kick Flare</a></li>
                        <li className="sub-li"><a href="#!">Straight</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box3">
                        <li className="sub-menu-title"><a href="#!">Sportive</a></li>
                        <li className="sub-li"><a href="#!">Biker</a></li>
                        <li className="sub-li"><a href="#!">Leggins</a></li>
                        <li className="sub-li"><a href="#!">Short</a></li>
                        <li className="sub-li"><a href="#!">Top</a></li>
                    </ul>
                    <ul className="sub-menu-box sub-menu-box4">
                        <li className="sub-menu-title"><a href="#!">Lingerie</a></li>
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
                <Link to="/fav" ><img className="nav-icon1" src={fav} alt=""></img></Link>
                <a href="#!" onClick={handleButtonClick}><img className="nav-icon1" src={cart} alt=""></img></a>
            </div>

            <div className="toggle-button" onClick={handleMenuToggle}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>

            <div className={`sidebar ${showSidebar ? '' : 'active'}`}>
                <div className='cart-box'>
                    <h2>Shopping Cart</h2>
                    <div className='cart-content'>
                        <div className='cart-item'>
                            <img src={ProOne} alt=''></img>
                            <div>
                                <p className='side-cart-title'>Grey Sweater</p>
                                <p className='side-cart-price'>$49.00</p>
                                <p className='side-cart-amount'>Amount: 1</p>
                                <p className='side-cart-color'>Color: Black</p>
                                <p className='side-cart-size'>Size: M</p>                            </div>
                        </div>
                        <div className='cart-item'>
                            <img src={ProTwo} alt=''></img>
                            <div>
                                <p className='side-cart-title'>Black Polo Shirt</p>
                                <p className='side-cart-price'>$49.00</p>
                                <p className='side-cart-amount'>Amount: 1</p>
                                <p className='side-cart-color'>Color: Black</p>
                                <p className='side-cart-size'>Size: M</p>
                            </div>
                        </div>
                    </div>
                    <div className='cart-check'>
                        <p>Total: $49.00</p>
                        <div>
                            <Link onClick={scrollToTop}>Check Out</Link>
                            <Link to="/cart" onClick={scrollToTop}>View Cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

// Scrolls to the top of the page when clicked

