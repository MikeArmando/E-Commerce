import './view.css'
import { useState } from 'react'
import star from '../../../assets/img/star.png'
import fav from '../../../assets/img/icon-fav.png'

export const View = () => {

    const [img, setImg] = useState("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7b%2F37%2F7b376176aa5f77ba3461048b7aded33599567b87.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]")
    const [img2, setImg2] = useState("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1f%2Fb5%2F1fb5b03dea9d7148cc8b65dcdd5070afbed936a1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")
    const [img3, setImg3] = useState("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F72%2Fb8%2F72b863659327db88bdb56a73ed07b817c030e97e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")
    const [img4, setImg4] = useState("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9a%2F11%2F9a11c7861ab0d27ce0100f571d97f36e6124fe8c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")
    const [img5, setImg5] = useState("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F77%2F1e%2F771e5ee9eeebd2de49e58202456ffad3ba631bb7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")
    const [img6, setImg6] = useState("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F8a%2F05%2F8a0561cf9e80d09cec9d784aee18c9a691bccbe4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BMEN_TSHIRTSTANKS_POLO%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")

    const handleClickViewBlack = () => {
        setImg("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7b%2F37%2F7b376176aa5f77ba3461048b7aded33599567b87.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]")
        setImg2("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F1f%2Fb5%2F1fb5b03dea9d7148cc8b65dcdd5070afbed936a1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")
        setImg3("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F72%2Fb8%2F72b863659327db88bdb56a73ed07b817c030e97e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")
        setImg4("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F9a%2F11%2F9a11c7861ab0d27ce0100f571d97f36e6124fe8c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")
        setImg5("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F77%2F1e%2F771e5ee9eeebd2de49e58202456ffad3ba631bb7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")
        setImg6("https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F8a%2F05%2F8a0561cf9e80d09cec9d784aee18c9a691bccbe4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BMEN_TSHIRTSTANKS_POLO%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D")
    }

    const handleClickViewCreem = () => {
        setImg("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F00%2Fb5%2F00b59a36217dd4ab93ea695ac8952b86d862ec4e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg2("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2Fda%2Fdadae699ca5da84b797590255d31d2296b3d6f36.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg3("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F45%2Fee%2F45ee0b19fe0b2d4ddfd24686472b49607fd0ae9c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg4("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F03%2F40%2F03409cf9af85da8740613c6e53ab7bc2ec22f50b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg5("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2F1f%2F0a1f848d94223d6422b71a2184a42301c8ceec2b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg6("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F86%2F21%2F86217fddf680494152081271b9ad0d14c823dac7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]")
    }

    const handleClickViewBrown = () => {
        setImg("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdb%2Fe3%2Fdbe3e46d6f6ecb528acd8e093850f94a67186c69.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg2("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9b%2F81%2F9b81f52f077a2e68432c3e76fbab841444f479ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg3("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F15%2F41%2F154198e92175e4a84d1e190137e7bc06b4cf6c74.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg4("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0d%2Ff9%2F0df96a51611852c2fe9995d0a49ea00d1196682b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg5("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa4%2Fbe%2Fa4bee7a704903ae2b02fee6872ec6cc407621875.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]")
        setImg6("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F08%2F2c%2F082ca2a959ce71f712aad616047a06b5d74c3af8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]")
    }

    return (
        <>
            <section className='view-box'>
                <div className='view-img-box'>
                    <a href='#!'><img src={img}></img></a>
                    <a href='#!'><img src={img2}></img></a>
                    <a href='#!'><img src={img3}></img></a>
                    <a href='#!'><img src={img4}></img></a>
                    <a href='#!'><img src={img5}></img></a>
                    <a href='#!'><img src={img6}></img></a>
                </div>
                <div className='view-info-box'>
                    <p className='view-info-name'>Playera polo Slim Fit</p>
                    <img src={fav} className='view-fav'></img>
                    <p>$39.00</p>
                    <p className='view-color'>Black</p>
                    <div className='view-pro-img'>
                        <a href='#!' onClick={handleClickViewBlack}><div className='t'><img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2F05%2F8a0561cf9e80d09cec9d784aee18c9a691bccbe4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BMEN_TSHIRTSTANKS_POLO%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]'></img></div></a>
                        <a href='#!' onClick={handleClickViewCreem}><div className='t'><img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F86%2F21%2F86217fddf680494152081271b9ad0d14c823dac7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]'></img></div></a>
                        <a href='#!' onClick={handleClickViewBrown}><div className='t'><img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F08%2F2c%2F082ca2a959ce71f712aad616047a06b5d74c3af8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]'></img></div></a>
                    </div>
                    <p className='comms'>COMMENTS (12)<img src={star}></img><img src={star}></img><img src={star}></img><img src={star}></img><img src={star}></img></p>
                    <p className='size-text'>Size</p>
                    <div className='chart-box'>
                        <a href='#!'>XCH</a>
                        <a href='#!'>CH</a>
                        <a href='#!'>M</a>
                        <a href='#!'>G</a>
                        <a href='#!'>XG</a>
                    </div>
                    <a href='#!' className='chart-text'>Size chart</a>
                    <a href='#!' className='add-cart'>Add to cart</a>
                </div>
            </section>
        </>
    )
}
