import './home.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {

    const [img, setImg] = useState("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_142_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
    const [img2, setImg2] = useState("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_147_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
    const [img3, setImg3] = useState("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_140_6.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
    const [img4, setImg4] = useState("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_146_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
    const [img5, setImg5] = useState("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36160.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
    const [img6, setImg6] = useState("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_141_3.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")

    const [text, setText] = useState("Name")
    const [text2, setText2] = useState("Skulls Bart T-shirt")
    const [text3, setText3] = useState("Krusty T-shirt")
    const [text4, setText4] = useState("Krusty Sequence T-shirt")
    const [text5, setText5] = useState("Krusty Car T-shirt")
    const [text6, setText6] = useState("Bart Graffiti T-shirt")

    const handleClickMen = () => {
        setImg("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_142_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg2("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_147_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg3("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_140_6.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg4("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_146_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg5("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36160.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg6("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_141_3.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")

        setText("Skulls Bart T-shirt")
        setText2("Krusty T-shirt")
        setText3("Krusty Sequence T-shirt")
        setText4("Itchy & Scratchy T-shirt")
        setText5("Krusty Car T-shirt")
        setText6("Bart Graffiti T-shirt")
    }
    const handleClickWomen = () => {
        setImg("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35533.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg2("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36092.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg3("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35475.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg4("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35480.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg5("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35538.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg6("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35479.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")

        setText("Stamped Sweatshirt")
        setText2("Nightgown Pink Angel")
        setText3("Floral T-shirt")
        setText4("Bad Mood T-shirt")
        setText5("Top Waffle Mustard")
        setText6("Stamped T-shirt")
    }
    const handleClickFootwear = () => {
        setImg("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35949.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg2("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35827.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg3("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34639.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg4("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_32519.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg5("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34471.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg6("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_31560.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")

        setText("Men's White Tennis")
        setText2("Women's White Tennis")
        setText3("Women's Thick Heeled Sandal")
        setText4("Men's Black Tennis")
        setText5("Women's Multicolored Tennis")
        setText6("Men's White Tennis")
    }
    const handleClickAccessories = () => {
        setImg("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36043.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg2("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35953.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg3("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35953.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg4("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35821.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg5("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35823.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")
        setImg6("https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35819.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds")

        setText("Women's Square Lenses")
        setText2("Men's Oval Lenses")
        setText3("Men's Chilling Cap")
        setText4("Dragon Cap for Men")
        setText5("LA Men's Cap")
        setText6("Square Bag")
    }

    return (
        <>
            <section className="background1">
                <div>
                    <h1 className="intro-text">Smart, Well Fitted, Casual Pieces</h1>
                    <a className="intro-btn" href="#view-products">View More</a>
                </div>
            </section>

            <label id="view-products"></label>

            <section className="special-background">
                <h1>New Clothes, New Passion.</h1>
                <div className="special-box">
                    <div id='hidden' className="zoom zoom-item1">
                        <div className="item1"><Link to="/view"><img className="item-img1 allSpecialItems"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35755.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link></div>
                        <div className="btnall-box btnall-box1">
                            <p>Denim Bleach Jacket</p>
                            <Link className="btnall" to="/view">Buy Now</Link>
                        </div>
                    </div>
                    <div id='hidden' className="zoom zoom-item2">
                        <div className="item2"><Link to="/view"><img className="item-img2 allSpecialItems"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_37378.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link></div>
                        <div className="btnall-box btnall-box2">
                            <p>Jogger Felpa Cargo</p>
                            <Link className="btnall" to="/view">Buy Now</Link>
                        </div>
                    </div>
                    <div id='hidden' className="zoom zoom-item3">
                        <div className="item3"><Link to="/view"><img className="item-img3 allSpecialItems"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34250.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link></div>
                        <div className="btnall-box btnall-box3">
                            <p>Oxford Sweatshirt</p>
                            <Link className="btnall" to="/view">Buy Now</Link>
                        </div>
                    </div>
                    <div id='hidden' className="zoom zoom-item4">
                        <div className="item4"><Link to="/view"><img className="item-img4 allSpecialItems"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36163.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></Link></div>
                        <div className="btnall-box btnall-box4">
                            <p>Beige Bomber Jacket
                            </p>
                            <Link className="btnall" to="/view">Buy Now</Link>
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
                            <Link to="/view"><img id="collection-img-1"
                                src={img}
                                alt=""></img></Link>
                            <div>
                                <p>{text}</p>
                                <Link to="/view">Buy Now</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/view"><img id="collection-img-2"
                                src={img2}
                                alt=""></img></Link>
                            <div>
                                <p>{text2}</p>
                                <Link to="/view">Buy Now</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/view"><img id="collection-img-3"
                                src={img3}
                                alt=""></img></Link>
                            <div>
                                <p>{text3}</p>
                                <Link to="/view">Buy Now</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/view"><img id="collection-img-4"
                                src={img4}
                                alt=""></img></Link>
                            <div>
                                <p>{text4}</p>
                                <Link to="/view">Buy Now</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/view"><img id="collection-img-5"
                                src={img5}
                                alt=""></img></Link>
                            <div>
                                <p>{text5}</p>
                                <Link to="/view">Buy Now</Link>
                            </div>
                        </div>
                        <div>
                            <Link to="/view"><img id="collection-img-6"
                                src={img6}
                                alt=""></img></Link>
                            <div>
                                <p>{text6}</p>
                                <Link to="/view">Buy Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}