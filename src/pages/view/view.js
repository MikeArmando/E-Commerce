import './view.css'
import { useState, useTransition } from 'react'
import star from '../../assets/img/star.png'
import fav from '../../assets/img/icon-fav.png'
import favRed from '../../assets/img/Untitled design.png'

export const View = () => {
    // Sets the border in the images
    const [viewImgB, setViewImgB] = useState(true);
    const [viewImgB2, setViewImgB2] = useState(false);
    const [viewImgB3, setViewImgB3] = useState(false);

    // changes the background of the size buttons to black and the text to white
    const [backgroundColor, setbackgroundColor] = useState('white');
    const [backgroundColor2, setbackgroundColor2] = useState('white');
    const [backgroundColor3, setbackgroundColor3] = useState('white');
    const [backgroundColor4, setbackgroundColor4] = useState('white');
    const [backgroundColor5, setbackgroundColor5] = useState('white');

    const [textColorBtn, settextColorBtn] = useState('black');
    const [textColorBtn2, settextColorBtn2] = useState('black');
    const [textColorBtn3, settextColorBtn3] = useState('black');
    const [textColorBtn4, settextColorBtn4] = useState('black');
    const [textColorBtn5, settextColorBtn5] = useState('black');

    const backgroundToBlack = () => {
        setbackgroundColor('black')
        settextColorBtn('white')
        setbackgroundColor2('')
        settextColorBtn2('')
        setbackgroundColor3('')
        settextColorBtn3('')
        setbackgroundColor4('')
        settextColorBtn4('')
        setbackgroundColor5('')
        settextColorBtn5('')
    }

    const backgroundToBlack2 = () => {
        setbackgroundColor2('black')
        settextColorBtn2('white')
        setbackgroundColor('')
        settextColorBtn('')
        setbackgroundColor3('')
        settextColorBtn3('')
        setbackgroundColor4('')
        settextColorBtn4('')
        setbackgroundColor5('')
        settextColorBtn5('')
    }

    const backgroundToBlack3 = () => {
        setbackgroundColor3('black')
        settextColorBtn3('white')
        setbackgroundColor('')
        settextColorBtn('')
        setbackgroundColor2('')
        settextColorBtn2('')
        setbackgroundColor4('')
        settextColorBtn4('')
        setbackgroundColor5('')
        settextColorBtn5('')
    }

    const backgroundToBlack4 = () => {
        setbackgroundColor4('black')
        settextColorBtn4('white')
        setbackgroundColor('')
        settextColorBtn('')
        setbackgroundColor2('')
        settextColorBtn2('')
        setbackgroundColor3('')
        settextColorBtn3('')
        setbackgroundColor5('')
        settextColorBtn5('')
    }

    const backgroundToBlack5 = () => {
        setbackgroundColor5('black')
        settextColorBtn5('white')
        setbackgroundColor('')
        settextColorBtn('')
        setbackgroundColor2('')
        settextColorBtn2('')
        setbackgroundColor3('')
        settextColorBtn3('')
        setbackgroundColor4('')
        settextColorBtn4('')
    }

    // Sets the name of the color
    const [imgColorName, setimgColorName] = useState('Black');

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

        setViewImgB(true);
        setViewImgB2(false);
        setViewImgB3(false);

        setimgColorName('Black');
    }

    const handleClickViewCreem = () => {
        setImg("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F00%2Fb5%2F00b59a36217dd4ab93ea695ac8952b86d862ec4e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg2("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fda%2Fda%2Fdadae699ca5da84b797590255d31d2296b3d6f36.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg3("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F45%2Fee%2F45ee0b19fe0b2d4ddfd24686472b49607fd0ae9c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg4("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F03%2F40%2F03409cf9af85da8740613c6e53ab7bc2ec22f50b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg5("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0a%2F1f%2F0a1f848d94223d6422b71a2184a42301c8ceec2b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg6("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F86%2F21%2F86217fddf680494152081271b9ad0d14c823dac7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]")

        setViewImgB(false);
        setViewImgB2(true);
        setViewImgB3(false);

        setimgColorName('Cream');
    }

    const handleClickViewBrown = () => {
        setImg("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fdb%2Fe3%2Fdbe3e46d6f6ecb528acd8e093850f94a67186c69.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg2("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F9b%2F81%2F9b81f52f077a2e68432c3e76fbab841444f479ef.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg3("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F15%2F41%2F154198e92175e4a84d1e190137e7bc06b4cf6c74.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg4("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0d%2Ff9%2F0df96a51611852c2fe9995d0a49ea00d1196682b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/fullscreen]")
        setImg5("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa4%2Fbe%2Fa4bee7a704903ae2b02fee6872ec6cc407621875.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]")
        setImg6("https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F08%2F2c%2F082ca2a959ce71f712aad616047a06b5d74c3af8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]")

        setViewImgB(false);
        setViewImgB2(false);
        setViewImgB3(true);

        setimgColorName('Brown');
    }

    // toggles the fav icon
    const [favColor, setfavColor] = useState(0)

    const images = [
        fav,
        favRed,
    ];

    const favRedChange = () => {
        // Increment the index to display the next image
        setfavColor((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <>
            <section className='view-box'>
                <div className='view-img-box'>
                    <a href='#!'><img src={img} alt=''></img></a>
                    <a href='#!'><img className='hidden-img-mobile' src={img2} alt=''></img></a>
                    <a href='#!'><img className='hidden-img-mobile' src={img3} alt=''></img></a>
                    <a href='#!'><img className='hidden-img-mobile' src={img4} alt=''></img></a>
                    <a href='#!'><img className='hidden-img-mobile' src={img5} alt=''></img></a>
                    <a href='#!'><img className='hidden-img-mobile' src={img6} alt=''></img></a>
                </div>

                <div className='view-info-box'>
                    <p className='view-info-name'>Playera polo Slim Fit</p>
                    <img src={images[favColor]} className='view-fav' onClick={favRedChange} alt={`${favColor + 1}`}></img>
                    <p>$39.00</p>
                    <p className='view-color'>{imgColorName}</p>
                    <div className='view-pro-img'>
                        <a href='#!' onClick={handleClickViewBlack}><div className={`view-img-border ${viewImgB ? 'clicked' : ''}`}
                        ><img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2F05%2F8a0561cf9e80d09cec9d784aee18c9a691bccbe4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5BMEN_TSHIRTSTANKS_POLO%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]' alt=''></img></div></a>
                        <a href='#!' onClick={handleClickViewCreem}><div className={`view-img-border ${viewImgB2 ? 'clicked' : ''}`}><img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F86%2F21%2F86217fddf680494152081271b9ad0d14c823dac7.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]' alt=''></img></div></a>
                        <a href='#!' onClick={handleClickViewBrown}><div className={`view-img-border ${viewImgB3 ? 'clicked' : ''}`}><img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F08%2F2c%2F082ca2a959ce71f712aad616047a06b5d74c3af8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]' alt=''></img></div></a>
                    </div>
                    <p className='comms'>COMMENTS (122)<img src={star} alt=''></img><img src={star} alt=''></img><img src={star} alt=''></img><img src={star} alt=''></img><img src={star} alt=''></img></p>
                    <p className='size-text'>Size</p>
                    <div className='chart-box'>
                        <a href='#!' onClick={backgroundToBlack} style={{ backgroundColor: backgroundColor, color: textColorBtn }}>XCH</a>
                        <a href='#!' onClick={backgroundToBlack2} style={{ backgroundColor: backgroundColor2, color: textColorBtn2 }}>CH</a>
                        <a href='#!' onClick={backgroundToBlack3} style={{ backgroundColor: backgroundColor3, color: textColorBtn3 }}>M</a>
                        <a href='#!' onClick={backgroundToBlack4} style={{ backgroundColor: backgroundColor4, color: textColorBtn4 }}>G</a>
                        <a href='#!' onClick={backgroundToBlack5} style={{ backgroundColor: backgroundColor5, color: textColorBtn5 }}>XG</a>
                    </div>
                    <a href='#!' className='chart-text'>Size chart</a>
                    <a href='#!' className='add-cart'>Add to cart</a>
                </div>
            </section>
        </>
    )
}
