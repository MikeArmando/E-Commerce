import './fav.css'
import { Link } from 'react-router-dom'

export const Fav = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }

    return (
        <>
            <section className='fav-box'>
                <h2>Favorites</h2>
                <div className='fav-item-box'>
                    <div><Link className='fav-pro-img' to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F57%2F11%2F5711c7e6ae651b13af3bb4e028a135ef9d0453e3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_accessories_jewellery_rings%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <div>
                            <Link className='fav-name' to="/view" onClick={scrollToTop}>3-pack Rings</Link>
                            <p>$25.00</p>
                            <a className='fav-add' href='#!'>Add To Cart</a>
                        </div>
                    </div>
                    <div><Link className='fav-pro-img' to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F73%2F22%2F7322d5afe5e85ac0e773eb7b6d8ff41556a346ca.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <div>
                            <Link className='fav-name' to="/view" onClick={scrollToTop}>Twill Cap</Link>
                            <p>$25.00</p>
                            <a className='fav-add' href='#!'>Add To Cart</a>
                        </div>
                    </div>
                    <div><Link className='fav-pro-img' to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F1c%2Fcf%2F1ccf170ad7b9c6b7da275b5b39cef47abf08d217.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <div>
                            <Link className='fav-name' to="/view" onClick={scrollToTop}>Strap Bag</Link>
                            <p>$25.00</p>
                            <a className='fav-add' href='#!'>Add To Cart</a>
                        </div>
                    </div>
                    <div><Link className='fav-pro-img' to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2Fb1%2F8ab17900d081b84be478945e624580979effd2b9.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <div>
                            <Link className='fav-name' to="/view" onClick={scrollToTop}>2-pack Necklace</Link>
                            <p>$25.00</p>
                            <a className='fav-add' href='#!'>Add To Cart</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
