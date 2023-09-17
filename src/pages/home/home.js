import './home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
// Men collection images
import collMenImg1 from '../../assets/img/1_40223.webp'
import collMenImg2 from '../../assets/img/1_40247.webp'
import collMenImg3 from '../../assets/img/1_40241.webp'
import collMenImg4 from '../../assets/img/1_40354.webp'
import collMenImg5 from '../../assets/img/1_40360.webp'
import collMenImg6 from '../../assets/img/1_39848.webp'
// women collection images
import collWomImg1 from '../../assets/img/1_35533.webp'
import collWomImg2 from '../../assets/img/1_36092.webp'
import collWomImg3 from '../../assets/img/1_35475.webp'
import collWomImg4 from '../../assets/img/1_35480.webp'
import collWomImg5 from '../../assets/img/1_35538.webp'
import collWomImg6 from '../../assets/img/1_35479.webp'
// Footwear collection images
import collFootImg1 from '../../assets/img/1_35949.webp'
import collFootImg2 from '../../assets/img/1_35827.webp'
import collFootImg3 from '../../assets/img/1_34639.webp'
import collFootImg4 from '../../assets/img/1_32519.webp'
import collFootImg5 from '../../assets/img/1_34471.webp'
import collFootImg6 from '../../assets/img/1_31560.webp'
// Accesories collection images
import collAcceImg1 from '../../assets/img/1_38986.webp'
import collAcceImg2 from '../../assets/img/1_39090.webp'
import collAcceImg3 from '../../assets/img/1_39161.webp'
import collAcceImg4 from '../../assets/img/1_179_1.webp'
import collAcceImg5 from '../../assets/img/1_38728.webp'
import collAcceImg6 from '../../assets/img/1_38735.webp'

export const Home = () => {

    const [img, setImg] = useState(collMenImg1)
    const [img2, setImg2] = useState(collMenImg2)
    const [img3, setImg3] = useState(collMenImg3)
    const [img4, setImg4] = useState(collMenImg4)
    const [img5, setImg5] = useState(collMenImg5)
    const [img6, setImg6] = useState(collMenImg6)

    const [text, setText] = useState("Name")
    const [text2, setText2] = useState("Skulls Bart T-shirt")
    const [text3, setText3] = useState("Krusty T-shirt")
    const [text4, setText4] = useState("Krusty Sequence T-shirt")
    const [text5, setText5] = useState("Krusty Car T-shirt")
    const [text6, setText6] = useState("Bart Graffiti T-shirt")

    const handleClickMen = () => {
        setImg(collMenImg1)
        setImg2(collMenImg2)
        setImg3(collMenImg3)
        setImg4(collMenImg4)
        setImg5(collMenImg5)
        setImg6(collMenImg6)

        setText("Skulls Bart T-shirt")
        setText2("Krusty T-shirt")
        setText3("Krusty Sequence T-shirt")
        setText4("Itchy & Scratchy T-shirt")
        setText5("Krusty Car T-shirt")
        setText6("Bart Graffiti T-shirt")
    }
    const handleClickWomen = () => {
        setImg(collWomImg1)
        setImg2(collWomImg2)
        setImg3(collWomImg3)
        setImg4(collWomImg4)
        setImg5(collWomImg5)
        setImg6(collWomImg6)

        setText("Stamped Sweatshirt")
        setText2("Nightgown Pink Angel")
        setText3("Floral T-shirt")
        setText4("Bad Mood T-shirt")
        setText5("Top Waffle Mustard")
        setText6("Stamped T-shirt")
    }
    const handleClickFootwear = () => {
        setImg(collFootImg1)
        setImg2(collFootImg2)
        setImg3(collFootImg3)
        setImg4(collFootImg4)
        setImg5(collFootImg5)
        setImg6(collFootImg6)

        setText("Men's White Tennis")
        setText2("Women's White Tennis")
        setText3("Women's Thick Heeled Sandal")
        setText4("Men's Black Tennis")
        setText5("Women's Multicolored Tennis")
        setText6("Men's White Tennis")
    }
    const handleClickAccessories = () => {
        setImg(collAcceImg1)
        setImg2(collAcceImg2)
        setImg3(collAcceImg3)
        setImg4(collAcceImg4)
        setImg5(collAcceImg5)
        setImg6(collAcceImg6)

        setText("Women's Square Lenses")
        setText2("Men's Oval Lenses")
        setText3("Men's Chilling Cap")
        setText4("Dragon Cap for Men")
        setText5("LA Men's Cap")
        setText6("Square Bag")
    }

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
    const [ref3, inView3] = useInView({
        triggerOnce: true,
    });
    const [ref4, inView4] = useInView({
        triggerOnce: true,
    });

    return (
        <>
            <section className="background1">
                <div>
                    <h1 className="intro-text">Smart, Well Fitted, Casual Pieces</h1>
                    <a className="intro-btn" href="#view-products">View More</a>
                </div>
            </section>

            <label id="view-products"></label>

            <section className='special-background'>
                <h2>New Clothes, New Passion.</h2>
                <div className='special-box'>
                    <div id='hidden' className={`zoom zoom-item1 ${inView ? 'fade-in' : ''}`} ref={ref}>
                        <div className="item1"><Link to="/view" onClick={scrollToTop}><img className="item-img1 allSpecialItems"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35755.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link></div>
                        <div className="btnall-box btnall-box1">
                            <Link to="/view" onClick={scrollToTop} className='special-item-name special-item-name1'>Denim Bleach Jacket</Link>
                            <p>$35.00</p>
                            <Link className="btnall" to="/view" onClick={scrollToTop}>Buy Now</Link>
                        </div>
                    </div>
                    <div id='hidden' className={`zoom zoom-item2 ${inView2 ? 'fade-in' : ''}`} ref={ref2}>
                        <div className="item2"><Link to="/view" onClick={scrollToTop}><img className="item-img2 allSpecialItems"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_37378.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link></div>
                        <div className="btnall-box btnall-box2">
                            <Link to="/view" onClick={scrollToTop} className='special-item-name special-item-name2'>Jogger Felpa Cargo</Link>
                            <p>$29.50</p>
                            <Link className="btnall" to="/view" onClick={scrollToTop}>Buy Now</Link>
                        </div>
                    </div>
                    <div id='hidden' className={`zoom zoom-item3 ${inView3 ? 'fade-in' : ''}`} ref={ref3}>
                        <div className="item3"><Link to="/view" onClick={scrollToTop}><img className="item-img3 allSpecialItems"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34250.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link></div>
                        <div className="btnall-box btnall-box3">
                            <Link to="/view" onClick={scrollToTop} className='special-item-name special-item-name3'>Oxford Sweatshirt</Link>
                            <p>$20.00</p>
                            <Link className="btnall" to="/view" onClick={scrollToTop}>Buy Now</Link>
                        </div>
                    </div>
                    <div id='hidden' className={`zoom zoom-item4 ${inView4 ? 'fade-in' : ''}`} ref={ref4}>
                        <div className="item4"><Link to="/view" onClick={scrollToTop}><img className="item-img4 allSpecialItems"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36163.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link></div>
                        <div className="btnall-box btnall-box4">
                            <Link to="/view" onClick={scrollToTop} className='special-item-name special-item-name4'>Beige Bomber Jacket</Link>
                            <p>$35.00</p>
                            <Link className="btnall" to="/view" onClick={scrollToTop}>Buy Now</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="Collection-box">
                <div className="collection-info-box">
                    <h4>Popular Products</h4>
                    <div className='collection-title-box'>
                        <p onClick={handleClickMen}>Man</p>
                        <p onClick={handleClickWomen}>Women</p>
                        <p onClick={handleClickFootwear}>Footwear</p>
                        <p onClick={handleClickAccessories}>Accessories</p>
                    </div>
                </div>
                <div className="collection-img-box">
                    <div>
                        <div>
                            <Link to="/view" onClick={scrollToTop}><img id="collection-img-1"
                                src={img}
                                alt=""></img></Link>
                            <div>
                                <p>{text}</p>
                                <Link to="/view" onClick={scrollToTop}>Buy Now</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/view" onClick={scrollToTop}><img id="collection-img-2"
                                src={img2}
                                alt=""></img></Link>
                            <div>
                                <p>{text2}</p>
                                <Link to="/view" onClick={scrollToTop}>Buy Now</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/view" onClick={scrollToTop}><img id="collection-img-3"
                                src={img3}
                                alt=""></img></Link>
                            <div>
                                <p>{text3}</p>
                                <Link to="/view" onClick={scrollToTop}>Buy Now</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/view" onClick={scrollToTop}><img id="collection-img-4"
                                src={img4}
                                alt=""></img></Link>
                            <div>
                                <p>{text4}</p>
                                <Link to="/view" onClick={scrollToTop}>Buy Now</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/view" onClick={scrollToTop}><img id="collection-img-5"
                                src={img5}
                                alt=""></img></Link>
                            <div>
                                <p>{text5}</p>
                                <Link to="/view" onClick={scrollToTop}>Buy Now</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/view" onClick={scrollToTop}><img id="collection-img-6"
                                src={img6}
                                alt=""></img></Link>
                            <div>
                                <p>{text6}</p>
                                <Link to="/view" onClick={scrollToTop}>Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}