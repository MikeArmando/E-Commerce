import './account.css'

export const Account = () => {
    return (
        <div className='Account'>
            <section class="account-body">
                <div class="acoount-box">
                    <h1>Login</h1>
                    <p>Enter your email and password</p>
                    <input type="text" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button><a class="signinLink" href="">Sign in</a></button>
                    <p>Don't have an account? <a class="createOneLink" href="">Create one</a></p>
                </div>
            </section>
        </div>
    )
}