import React, { useState } from "react"
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState("Home");

    return(
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link style={{ textDecoration: 'none'}} to='/'>Home</Link>{menu==="home"?<hr />:<></>} </li>
                <li onClick={()=>{setMenu("products")}}><Link style={{ textDecoration: 'none'}} to='/products'>Products</Link>{menu==="products"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("aboutus")}}><Link style={{ textDecoration: 'none'}} to='/aboutus'>About Us</Link>{menu==="aboutus"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link style={{ textDecoration: 'none'}} to='/contact'>Contact</Link>{menu==="contact"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>


        </div>
    )

}

export default Navbar