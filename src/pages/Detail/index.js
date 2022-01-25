import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./index.css";

const Detail = () => {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id;

  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    fetch("https://barbeshop-api.herokuapp.com/api/products/" + id)
      .then((r) => r.json())
      .then(function (response) {
        const data = response.data[0];
        setProduct(data);
      });
  }, [id]);

  const handlePlus = () => {
    let i = qty + 1
    if(i > 3) return setQty(3)
    setQty(i)
  }

  const handleSub = () => {
    let i = qty - 1
    if(i < 1) return setQty(1)
    setQty(i)
  }

  const dataCheckout = {
    "id_product": product.id,
    "name": product.name,
    "qty": qty,
    "total": qty * product.price 
  }

  const handleSubmit = () => {
    navigate('/products/checkout',{state:dataCheckout});
  }

  return (
    <>
      <div className="container">
        <div className="detail">
          <div className="detail_image">
            <img
              src={`https://barbeshop-api.herokuapp.com/storage/${product.photo}`}
              alt="thumb"
            />
          </div>
          <div className="detail_content">
            <h1>{product.name}</h1>
            <h2>Rp. {product.price}</h2>
            <p>{product.desc}</p>
            <div className="detail_action">
              <div className="qty">
                <button onClick={() => handleSub()}>-</button>
                <input type='number' value={qty} />
                <button onClick={() => handlePlus()}>+</button>
              </div>
              <button className="buy_button" onClick={() => handleSubmit()}>Beli</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
