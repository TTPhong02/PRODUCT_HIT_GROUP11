import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./news.scss";
import date from "../../utils/date";

const News = () => {
  const [feeds, setFeeds] = useState([]);
  const fetchFeed = async () => {
    try {
      const res = await axios.get(
        "https://test-sp-hit.herokuapp.com/api/v1/news"
      );
      setFeeds(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  return (
    <div className="container-content">
      <h1 className="title-content"># Tin tức mới</h1>
      <p className="desc-title">
        Nơi cập nhật những xu hướng thời trang mới nhất hiện nay
      </p>
      {/* <div className="news-list grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-20">
        <>
          <div className="col-span-1 md:col-span-1 sm:col-span-1">
            {
              feeds ? (
                <Link to="/:new" className="item-news">
                  <img
                    className="img-left"
                    src={feeds.images[0].imageUrl}
                    alt=""
                  />
                  <p className="title-news">{feeds.title}</p>
                  <p className="date-post">{date(feeds.createdDate)}</p>
                  <p className="content-news">{feeds.description}</p>
                </Link>
              ):("Loading")
            }
          </div>
          <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 grid grid-cols-2 grid-rows-2 lg:gap-20 md:gap-0 sm:gap-0">
            {feeds ?(
              
              feeds.map((item,index) => {
                if (item.id >= 1 && item.id <= 5) {
                  return (
                    <Link
                      to={`/news/${item.slug}`}
                      key={index}
                      className="item-news item-news__right lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1"
                    >
                      <img
                        className="img-news img-news__right"
                        src={item.images[1].imageUrl}
                        alt=""
                      />
                      <div className="container-content__news">
                        <p className="title-news title-news__right">
                          {item.title}
                        </p>
                        <p className="date-post date-post__right">
                          {date(item.createdDate)}
                        </p>
                      </div>
                    </Link>
                  );
                }
              })
            ):("Loading")
            }
          </div>
        </>
      </div> */}
    </div>
  );
};

export default News;
