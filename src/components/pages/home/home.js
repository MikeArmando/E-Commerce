import './home.css'

export const Home = () => {
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
                        <p id="collection-man-btn" onClick={CollectionManBtn}>Man</p>
                        <p id="collection-women-btn" onClick={CollectionWomenBtn}>Women</p>
                        <p id="collection-footwear-btn" onClick={CollectionFootwearBtn}>Footwear</p>
                        <p id="collection-accessories-btn" onClick={CollectionAccessoriesBtn}>Accessories</p>
                    </div>
                </div>
                <div className="collection-img-box">
                    <div>
                        <div>
                            <a href="#!"><img id="collection-img-1"
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_142_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></a>
                            <div>
                                <p id="collection-item-name1">Skulls Bart T-shirt</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                        <div>
                            <a href="#!"><img id="collection-img-2"
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_147_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></a>
                            <div>
                                <p id="collection-item-name2">Krusty T-shirt</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                        <div>
                            <a href="#!"><img id="collection-img-3"
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_140_6.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></a>
                            <div>
                                <p id="collection-item-name3">Krusty Sequence T-shirt</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                        <div>
                            <a href="#!"><img id="collection-img-4"
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_146_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></a>
                            <div>
                                <p id="collection-item-name4">Itchy & Scratchy T-shirt</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                        <div>
                            <a href="#!"><img id="collection-img-5"
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36160.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></a>
                            <div>
                                <p id="collection-item-name5">Krusty Car T-shirt</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                        <div>
                            <a href="#!"><img id="collection-img-6"
                                src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_141_3.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                                alt=""></img></a>
                            <div>
                                <p id="collection-item-name6">Bart Graffiti T-shirt</p>
                                <a href="#!">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

// data of the collection page
const collectionItems = [
    {
        id: 1,
        img: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_142_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img2: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_147_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img3: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_140_6.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img4: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_146_1.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img5: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36160.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img6: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_141_3.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        text: "Skulls Bart T-shirt.",
        text2: "Krusty T-shirt",
        text3: "Krusty Sequence T-shirt.",
        text4: "Itchy & Scratchy T-shirt.",
        text5: "Krusty Car T-shirt.",
        text6: "Bart Graffiti T-shirt."
    },
    {
        id: 2,
        img: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35533.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img2: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36092.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img3: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35475.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img4: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35480.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img5: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35538.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img6: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35479.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        text: "Stamped Sweatshirt",
        text2: "Nightgown Pink Angel",
        text3: "Floral T-shirt",
        text4: "Bad Mood T-shirt",
        text5: "Top Waffle Mustard",
        text6: "Stamped T-shirt"
    },
    {
        id: 3,
        img: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35949.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img2: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35827.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img3: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34639.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img4: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_32519.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img5: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34471.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img6: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_31560.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        text: "Men's White Tennis",
        text2: "Women's White Tennis",
        text3: "Women's Thick Heeled Sandal",
        text4: "Men's Black Tennis",
        text5: "Women's Multicolored Tennis",
        text6: "Men's White Tennis"
    },
    {
        id: 4,
        img: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36043.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img2: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_36039.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img3: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35953.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img4: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35821.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img5: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35823.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        img6: "https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_35819.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds",
        text: "Women's Square Lenses",
        text2: "Men's Oval Lenses",
        text3: "Men's Chilling Cap",
        text4: "Dragon Cap for Men",
        text5: "LA Men's Cap",
        text6: "Square Bag"
    }
]

// Gets the buttons to select with category the user chooses
let CollectionManBtn = document.querySelector("#collection-man-btn")
let CollectionWomenBtn = document.querySelector("#collection-women-btn")
let CollectionFootwearBtn = document.querySelector("#collection-footwear-btn")
let CollectionAccessoriesBtn = document.querySelector("#collection-accessories-btn")

// Gets the elements of the images

let CollectionItem1 = document.querySelector("#collection-img-1")
let CollectionItem2 = document.querySelector("#collection-img-2")
let CollectionItem3 = document.querySelector("#collection-img-3")
let CollectionItem4 = document.querySelector("#collection-img-4")
let CollectionItem5 = document.querySelector("#collection-img-5")
let CollectionItem6 = document.querySelector("#collection-img-6")

// Gets the name of the items
let collectionItemName1 = document.querySelector("#collection-item-name1")
let collectionItemName2 = document.querySelector("#collection-item-name2")
let collectionItemName3 = document.querySelector("#collection-item-name3")
let collectionItemName4 = document.querySelector("#collection-item-name4")
let collectionItemName5 = document.querySelector("#collection-item-name5")
let collectionItemName6 = document.querySelector("#collection-item-name6")

let currentItem = 0

CollectionManBtn = () => {
    currentItem = 0
    const items = collectionItems[currentItem]
    CollectionManBtn.style.color = "black"
    CollectionWomenBtn.style.color = ""
    CollectionFootwearBtn.style.color = ""
    CollectionAccessoriesBtn.style.color = ""
    // Replces the image of the item
    CollectionItem1.src = items.img
    CollectionItem2.src = items.img2
    CollectionItem3.src = items.img3
    CollectionItem4.src = items.img4
    CollectionItem5.src = items.img5
    CollectionItem6.src = items.img6

    // Replces the name of the item
    collectionItemName1.textContent = items.text
    collectionItemName2.textContent = items.text2
    collectionItemName3.textContent = items.text3
    collectionItemName4.textContent = items.text4
    collectionItemName5.textContent = items.text5
    collectionItemName6.textContent = items.text6
}
CollectionWomenBtn = () => {
    currentItem = 1
    const items = collectionItems[currentItem]
    CollectionWomenBtn.style.color = "black"
    CollectionManBtn.style.color = ""
    CollectionFootwearBtn.style.color = ""
    CollectionAccessoriesBtn.style.color = ""
    // Replces the image of the item
    CollectionItem1.src = items.img
    CollectionItem2.src = items.img2
    CollectionItem3.src = items.img3
    CollectionItem4.src = items.img4
    CollectionItem5.src = items.img5
    CollectionItem6.src = items.img6

    // Replces the name of the item
    collectionItemName1.textContent = items.text
    collectionItemName2.textContent = items.text2
    collectionItemName3.textContent = items.text3
    collectionItemName4.textContent = items.text4
    collectionItemName5.textContent = items.text5
    collectionItemName6.textContent = items.text6
}
CollectionFootwearBtn = () => {
    currentItem = 2
    const items = collectionItems[currentItem]
    CollectionFootwearBtn.style.color = "black"
    CollectionManBtn.style.color = ""
    CollectionWomenBtn.style.color = ""
    CollectionAccessoriesBtn.style.color = ""
    // Replces the image of the item
    CollectionItem1.src = items.img
    CollectionItem2.src = items.img2
    CollectionItem3.src = items.img3
    CollectionItem4.src = items.img4
    CollectionItem5.src = items.img5
    CollectionItem6.src = items.img6

    // Replces the name of the item
    collectionItemName1.textContent = items.text
    collectionItemName2.textContent = items.text2
    collectionItemName3.textContent = items.text3
    collectionItemName4.textContent = items.text4
    collectionItemName5.textContent = items.text5
    collectionItemName6.textContent = items.text6
}
CollectionAccessoriesBtn = () => {
    currentItem = 3
    const items = collectionItems[currentItem]
    CollectionAccessoriesBtn.style.color = "black"
    CollectionManBtn.style.color = ""
    CollectionWomenBtn.style.color = ""
    CollectionFootwearBtn.style.color = ""
    // Replces the image of the item
    CollectionItem1.src = items.img
    CollectionItem2.src = items.img2
    CollectionItem3.src = items.img3
    CollectionItem4.src = items.img4
    CollectionItem5.src = items.img5
    CollectionItem6.src = items.img6

    // Replces the name of the item
    collectionItemName1.textContent = items.text
    collectionItemName2.textContent = items.text2
    collectionItemName3.textContent = items.text3
    collectionItemName4.textContent = items.text4
    collectionItemName5.textContent = items.text5
    collectionItemName6.textContent = items.text6
}
