import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import date from '../../../utils/date';
import './NewFeeds.scss'

export const NewFeed = () => {
    
    const [feeds,setFeeds] = useState([])
    const fetchFeed = async () =>{
      try {
        const res = await axios.get(
          'https://test-sp-hit.herokuapp.com/api/v1/news'
        );
        setFeeds(res.data.data);
      }catch(err){
        console.log(err);
      }
    }

    useEffect(()=>{
      fetchFeed();
    },[]);

  return (
    <div className='newfeed'>
        <div className="newfeed_head">
            <h1>TRANG CHỦ </h1>
            <h1 className='font-medium'>/ TIN TỨC</h1>
        </div>
        <div className="newfeed_main grid grid-cols-12">
            <div className="newfeed_main_feed col-span-9">
                {
                  feeds ? (
                    feeds.map((item,index) => {
                      return(
                          <Link key={index} to={`/news/${item.slug}`}>
                              <div className='feeds grid grid-cols-12'>
                                  <div className="feeds_image col-span-4">
                                      <img src={item.images[1].imageUrl} alt="" />
                                  </div>
                                  <div className="feeds_infor col-span-8">
                                      <h1 className='feeds_infor_title'>{item.title}</h1>
                                      <h2 className='feeds_infor_date'> {date(item.createdDate)}</h2>
                                      <h2 className='feeds_infor_content'>{item.description}</h2>
                                  </div>
                              </div>
                          </Link>
                      )
                    })
                  ) : (
                    <h1> Loading....</h1>
                  )
                    
                }

            </div>
            <div className="newfeed_main_right col-span-3">
                <div className="newfeed_main_right_search">
                    <input type="text" placeholder='Tìm kiếm'>

                    </input>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="newfeed_main_right_bonus">
                    <div className="newfeed_main_right_bonus_title">
                        <h2>BÀI VIẾT MỚI</h2>
                        <div className="border-bottom">

                        </div>
                    </div>
                    {
                      feeds? (
                        feeds.map((item,index)=>{
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
                    
                    <div className="newfeed_main_right_bonus_title">
                        <h2>PHẢN HỒI GẦN ĐÂY</h2>
                        <div className="border-bottom">

                        </div>
                    </div>
                    <div className="newfeed_main_right_bonus_title">
                        <h2>CHUYÊN MỤC</h2>
                        <div className="border-bottom">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}