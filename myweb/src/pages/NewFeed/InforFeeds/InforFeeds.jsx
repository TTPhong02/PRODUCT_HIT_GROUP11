import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import date from '../../../utils/date'
import './InforFeeds.scss'

const InforFeeds = () => {
  
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
                      feed? (
                        feed.map((item,index)=>{
                          return(
                            <Link key={index} to={`/news/${item.slug}`}>
                              <p className='newfeed_main_right_bonus_title_infor'>
                              {item.title}
                              </p>
                            </Link>
                          )
                        })

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