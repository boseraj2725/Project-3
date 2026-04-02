import React from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
    const god = useNavigate();

    function so() {
        god("/home")
    }
    return (
        <section class="hero">
            <img src='img1.webp'/>
            <div class="overlay"><h1>COMBAT GAME</h1></div>

            <div class="hero-content">
                <h1>COMBAT G</h1>
                <h3>Modern Combat Game Template For Action Games</h3>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text.
                </p>
            </div>

            <div className='who'>
                <form className='box' onSubmit={so}>
                    <img src='img2.jpg' alt='sorry'/>
                    <h3 style={{fontfamily: "-fantasy"}}>LOGIN</h3>
                    
                    <input className='input' type="text" placeholder="Enter Your Name" required />
                    <input className='input' type="password" placeholder="Password" required />
 
                    <button className='button' type="Submit"> Submit </button>
                </form>
            </div>
        </section>
    )
}

export default Login
