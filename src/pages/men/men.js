import './gender.css'
import { Link } from 'react-router-dom'

export const Men = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }

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
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_40225.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">T-Shirts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_331_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Shirts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_39931.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Pants</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_39299.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">jackets</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_39849.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">sweatshirts</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_39948.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">joggers</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_38236.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='category-center'>
                            <label><a href="#!">Swimsuits</a></label>
                        </div>
                    </div>
                    <div className="gender-gate-items">
                        <a className='image-effect' href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_290_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
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
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35885.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link className='feature-name' to="/view" onClick={scrollToTop}>T-shirt Absence Of Fear</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_26424.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link className='feature-name' to="/view" onClick={scrollToTop}>Jeans Slim Tapered Dark</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35382.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link className='feature-name' to="/view" onClick={scrollToTop}>Jogger Cargo</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_32640.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                        alt=""></img></Link>
                        <Link className='feature-name' to="/view" onClick={scrollToTop}>Grey Denim Jacket</Link>
                    </div>
                </div>
            </section>

            <section className="gender-collection-box">
                <div className="gender-collection-row">
                    <div className="gender-clothes-img">
                        <Link to="/view" onClick={scrollToTop}><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_147_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt="#!"></img>
                        </Link>
                        <div>
                            <h3>Simpsons</h3>
                            <a href="#!">View Collection</a>
                        </div>
                    </div>
                    <div className="gender-clothes-img gender-clothes-img-rev">
                        <div>
                            <h3>Bombers</h3>
                            <a href="#!">View Collection</a>
                        </div>
                        <Link to="/view" onClick={scrollToTop}><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34939.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
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
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34512.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link>
                        <label><Link to="/view" onClick={scrollToTop}>Slim Stone Jeans Medium</Link></label>
                        <label className='main-item-price'>$29</label>
                    </div>
                    <div className="gender-item-box">
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36889.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Skinny Jeans Washed Black</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_3_2.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Jeans Ultra Skinny Remounted</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_33388.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Washed Black Denim Jacket</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_31716.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Jeans Slim Destructions</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_29390.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Straight Bleach Jeans</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_29391.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
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
                <h3>Underwear</h3>
                <div className="gender-clothes-row">

                    <div className="gender-main-item">
                        <Link to="/view" onClick={scrollToTop}><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_17140.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link>
                        <label><Link to="/view" onClick={scrollToTop}>Tank Top</Link></label>
                        <label className='main-item-price'>$29</label>
                    </div>

                    <div className="gender-item-box">
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_17141.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>Tank Top</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_76_3.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>2 Men's Boxer Pack</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35387.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>2 Pack Boxer Brush for Men</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_37128.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>1 Pack Men's Socks</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35936.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>3 Men's Short Boxer Pack</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                        <div className="gender-items">
                            <Link to="/view" onClick={scrollToTop}><img
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_37130.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></Link>
                            <div>
                                <label><Link to="/view" onClick={scrollToTop}>1 Pack Men's Socks</Link></label>
                                <label>$29</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}