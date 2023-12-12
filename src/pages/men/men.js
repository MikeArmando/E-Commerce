import './gender.css'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
// Category Images
import tShirtCat from '../../../src/assets/img/men/c (3).webp'
import JacketCat from '../../../src/assets/img/men/c (2).webp'
import ShirtCat from '../../../src/assets/img/men/c.webp'
import pantCat from '../../../src/assets/img/men/c (4).webp'
import SweaterCat from '../../../src/assets/img/men/c (5).webp'
import underwearCat from '../../../src/assets/img/men/c (6).webp'
import JoggerCat from '../../../src/assets/img/men/c (7).webp'
import shortCat from '../../../src/assets/img/men/c (8).webp'
// Feature Images
import featurePro1 from '../../../src/assets/img/men/fe.webp'
import featurePro2 from '../../../src/assets/img/men/fe2.webp'
import featurePro3 from '../../../src/assets/img/men/fe3.webp'
import featurePro4 from '../../../src/assets/img/men/fe4.webp'
// Collection Images
import collection1 from '../../assets/img/men/col1.avif'
import collection2 from '../../assets/img/men/col2.avif'
// Jean Images
import jean1 from '../../assets/img/men/j1.webp'
import jean2 from '../../assets/img/men/j2.webp'
import jean3 from '../../assets/img/men/j3.webp'
import jean4 from '../../assets/img/men/j4.webp'
import jean5 from '../../assets/img/men/j5.webp'
import jean6 from '../../assets/img/men/j6.webp'
import jean7 from '../../assets/img/men/j7.webp'
// Shirts Images


export const Men = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }

    const [ref, inView] = useInView({
        triggerOnce: true,
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true,
    });

    return (
        <>
            <section className='gender-hero'>
                <a className='gender-hero-men' href='#!'>
                    <div>
                        <p className='gender-hero-p1'>New Edition</p>
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
                            src={pantCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Pants</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={JacketCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">jackets</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={SweaterCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Sweaters</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={JoggerCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">joggers</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={shortCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Shorts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={underwearCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Underwear</a></label>
                        </div>
                    </div>
                </div>
            </section>

            <section className="man-feature-box">
                <div>
                    <h2>Featured Products</h2>
                </div>
                <div className="man-feature-row">
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={featurePro1}
                        alt=""></img></Link>
                        <Link className='feature-name' to="/view" onClick={scrollToTop}>T-shirt Absence Of Fear</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={featurePro4}
                        alt=""></img></Link>
                        <Link className='feature-name' to="/view" onClick={scrollToTop}>Jeans Slim Tapered Dark</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={featurePro3}
                        alt=""></img></Link>
                        <Link className='feature-name' to="/view" onClick={scrollToTop}>Jogger Cargo</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={featurePro2}
                        alt=""></img></Link>
                        <Link className='feature-name' to="/view" onClick={scrollToTop}>Grey Denim Jacket</Link>
                    </div>
                </div>
            </section>

            <section className="gender-collection-box">
                <div className="gender-collection-row">
                    <div className={`gender-clothes-img ${inView ? 'fade-in' : ''}`} ref={ref}>
                        <Link to="/view" onClick={scrollToTop}><img
                            src={collection1}
                            alt="#!"></img>
                        </Link>
                        <div>
                            <h3>Collection</h3>
                        </div>
                    </div>
                    <div className={`gender-clothes-img gender-clothes-img-rev ${inView2 ? 'fade-in' : ''}`} ref={ref2}>
                        <div>
                            <h3>Holiday</h3>
                        </div>
                        <Link to="/view" onClick={scrollToTop}><img
                            src={collection2}
                            alt=""></img>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="gender-clothes-box">
                <h3>Jeans</h3>
                <div className="gender-clothes-row">
                    <div className="gender-main-item">
                        <Link to="/view" onClick={scrollToTop}><img
                            src={jean1}
                            alt=""></img></Link>
                        <label><Link to="/view" onClick={scrollToTop}>Slim Stone Jeans Medium</Link></label>
                        <label className='main-item-price'>$29</label>
                    </div>
                    <div className="gender-item-box">
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean2}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Skinny Jeans Washed Black</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean3}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Jeans Ultra Skinny Remounted</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean4}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Washed Black Denim Jacket</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean5}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Jeans Slim Destructions</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean6}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Straight Bleach Jeans</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean7}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Straight Mounted Jeans</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gender-clothes-box">
                <h3>Shirts</h3>
                <div className="gender-clothes-row">
                    <div className="gender-main-item">
                        <Link to="/view" onClick={scrollToTop}><img
                            src={jean1}
                            alt=""></img></Link>
                        <label><Link to="/view" onClick={scrollToTop}>Slim Stone Jeans Medium</Link></label>
                        <label className='main-item-price'>$29</label>
                    </div>
                    <div className="gender-item-box">
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean2}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Skinny Jeans Washed Black</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean3}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Jeans Ultra Skinny Remounted</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean4}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Washed Black Denim Jacket</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean5}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Jeans Slim Destructions</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean6}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Straight Bleach Jeans</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src={jean7}
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Straight Mounted Jeans</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}