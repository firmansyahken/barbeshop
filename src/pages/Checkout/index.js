import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./index.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const idUser = localStorage.getItem("id_user");
  const profile = JSON.parse(localStorage.getItem('profile'))
  const data = location.state;

  useEffect(() => {
    if (!location.state) {
      navigate("/");
    }
  }, []);

  const handleCheckout = () => {
    const dataCheckout = {
      "user_id": idUser,
      "product_id": data.id_product,
      "qty": data.qty,
      "total": data.total,
    };

    fetch("https://barbeshop-api.herokuapp.com/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+localStorage.getItem("auth_token")
      },
      body: JSON.stringify(dataCheckout),
    }).then((r) => r.json())
      .then(function (response) {
        if (response.message) {
          const session = idUser + "|" + new Date().getTime();
          sessionStorage.setItem("check_session", session);
          navigate("/success/"+session);
        } else {
          alert("Checkout Gagal")
        } 
      })
  };

  return (
    <>
      <div className="container">
        <div className="checkout">
          <div>
            <p>Nama Product</p>
          </div>
          <div>
            <p>{data.name}</p>
          </div>
          <div>
            <p>Jumlah</p>
          </div>
          <div>
            <p>{data.qty}</p>
          </div>
          <div>
            <p>total</p>
          </div>
          <div>
            <p>{data.total}</p>
          </div>
          <div>
            <p>Alamat</p>
          </div>
          <div>
            <p>{profile.address}</p>
          </div>
          <div>
            <p>Kode Pos</p>
          </div>
          <div>
            <p>{profile.zipcode}</p>
          </div>
          <div>
            <p>Metode Pembayaran</p>
          </div>
          <div>
            <p>COD</p>
          </div>
          <div>
            <p>Metode Pengiriman</p>
          </div>
          <div>
            <p>J&T</p>
          </div>
          <button className="checkout_button" onClick={() => handleCheckout()}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
