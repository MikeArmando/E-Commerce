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
                            <td className='img-text'><img src='https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_31646.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds' alt=''></img><p>Black Denim Jacket</p></td>
                            <td>$25.00</td>
                            <td className='count-cart-btn'><button onClick={handleCountCartPlus}>+</button>{countCart}<button onClick={handleCountCartMinus}>-</button></td>
                            <td>$25.00</td>
                        </tr>
                        <tr>
                            <td className='img-text'><img src='https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_39948.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds  ' alt=''></img><p>Black Cargo Pants</p></td>
                            <td>$49.00</td>
                            <td className='count-cart-btn'><button onClick={handleCountCartPlusSec}>+</button>{countCartS}<button onClick={handleCountCartMinusSec}>-</button></td>
                            <td>$49.00</td>
                        </tr>
                    </table>
                </div>

                <div className='cart-info'>
                    <h2>Order Summary</h2>
                    <div>
                        <p>Subtotal: <p>$49.00</p></p>
                        <p>Shipping: <p>$10.00</p></p>
                        <p>Estimated tax: <p>$6.00</p></p>
                        <p>Order Total: <p>$59.00</p></p>
                    </div>
                    <div>
                        <a href='#!'>CheckOut</a>
                    </div>
                </div>

            </section>
        </>
    )
}
