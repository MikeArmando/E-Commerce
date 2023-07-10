import './home.css'
import { useState } from 'react'

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
        <div className='home-box'>
            <section className="background1">
                <div>
                    <h1 className="intro-text">Discover the new you</h1>
                    <div className="intro-btn-box">
                        <a className="intro-btn" href="#view-products">VIEW PRODUCTS</a>
                    </div>
                </div>
            </section>

            <section id="view-products" className="special-background">
                <h1>New Clothes, New Passion.</h1>
                <div className="special-box">
                    <div className="zoom zoom-item1">
                        <div className="item1"><a href="#!"><img className="item-img1"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35755.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a></div>
                        <div className="btnall-box btnall-box1">
                            <p>Denim Bleach Jacket</p>
                            <a className="btnall" href="#!">Buy Now</a>
                        </div>
                    </div>
                    <div className="zoom zoom-item2">
                        <div className="item2"><a href="#!"><img className="item-img2"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_32813.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a></div>
                        <div className="btnall-box btnall-box2">
                            <p>Khaki Chinese Pants</p>
                            <a className="btnall" href="#!">Buy Now</a>
                        </div>
                    </div>
                    <div className="zoom zoom-item3">
                        <div className="item3"><a href="#!"><img className="item-img3"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34250.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a></div>
                        <div className="btnall-box btnall-box3">
                            <p>Oxford Sweatshirt</p>
                            <a className="btnall" href="#!">Buy Now</a>
                        </div>
                    </div>
                    <div className="zoom zoom-item4">
                        <div className="item4"><a href="#!"><img className="item-img4"
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36163.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a></div>
                        <div className="btnall-box btnall-box4">
                            <p>Beige Bomber Jacket
                            </p>
                            <a className="btnall" href="#!">Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="special-backgroundM">
                <h1>New Clothes, New Passion.</h1>
                <div className="special-box">
                    <div className="zoom">
                        <div className="item2"><a href="#!"><img src="IMG/austin-wade-iQn82USu8gs-unsplash.jpg" alt=""></img></a></div>
                        <a className="btnall" href="#!">See Products</a>
                    </div>
                </div>
                <div className="special-box">
                    <div className="zoom">
                        <div className="item2"><a href="#!"><img src="IMG/taras-chernus-iIjResyhhW0-unsplash.jpg" alt=""></img></a></div>
                        <a className="btnall" href="#!">See Products</a>
                    </div>
                </div>
                <div className="special-box">
                    <div className="zoom">
                        <div className="item2"><a href="#!"><img src="IMG/hamza-nouasria-owpsBDBK5nY-unsplash.jpg" alt=""></img></a></div>
                        <a className="btnall" href="#!">See Products</a>
                    </div>
                </div>
            </section>

            <section className="Collection-box">
                <div className="collection-info-box">
                    <h4>New Collection</h4>
                    <div>
                        <p onClick={handleClickMen}>Man</p>
                        <p onClick={handleClickWomen}>Women</p>
                        <p onClick={handleClickFootwear}>Footwear</p>
                        <p onClick={handleClickAccessories}>Accessories</p>
                    </div>
                </div>
                <div className="collection-img-box">
                    <div>
                        <div>
                            <a href="#!"><img id="collection-img-1"
                                src={img}
                                alt=""></img></a>
                            <div>
                                <p>{text}</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                        <div>
                            <a href="#!"><img id="collection-img-2"
                                src={img2}
                                alt=""></img></a>
                            <div>
                                <p>{text2}</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                        <div>
                            <a href="#!"><img id="collection-img-3"
                                src={img3}
                                alt=""></img></a>
                            <div>
                                <p>{text3}</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                        <div>
                            <a href="#!"><img id="collection-img-4"
                                src={img4}
                                alt=""></img></a>
                            <div>
                                <p>{text4}</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                        <div>
                            <a href="#!"><img id="collection-img-5"
                                src={img5}
                                alt=""></img></a>
                            <div>
                                <p>{text5}</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                        <div>
                            <a href="#!"><img id="collection-img-6"
                                src={img6}
                                alt=""></img></a>
                            <div>
                                <p>{text6}</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}