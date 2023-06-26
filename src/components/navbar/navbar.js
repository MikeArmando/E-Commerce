import './navbar.css'
import user from '../.././/assets/img/icon-user.png'
import fav from '../.././/assets/img/icon-fav.png'
import cart from '../.././/assets/img/icon-cart.png'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <label><a href="/">Fit & Casual</a></label>
            <ul class="navbar-ul">
                <li><NavLink to="/men" className="le" href="">Men</NavLink>
                    <ul class="sub-menu-box">
                        <li class="sub-menu-title"><a href="">Collection</a></li>
                        <li class="sub-li"><a href="">Simpsons</a></li>
                        <li class="sub-li"><a href="">Bombers</a></li>
                        <li class="sub-li"><a href="">Hoodies</a></li>
                    </ul>
                    <ul class="sub-menu-box sub-menu-box1">
                        <li class="sub-menu-title"><a href="clothes/clothes.html">Clothes</a></li>
                        <li class="sub-li"><a href="">T-Shirts</a></li>
                        <li class="sub-li"><a href="">Shirts</a></li>
                        <li class="sub-li"><a href="">Sweatshirt</a></li>
                        <li class="sub-li"><a href="">Jacket</a></li>
                        <li class="sub-li"><a href="">Joggers</a></li>
                        <li class="sub-li"><a href="">Pants</a></li>
                        <li class="sub-li"><a href="">Swimwear</a></li>
                    </ul>
                    <ul class="sub-menu-box sub-menu-box2">
                        <li class="sub-menu-title"><a href="jeans/jeans.html">Jeans</a></li>
                        <li class="sub-li"><a href="">Skinny</a></li>
                        <li class="sub-li"><a href="">Relax</a></li>
                        <li class="sub-li"><a href="">Slim</a></li>
                        <li class="sub-li"><a href="">straight</a></li>
                    </ul>
                    <ul class="sub-menu-box sub-menu-box3">
                        <li class="sub-menu-title"><a href="underwear/underwear.html">Underwear</a></li>
                        <li class="sub-li"><a href="">Boxer</a></li>
                        <li class="sub-li"><a href="">Socks</a></li>
                    </ul>
                </li>
                <li><NavLink className="le" to="/women">Women</NavLink>
                    <ul class="sub-menu-box">
                        <li class="sub-menu-title"><a href="/content/women/collection/collection.html">Collection</a></li>
                        <li class="sub-li"><a href="">Monster High</a></li>
                        <li class="sub-li"><a href="">Push Up Jeans</a></li>
                        <li class="sub-li"><a href="">Dresses</a></li>
                        <li class="sub-li"><a href="">shirts</a></li>
                        <li class="sub-li"><a href="">Hoodies</a></li>
                    </ul>
                    <ul class="sub-menu-box sub-menu-box1">
                        <li class="sub-menu-title"><a href="/content/women/clothes/clothes.html">Clothes</a></li>
                        <li class="sub-li"><a href="">Tops</a></li>
                        <li class="sub-li"><a href="">Blouses</a></li>
                        <li class="sub-li"><a href="">Shirts</a></li>
                        <li class="sub-li"><a href="">Skirts</a></li>
                        <li class="sub-li"><a href="">Dresses</a></li>
                        <li class="sub-li"><a href="">Sweatshirt</a></li>
                        <li class="sub-li"><a href="">Jacket</a></li>
                        <li class="sub-li"><a href="">Pants</a></li>
                        <li class="sub-li"><a href="">Swimwear</a></li>
                        <li class="sub-li"><a href="">Shorts</a></li>
                    </ul>
                    <ul class="sub-menu-box sub-menu-box2">
                        <li class="sub-menu-title"><a href="/content/women/jeans/jeans.html">Jeans</a></li>
                        <li class="sub-li"><a href="">Skinny</a></li>
                        <li class="sub-li"><a href="">Wide Leg</a></li>
                        <li class="sub-li"><a href="">Flare</a></li>
                        <li class="sub-li"><a href="">Cargo</a></li>
                        <li class="sub-li"><a href="">Mom Fit</a></li>
                        <li class="sub-li"><a href="">Kick Flare</a></li>
                        <li class="sub-li"><a href="">Straight</a></li>
                    </ul>
                    <ul class="sub-menu-box sub-menu-box3">
                        <li class="sub-menu-title"><a href="/content/women/sportive/sportive.html">Sportive</a></li>
                        <li class="sub-li"><a href="">Biker</a></li>
                        <li class="sub-li"><a href="">Leggins</a></li>
                        <li class="sub-li"><a href="">Short</a></li>
                        <li class="sub-li"><a href="">Top</a></li>
                    </ul>
                    <ul class="sub-menu-box sub-menu-box4">
                        <li class="sub-menu-title"><a href="/content/women/lingerie/lingerie.html">Lingerie</a></li>
                        <li class="sub-li"><a href="">Bras</a></li>
                        <li class="sub-li"><a href="">Panties</a></li>
                        <li class="sub-li"><a href="">Pijamas</a></li>
                    </ul>
                </li>
                <li><a class="le" href="">Accessories</a>
                    <ul class="sub-menu-box">
                        <li class="sub-menu-title"><a href="">Man</a></li>
                        <li class="sub-li"><a href="">Backpacks</a></li>
                        <li class="sub-li"><a href="">Wallets</a></li>
                        <li class="sub-li"><a href="">Caps and Hats</a></li>
                        <li class="sub-li"><a href="">Belts</a></li>
                        <li class="sub-li"><a href="">Sunglasses</a></li>
                    </ul>
                    <ul class="sub-menu-box sub-menu-box1">
                        <li class="sub-menu-title"><a href="">Women</a></li>
                        <li class="sub-li"><a href="">Jewelry</a></li>
                        <li class="sub-li"><a href="">Bags</a></li>
                        <li class="sub-li"><a href="">Backpacks</a></li>
                        <li class="sub-li"><a href="">Purses and Cosmetics</a></li>
                        <li class="sub-li"><a href="">Hair Accessories</a></li>
                        <li class="sub-li"><a href="">Belts</a></li>
                        <li class="sub-li"><a href="">Sunglasses</a></li>
                    </ul>
                </li>
                <li><a class="le" href="">About</a></li>
                <NavLink to="/account"><img class="nav-icon1" src={user} alt=""></img></NavLink>
                <a href=""><img class="nav-icon1" src={fav} alt=""></img></a>
                <a href=""><img class="nav-icon1" src={cart} alt=""></img></a>
            </ul>
            <a href="" class="toggle-button">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </a>
        </nav>
    )
}

// Gets the elements of the navbar
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// Changes the background color of the navbar
window.addEventListener('scroll', function () {
    const nav = document.querySelector("nav")
    var scrollPosition = window.scrollY;

    // Define the scroll position at which to change the color
    var scrollThreshold = 300; // Adjust this value to change when the color change occurs

    // Change the color to white if the scroll position exceeds the threshold
    if (scrollPosition > scrollThreshold) {
        nav.style.background = 'white';
    } else {
        // Reset the color if the scroll position is less than the threshold
        nav.style.background = '';
    }
});