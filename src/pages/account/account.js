import './account.css'

export const Account = () => {
    return (
        <div className='Account'>
            <section className="account-body">
                <div className="acoount-box">
                    <h1>Login</h1>
                    <p>Enter your email and password</p>
                    <input type="text" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <button><a className="signinLink" href="#!">Sign in</a></button>
                    <p>Don't have an account? <a className="createOneLink" href="#!">Create one</a></p>
                </div>
            </section>
        </div>
    )
}