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
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fea%2Fc4%2Feac4b99cf4f5afbd6e85d7fb46f6ec92c71bac88.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <div>
                            <Link className='fav-name' to="/view" onClick={scrollToTop}>3-pack Rings</Link>
                            <p className='fav-price'>$25.00</p>
                            <p className='fav-color'>Color: Black</p>
                            <a className='fav-add' href='#!'>Add To Cart</a>
                        </div>
                    </div>
                    <div><Link className='fav-pro-img' to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe9%2F93%2Fe993d41a8238272840aafcdd89af47ef9bb665c1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_jacketscoats_bomberjackets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <div>
                            <Link className='fav-name' to="/view" onClick={scrollToTop}>Twill Cap</Link>
                            <p className='fav-price'>$25.00</p>
                            <p className='fav-color'>Color: Green</p>
                            <a className='fav-add' href='#!'>Add To Cart</a>
                        </div>
                    </div>
                    <div><Link className='fav-pro-img' to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2F05%2F8a0561cf9e80d09cec9d784aee18c9a691bccbe4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BMEN_TSHIRTSTANKS_POLO%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <div>
                            <Link className='fav-name' to="/view" onClick={scrollToTop}>Strap Bag</Link>
                            <p className='fav-price'>$25.00</p>
                            <p className='fav-color'>Color: Black</p>
                            <a className='fav-add' href='#!'>Add To Cart</a>
                        </div>
                    </div>
                    <div><Link className='fav-pro-img' to="/view" onClick={scrollToTop}><img
                        src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F2d%2F26%2F2d2609565fb8a4394d1da21f24e55c52ba1e5184.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]"
                        alt=""></img></Link>
                        <div>
                            <Link className='fav-name' to="/view" onClick={scrollToTop}>2-pack Necklace</Link>
                            <p className='fav-price'>$25.00</p>
                            <p className='fav-color'>Color: Cream</p>
                            <a className='fav-add' href='#!'>Add To Cart</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
