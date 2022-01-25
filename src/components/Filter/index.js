import React, { useEffect, useState } from 'react';
import './index.css'

const Filter = (props) => {
    const [categories, setCategories] = useState([])
    
    useEffect(() => {
        fetch('https://barbeshop-api.herokuapp.com/api/categories').then(r => r.json())
        .then(function(response) {
            const data = response.data
            setCategories(data)
        })
    }, [])
    
    return (
      <select className='select' onChange={(e) => props.onChangeCategory(e.target.value) }>
          { categories.map(category => {
              return <option key={category.id} value={category.id}>{category.name}</option>
          }) }
      </select>
  )
};

export default Filter;
