import './cart.css'

export const Cart = () => {
    return (
        <>
            <section className='cart-box'>

                <div className='cart-items-box'>
                    <table className='cart-category'>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>$49.00</td>
                            <td>+1-</td>
                            <td>$49.00</td>
                        </tr>
                    </table>
                </div>

                <div className='cart-info'>
                    <h2>Order Summary</h2>
                    <div>
                        <p>Shipping</p>
                        <p>Subtotal</p>
                        <p>Estimated tax</p>
                        <p>Order Total</p>
                    </div>
                </div>

            </section>
        </>
    )
}
