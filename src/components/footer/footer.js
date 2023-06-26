import './footer.css'

export const Footer = () => {
    return (
        <div>
            <footer class="footer">
                <div class="footer-box">
                    <div class="clothing-box">
                        <h3>Man</h3>
                        <p><a href="">Clothes</a></p>
                        <p><a href="">Jenas</a></p>
                        <p><a href="">Underwear</a></p>
                    </div>
                    <div class="clothing-box">
                        <h3>Woman</h3>
                        <p><a href="">Clothes</a></p>
                        <p><a href="">Jenas</a></p>
                        <p><a href="">Sportive</a></p>
                        <p><a href="">Lingerie</a></p>
                    </div>
                    <div class="clothing-box">
                        <h3>Collections</h3>
                        <p><a href="">Basic Collection</a></p>
                        <p><a href="">Casual Collection</a></p>
                    </div>
                    <div class="info-box">
                        <h3>Information</h3>
                        <p><a href="">Frequent questions</a></p>
                        <p><a href="">Rewards Terms of Service</a></p>
                        <p><a href="">Privacy Policy</a></p>
                        <p><a href="">Returns & Exchanges</a></p>
                        <p><a href="">Shipping Policy</a></p>
                        <p><a href="">Customer service</a></p>
                    </div>
                    <div class="follow-box">
                        <h3>Follow us</h3>
                        <p>Come Join Us</p>
                        <a class="insta-icon social-icons" href=""><i class="fab fa-instagram"></i></a>
                        <a class="face-icon social-icons" href=""><i class="fab fa-facebook-square"></i></a>
                        <a class="twitter-icon social-icons" href=""><i class="fab fa-twitter"></i></a>
                        <a class="linked-icon social-icons" href=""><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <div class="join-box">
                        <h3>Join us</h3>
                        <p>Subscribe & Receive Exclusives</p>
                        <div>
                            <input placeholder="Enter your email" type="text"></input>
                            <button><a href="">Register</a></button>
                        </div>
                    </div>
                </div>
                <label for="">&copy; Montano Valencia Mike Armando 2023 | Todos los Derechos Reservados</label>
            </footer>
        </div>
    )
}
