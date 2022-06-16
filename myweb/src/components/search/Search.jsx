import React from 'react'
import './Search.scss'
const Search = () => {
  return (
    <div className="search">
        <div className='search_form'>
            <input type="text" placeholder='Tìm Kiếm' />
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    </div>
  )
}
export default Search
