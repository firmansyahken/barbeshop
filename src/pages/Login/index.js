import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../authentication.css'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const data = {
            "email": email,
            "password": password
        }

        fetch('https://barbeshop-api.herokuapp.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(r => r.json())
        .then(function(response) {
            const token = response.token
            const id = response.id
            const profile = response.detail

            if(token) {
                localStorage.setItem("auth_token", token)
                localStorage.setItem("id_user", id)
                localStorage.setItem("profile", JSON.stringify(profile))
                navigate("/")
            }
            setMessage(response.message)
        })
    }

  return (
      <>
        <div className='wrapper'>
            <form method='POST' onSubmit={(e) => handleLogin(e)}>
                <div className='form'>
                    <h2>Barbeshop</h2>
                    <p className='error'>{message }</p>
                    <div className='input'>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                    </div>
                    <div className='input'>
                        <input onChange={(e) => setPassword(e.target.value)} type="password" autoComplete='off' placeholder="password" />
                    </div>
                    <button>Login</button>
                </div>
                <div className='form_footer'>
                    <p>Tidak Mempunyai Akun ?</p>
                    <Link to='/register'>Daftar Disini</Link>
                </div>
            </form>
        </div>
      </>
  )
};

export default Login;
