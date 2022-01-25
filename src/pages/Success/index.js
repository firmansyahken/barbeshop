import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './index.css'

const Success = () => {
    const navigate = useNavigate()
    const params = useParams()
    const id = params.id
    const sessionCheck = sessionStorage.getItem('check_session')
    useEffect(() => {
        if(sessionCheck !== id) {
            navigate('/')    
        }
    }, [id])
  return (
      <>
        <div className='success_page'>
            <h1>Permintaan COD Sedang Diproses</h1>
            <p>Terimakasih Sudah Berbelanja</p>
            <Link to='/'>Kembali</Link>
        </div>
      </>
  )
};

export default Success;
