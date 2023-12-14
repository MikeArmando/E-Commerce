import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
// Category Images
import topCat from '../../../src/assets/img/women/c1.webp'
import blouseCat from '../../../src/assets/img/women/c2.webp'
import tShirtCat from '../../../src/assets/img/women/c3.webp'
import skirtCat from '../../../src/assets/img/women/c4.webp'
import dressCat from '../../../src/assets/img/women/c5.webp'
import jacketCat from '../../../src/assets/img/women/c6.webp'
import jeanCat from '../../../src/assets/img/women/c7.webp'
import shortCat from '../../../src/assets/img/women/c8.webp'
// Feature Images
import featurePro1 from '../../../src/assets/img/women/fe1.webp'
import featurePro2 from '../../../src/assets/img/women/fe2.webp'
import featurePro3 from '../../../src/assets/img/women/fe3.webp'
import featurePro4 from '../../../src/assets/img/women/fe4.webp'
// Collection Images
import collection1 from '../../assets/img/women/coll1.jpeg'
import collection2 from '../../assets/img/women/coll2.jpeg'

export const Women = () => {
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
                <a className='gender-hero-women' href='#!'>
                    <div>
                        <p className='gender-hero-p1'>New clothing season</p>
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
                            src={topCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Tops</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={blouseCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Blouses</a></label>
                        </div>
                    </div>
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
                            src={skirtCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Skirts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={dressCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Dresses</a></label>
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
                            src={jeanCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Jeans</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src={shortCat}
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Lingerie</a></label>
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
                        <Link to="/view" onClick={scrollToTop}>Table skirt</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={featurePro2}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Flare Metallic Pants</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={featurePro3}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Woven overcoat</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src={featurePro4}
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Bikini Animal Print</Link>
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
                <h3>Sportive</h3>
                <div className="gender-clothes-row">
                    <div className="gender-main-item">
                        <Link to="/view" onClick={scrollToTop}><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_16232.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link>
                        <label><Link to="/view" onClick={scrollToTop}>Sport Top Black</Link></label>
                        <label>$29</label>
                    </div>
                    <div className="gender-item-box">
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_29140.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Bone Biker</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_29146.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Leggins Capri</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_16206.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Black Sports Shorts</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_16223.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Sport Top Crew Neck</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_29144.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Leggings Capri Pink</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_16204.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Jasper Sports Shorts</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="gender-clothes-box">
                <h3>Shorts</h3>
                <div className="gender-clothes-row">

                    <div className="gender-main-item">
                        <Link to="/view" onClick={scrollToTop}><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36092.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link>
                        <label><Link to="/view" onClick={scrollToTop}>Nightgown Pink Angel</Link></label>
                        <label>$29</label>
                    </div>

                    <div className="gender-item-box">
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_37312.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Cotton Brassiere</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36086.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Black Thong</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_37459.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Marbled bikini</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_69_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Bikini Suaje</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34367.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Washed Khaki Pants</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_37481.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Top Seamless</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

