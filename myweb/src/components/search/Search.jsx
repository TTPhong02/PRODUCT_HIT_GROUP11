import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import FindProduct from '../FindProduct/FindProduct'
import './Search.scss'
const Search = () => {
  
  const [product,setProduct] = useState()

  const [key,setKey] = useState()

  const SearchProduct = async()=>{
    try {
      const res = await axios.post(`https://test-sp-hit.herokuapp.com/api/v1/products/search?key=${key}`)
      setProduct(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="search">
        <div className='search_form'>
            <input type="text" placeholder='Tìm Kiếm' onChange={(e) => setKey(e.target.value)} />
            <button>
                <i className="fa-solid fa-magnifying-glass" onClick={ ()=> SearchProduct()}></i>
            </button>
        </div>
        <div className="search_content">
          <FindProduct product={product}/>
        </div>
    </div>
  )
}
export default Search
