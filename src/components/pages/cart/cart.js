import './cart.css'

export const Cart = () => {
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
                            <td>$49.00</td>
                            <td>+1-</td>
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
