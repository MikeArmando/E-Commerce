import './cart.css'

export const Cart = () => {
    return (
        <>
        <section className='cart-box'>

            <div className='cart-items-box'>
                <div className='cart-category'>

                </div>
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
