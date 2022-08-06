import React from 'react'
import { Link } from 'react-router-dom'
import "./FindNews.scss"

const FindNews = (news) => {

    const newsList = news.news
  return (
    <div className="list">
        {
            newsList ? (
                newsList.map((item,key) =>
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

export default FindNews