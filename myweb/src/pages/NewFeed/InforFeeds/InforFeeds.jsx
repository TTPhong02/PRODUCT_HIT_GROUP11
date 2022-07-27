import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import date from '../../../utils/date'
import './InforFeeds.scss'

const InforFeeds = () => {
  const fake =[
    {
      id: 1,
      createdDate: "2022-07-22T08:31:28.836+00:00",
      updatedDate: "2022-07-22T08:31:28.836+00:00",
      activeFlag: true,
      deleteFlag: false,
      title: "BE CLASSY CHÍNH THỨC RA MẮT THE FLEX COLLECTION",
      description: "The Flex Collection là BST dòng Loafer đế da được Be Classy chính thức ra mắt vào ngày 02/07 vừa qua. Mang thiết kế và chất liệu khác biệt, The Flex Collection sẽ mang lại cho bạn một vẻ ngoài không thể rời mắt. ",
      slug: "be-classy-chinh-thuc-ra-mat-the-flex-collection",
      images : [
        {
          id: 1 ,
          imageUrl: "https://res.cloudinary.com/vitvn183/image/upload/v1658478687/gzisqemm2jty7lgu1cwu.jpg"
        },
        {
          id: 2 ,
          imageUrl: "https://res.cloudinary.com/vitvn183/image/upload/v1658478687/gzisqemm2jty7lgu1cwu.jpg"
        }
      ]
    },
    {
      id: 2,
      createdDate: "2022-07-22T08:31:28.836+00:00",
      updatedDate: "2022-07-22T08:31:28.836+00:00",
      activeFlag: true,
      deleteFlag: false,
      title: "BE CLASSY CHÍNH THỨC RA MẮT THE FLEX COLLECTION",
      description: "The Flex Collection là BST dòng Loafer đế da được Be Classy chính thức ra mắt vào ngày 02/07 vừa qua. Mang thiết kế và chất liệu khác biệt, The Flex Collection sẽ mang lại cho bạn một vẻ ngoài không thể rời mắt. ",
      slug: "be-classy-chinh-thuc-ra-mat-the-flex-collection-1",
      images : [
        {
          id: 1 ,
          imageUrl: "https://res.cloudinary.com/vitvn183/image/upload/v1658478687/gzisqemm2jty7lgu1cwu.jpg"
        },
        {
          id: 2 ,
          imageUrl: "https://res.cloudinary.com/vitvn183/image/upload/v1658478687/gzisqemm2jty7lgu1cwu.jpg"
        }
      ]
    },
    {
      id: 3,
      createdDate: "2022-07-22T08:31:28.836+00:00",
      updatedDate: "2022-07-22T08:31:28.836+00:00",
      activeFlag: true,
      deleteFlag: false,
      title: "BE CLASSY CHÍNH THỨC RA MẮT THE FLEX COLLECTION",
      description: "The Flex Collection là BST dòng Loafer đế da được Be Classy chính thức ra mắt vào ngày 02/07 vừa qua. Mang thiết kế và chất liệu khác biệt, The Flex Collection sẽ mang lại cho bạn một vẻ ngoài không thể rời mắt. ",
      slug: "be-classy-chinh-thuc-ra-mat-the-flex-collection-2",
      images : [
        {
          id: 1 ,
          imageUrl: "https://res.cloudinary.com/vitvn183/image/upload/v1658478687/gzisqemm2jty7lgu1cwu.jpg"
        },
        {
          id: 2 ,
          imageUrl: "https://res.cloudinary.com/vitvn183/image/upload/v1658478687/gzisqemm2jty7lgu1cwu.jpg"
        }
      ]
    }
  ]
  const [feed,setFeed] = useState([])
  const fetchFeed = async () =>{
    try {
      const res = await axios.get(
        'https://test-sp-hit.herokuapp.com/api/v1/news'
      );
      setFeed(res.data.data);

    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchFeed();
  },[]);


  const getNewFeedBySlug = (slug) => feed.find((e)=> e.slug === slug)
  let param = useParams();
  const newFeeds = getNewFeedBySlug(param.slug)

  return (
    <div className="infor grid grid-cols-12">
      {
        newFeeds ? (
            <>
              <div className="infor_left col-span-9">
                <div className="infor_left_name">
                  <h1>TIN TỨC</h1>
                </div>
                <div className="infor_left_title"> 
                  {newFeeds.title}
                </div>
                <div className="infor_left_date">
                  Post on {date(newFeeds.createdDate)}
                </div>
                <div className="infor_left_image">
                  <img src={newFeeds.images[1].imageUrl} alt="" />
                </div>
                <div className="infor_left_content">
                  <p>{newFeeds.description}</p>
                </div>
              </div>
              <div className="infor_right col-span-3">
                <div className="infor_right_search">
                    <input type="text" placeholder='Tìm kiếm'>

                    </input>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="infor_right_bonus">
                    <div className="newfeed_main_right_bonus_title">
                        <h2>BÀI VIẾT MỚI</h2>
                        <div className="border-bottom"></div>
                    </div>
                    {
                      feed?(
                          <Link to={`/news/${feed.slug}`}>
                            <p className='infor_right_bonus_title_main'>
                            {feed.title}
                            </p>
                          </Link>
                      ):(
                        <h1>Loading...</h1>
                      )
                    }
                    <div className="infor_right_bonus_title">
                        <h2>PHẢN HỒI GẦN ĐÂY</h2>
                        <div className="border-bottom">

                        </div>
                    </div>
                    <div className="infor_right_bonus_title">
                        <h2>CHUYÊN MỤC</h2>
                        <div className="border-bottom">

                        </div>
                    </div>
                </div>
              </div>
            </>

        ) : (
          <h1>Loading.....</h1>
        )
      }
    </div>
  )
}

export default InforFeeds