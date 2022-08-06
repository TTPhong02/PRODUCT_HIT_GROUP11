import React from 'react'
import { Link } from 'react-router-dom'
import "./FindProduct.scss"

const FindProduct = (product) => {
    const data = product.product
  return (
    <div className="list">
        {
            data ? (
                data.map((item,key) =>
                    <Link key={key} to={`/products/${item.slug}`} className={"list_content"}>
                        <div className="list_content_image">
                            <img src={item.images[0].imageUrl} alt="" />
                        </div>
                        <div className="list_content_name">
                            <h2>{item.title}</h2>
                        </div>
                    </Link>
                )
            ):(
                ""
            )
        }
    </div>
  )
}

export default FindProduct