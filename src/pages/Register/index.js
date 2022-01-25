import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../authentication.css";

const Register = () => {
  const navigate = useNavigate()
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    zipcode: '',
  })

  const [errors, setErrors] = useState([])

  const handleInput = e => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()

    fetch('https://barbeshop-api.herokuapp.com/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(register)
    }).then(r => r.json())
      .then(function (response) {
        const message = response.message
        if (message == "Registration Success") {
          navigate('/login')
        } else {
          setErrors(response.data)
        }
      })

  }

  return (
    <>
      <Link to='/' className="back"> <i className="fa fa-arrow-left"></i> Kembali Keberanda</Link>
      <div className="wrapper">
        <form method="POST" onSubmit={(e) => handleSubmit(e)}>
          <div className="form">
            <h2>Daftar Barbeshop</h2>
            <div className="input">
              <input name="name" placeholder="Nama Lengkap" onChange={handleInput} />
              <span className="validation">{errors.name}</span>
            </div>
            <div className="input">
              <input name="email" type="email" placeholder="Email" onChange={handleInput} />
              <span className="validation">{errors.email}</span>
            </div>
            <div className="input">
              <input name="password" type="password" autoComplete="off" placeholder="Password" onChange={handleInput} />
              <span className="validation">{errors.password}</span>
            </div>
            <div className="input">
              <input name="address" placeholder="Alamat Lengkap" onChange={handleInput} />
              <span className="validation">{errors.address}</span>
            </div>
            <div className="input">
              <input name="zipcode" placeholder="Kode Pos" onChange={handleInput} />
              <span className="validation">{errors.zipcode}</span>
            </div>
            <button>Register</button>
          </div>
          <div className="form_footer">
            <p>Sudah Mempunyai Akun ?</p>
            <Link to="/login">Login Disini</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
