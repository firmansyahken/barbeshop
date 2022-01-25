import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'

const Navbar = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem('auth_token')

    const [active, setActive] = useState(false)

    const handleActive = () => setActive(!active)
    
    const handleLogout = () => {
        localStorage.removeItem("auth_token")
        localStorage.removeItem("id_user")
        navigate("/login")
    }

    const handleChange = e => {
        if (e.keyCode === 13) {
            const keyword = e.target.value
            navigate('/products/search/' + keyword)
        }
    }

    return (
        <>
            <div className='navbar'>
                <div className='navbar_content'>
                    <div className='nav'>
                        <Link to='/'>Home</Link>
                        <Link to='/products'>Products</Link>
                        {auth ? <a onClick={() => handleLogout()}>Logout</a> : <Link to='/login'>Login</Link>}
                    </div>
                    <div className='brand'>
                        <h2>Barbeshop</h2>
                    </div>
                    <div className='search'>
                        <input className='input_search' onKeyUp={(e) => handleChange(e)} placeholder='Cari Product...' />
                    </div>
                </div>
            </div>
            <div className='navbar_mobile'>
                <div className='brand'>
                    <h2>Barbeshop</h2>
                </div>
                <div className='action'>
                    <input className='input_search' onKeyUp={(e) => handleChange(e)} placeholder='Cari Product...' />
                    <i className={active ? 'fa fa-times' :'fa fa-bars'} onClick={handleActive}></i>
                </div>
            </div>

            <div class={active ? "nav_mobile active" :"nav_mobile"}>
                <div class="nav_main">
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    {auth ? <a onClick={() => handleLogout()}>Logout</a> : <Link to='/login'>Login</Link>}
                </div>
            </div>

        </>
    )
};

export default Navbar;
