import React from 'react'
import { Link } from 'react-router-dom'
import './kids.css'
// Category Images
import tShirtCat from '../../../src/assets/img/kids/cat2.webp'
import ShirtCat from '../../../src/assets/img/kids/cat3.webp'
import pantsCat from '../../../src/assets/img/kids/cat1.webp'
import jacketCat from '../../../src/assets/img/kids/cat4.webp'
import sweatshirtCat from '../../../src/assets/img/kids/cat5.webp'
import joggerCat from '../../../src/assets/img/kids/cat7.webp'
import SwimsuitCat from '../../../src/assets/img/kids/cat6.webp'
import ShoeCat from '../../../src/assets/img/kids/cat8.webp'
// Feature Images
import feature1 from '../../../src/assets/img/kids/f1.webp'
import feature2 from '../../../src/assets/img/kids/f2.webp'
import feature3 from '../../../src/assets/img/kids/f3.webp'
import feature4 from '../../../src/assets/img/kids/f4.webp'
// Items Images
import item1 from '../../../src/assets/img/kids/item1.webp'
import item2 from '../../../src/assets/img/kids/item2.webp'
import item3 from '../../../src/assets/img/kids/item3.webp'
import item4 from '../../../src/assets/img/kids/item4.webp'
import item5 from '../../../src/assets/img/kids/item5.webp'
import item6 from '../../../src/assets/img/kids/item6.webp'
import item7 from '../../../src/assets/img/kids/item7.webp'
import item8 from '../../../src/assets/img/kids/item8.webp'
import item9 from '../../../src/assets/img/kids/item9.webp'
import item10 from '../../../src/assets/img/kids/item10.webp'
import item11 from '../../../src/assets/img/kids/item11.webp'
import item12 from '../../../src/assets/img/kids/item12.webp'

export const Kids = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }

    return (
        <>
            <section className='kids-hero'>
                <a className='kids-hero-img' href='#!'>
                    <div>
                        <p className='kids-hero-p1'>Warm Clothes for the weather</p>
                        <p>With the most comfortable materials</p>
                        <a href='#!'>Buy Now</a>
                    </div>
                </a>
            </section>

            <section className="gender-gate-box">
                <h2>Search By Category</h2>
                <div className="gender-gate-row">
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={tShirtCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">T-Shirts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={ShirtCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Shirts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={pantsCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Pants</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={jacketCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">jackets</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={sweatshirtCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">sweatshirts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={joggerCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">joggers</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={SwimsuitCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Swimsuits</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={ShoeCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Shoes</a></label>
                        </div>
                    </div>
                </div>
            </section>

            <section className="man-feature-box">
                <div>
                    <h2>New Arrivals</h2>
                </div>
                <div className="man-feature-row">
                    <div><a href="#!"><img
                        src={feature1}
                        alt=""></img></a>
                        <a href="#!">Printed Shirt</a>
                    </div>
                    <div><a href="#!"><img
                        src={feature2}
                        alt=""></img></a>
                        <a href="#!">Short Sleeve Printed T-Shirt</a>
                    </div>
                    <div><a href="#!"><img
                        src={feature3}
                        alt=""></img></a>
                        <a href="#!">Black Cargo</a>
                    </div>
                    <div><a href="#!"><img
                        src={feature4}
                        alt=""></img></a>
                        <a href="#!">Bright Red vest</a>
                    </div>
                </div>
            </section>

            <section className='kids-pro'>
                <div>
                    <h2>More Clothes</h2>
                </div>
                <div className="kids-pro-row">
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item1}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item2}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item3}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Pants</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item4}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item5}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item6}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item7}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item8}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shorts</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item9}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shorts</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item10}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item11}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={item12}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Classic Shirt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                </div>
            </section>
        </>
    )
}