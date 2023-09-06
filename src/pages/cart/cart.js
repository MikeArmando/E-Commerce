import './cart.css'
import { useState } from 'react'

export const Cart = () => {
    // changes the number of items
    const [countCart, setCountCart] = useState(1);
    const [countCartS, setCountCartS] = useState(1);

    const handleCountCartPlus = () => {
        setCountCart(countCart + 1)
    };

    const handleCountCartPlusSec = () => {
        setCountCartS(countCartS + 1)
    };

    const handleCountCartMinus = () => {
        setCountCart(countCart - 1)

        // makes it so count can only go down to 0
        if (countCart === 0) {
            setCountCart(countCart)

        } else {
            setCountCart(countCart - 1)
        }
    };

    const handleCountCartMinusSec = () => {
        setCountCartS(countCartS - 1)

        // makes it so count can only go down to 0
        if (countCartS === 0) {
            setCountCartS(countCartS)

        } else {
            setCountCartS(countCartS - 1)
        }
    };

    return (
        <>
            <section className='cart-page-box'>
                <div className='cart-items-box'>
                    <table className='cart-category'>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td className='img-text'><img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F69%2Fe8%2F69e81c9fc4199eb27b2ac256c439b6fee57916d3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]' alt=''></img><p>Black Denim Jacket</p></td>
                            <td>$25.00</td>
                            <td className='count-cart-btn'><button onClick={handleCountCartPlus}>+</button>{countCart}<button onClick={handleCountCartMinus}>-</button></td>
                            <td>$25.00</td>
                        </tr>
                        <tr>
                            <td className='img-text'><img src='https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa3%2Ff5%2Fa3f56f6e47160e931b78296bb9e479bfbcab3554.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/fullscreen]' alt=''></img><p>Black Cargo Pants</p></td>
                            <td>$49.00</td>
                            <td className='count-cart-btn'><button onClick={handleCountCartPlusSec}>+</button>{countCartS}<button onClick={handleCountCartMinusSec}>-</button></td>
                            <td>$49.00</td>
                        </tr>
                    </table>
                </div>

                <div className='cart-info'>
                    <h2>Order Summary</h2>
                    <div>
                        <p className='cart-order-items'>Subtotal: <p>$49.00</p></p>
                        <p className='cart-order-items'>Shipping: <p>$10.00</p></p>
                        <p className='cart-order-items'>Estimated tax: <p>$6.00</p></p>
                        <p className='cart-line'></p>
                        <p className='cart-total'>Total: <p>$59.00</p></p>
                    </div>
                    <div className='cart-checkout'>
                        <a href='#!'>CheckOut</a>
                    </div>
                </div>

            </section>
        </>
    )
}
