import React from 'react'

const InforNews = ({newFeeds}) => {
  return (
    <div className="infor_left col-span-9">
        <div className="infor_left_name">
            <h1>TIN TỨC</h1>
        </div>
        <div className="infor_left_title">
            {newFeeds.title}
        </div>
        <div className="infor_left_date">
            {newFeeds.currentDate}
        </div>
        <div className="infor_left_image">
            <img src={newFeeds.images[1].imageUrl} alt="" />
        </div>
        <div className="infor_left_content">
            <p>{newFeeds.description}</p>
        </div>
    </div>
  )
}

export default InforNews