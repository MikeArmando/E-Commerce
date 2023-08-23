import React from 'react'
import './kids.css'

export const Kids = () => {
    return (
        <>
            <section className='kids-hero'>
                <a className='kids-hero-img' href='#!'>
                    <div>
                        <p className='kids-hero-p1'>Warm Clothes for the weather</p>
                        <p>With the most comfortable materials</p>
                        <a href='#!'>Buy Now</a>
                    </div>
                </a>
            </section>

            <section className='kids-item-center'>
                <h2>New Arrivals</h2>
                <div className='kids-item-box'>
                    <div className="kids-items">
                        <a href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34791.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='kids-text-center'>
                            <label><a href="#!">Pants</a></label>
                            <label><a href="#!">$29.99</a></label>
                        </div>
                    </div>
                    <div className="kids-items">
                        <a href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34791.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='kids-text-center'>
                            <label><a href="#!">Pants</a></label>
                            <label><a href="#!">$29.99</a></label>
                        </div>
                    </div>
                    <div className="kids-items">
                        <a href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34791.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='kids-text-center'>
                            <label><a href="#!">Pants</a></label>
                            <label><a href="#!">$29.99</a></label>
                        </div>
                    </div>
                    <div className="kids-items">
                        <a href="#!"><img
                            src="https://www.cuidadoconelperro.com.mx/media/catalog/product/1/_/1_34791.jpg?width=600&height=800&canvas=600,800&optimize=low&bg-color=255,255,255&fit=bounds"
                            alt=""></img></a>
                        <div className='kids-text-center'>
                            <label><a href="#!">Pants</a></label>
                            <label><a href="#!">$29.99</a></label>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}