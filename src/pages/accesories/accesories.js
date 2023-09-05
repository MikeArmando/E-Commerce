import './accesories.css'
import { Link } from 'react-router-dom'

export const Accesories = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }

    return (
        <>
            <section className='accesories-hero'>
                <a className='accesories-hero-img' href='#!'>
                    <div>
                        <p className='accesories-hero-p1'>The Best Quality Can Offer</p>
                        <p>With the most comfortable materials</p>
                        <a href='#!'>Buy Now</a>
                    </div>
                </a>
            </section>

            <section className="accesories-feature-box">
                <div>
                    <h2>Popular Products</h2>
                </div>
                <div className="accesories-feature-row">
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F57%2F11%2F5711c7e6ae651b13af3bb4e028a135ef9d0453e3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_jewellery_rings%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>3-pack Rings</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F22%2F7322d5afe5e85ac0e773eb7b6d8ff41556a346ca.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Twill Cap</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1c%2Fcf%2F1ccf170ad7b9c6b7da275b5b39cef47abf08d217.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Strap Bag</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2Fb1%2F8ab17900d081b84be478945e624580979effd2b9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>2-pack Necklace</Link>
                    </div>
                </div>
            </section>

            <section className="accesories-com-box">
                <h2>Stylish Essentials</h2>
                <p>Complement your stylish look with our shirts, shoes and suit accessories.</p>
                <div><a href="#!">View More</a></div>
            </section>

            <section className='accesories-pro'>
                <div>
                    <h2>Accesories</h2>
                </div>
                <div className="accesories-pro-row">
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F36%2F70%2F3670b6e03a90ce4109e079548eb415392fb3b6da.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Black Leather Belt</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa3%2F37%2Fa3370ce34a36c83bb8160e84e55a5fcd8782410c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_bags_backpack%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Backpack</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1c%2Fcf%2F1ccf170ad7b9c6b7da275b5b39cef47abf08d217.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Strap Bag</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F37%2Fb5%2F37b5f7ea90ff9c4af702bc37fd9c69dcbe0a1fec.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_hatscaps_caps%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Beret In Wool Mix</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F57%2F11%2F5711c7e6ae651b13af3bb4e028a135ef9d0453e3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_jewellery_rings%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>3-pack Rings</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F22%2F7322d5afe5e85ac0e773eb7b6d8ff41556a346ca.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Twill Cap</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1c%2Fcf%2F1ccf170ad7b9c6b7da275b5b39cef47abf08d217.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Strap Bag</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9e%2Fd1%2F9ed1aacbe8bdb05d51a841a86674d13022f2ce84.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Water-repellent sports backpack</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F57%2F11%2F5711c7e6ae651b13af3bb4e028a135ef9d0453e3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_jewellery_rings%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>3-pack Rings</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F22%2F7322d5afe5e85ac0e773eb7b6d8ff41556a346ca.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Twill Cap</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1c%2Fcf%2F1ccf170ad7b9c6b7da275b5b39cef47abf08d217.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Strap Bag</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                    <div><Link to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9e%2Fd1%2F9ed1aacbe8bdb05d51a841a86674d13022f2ce84.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <Link to="/view" onClick={scrollToTop}>Water-repellent sports backpack</Link>
                        <Link to="/view" onClick={scrollToTop}>$10.50</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
