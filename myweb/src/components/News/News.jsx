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
        "https://test-sp-hit.herokuapp.com/api/v1/news?limit=5"
      );
      setFeeds(res.data.data);
      console.log(res.data.data.length);
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
      <div className="news-list grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-20">
        <>
          <div className="col-span-1 md:col-span-1 sm:col-span-1">
            {feeds.length > 1 ? (
              <Link to={`/news/${feeds[0].slug}`} className="item-news">
                <img
                  className="img-left"
                  src={feeds[0].images[0].imageUrl}
                  alt=""
                />
                <p className="title-news">{feeds[0].title}</p>
                <p className="date-post">{date(feeds[0].createdDate)}</p>
                <p className="content-news">{feeds[0].description}</p>
              </Link>
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
          <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 grid grid-cols-2 grid-rows-2 lg:gap-20 md:gap-0 sm:gap-0">
            {feeds.length > 1 ? (
              feeds.map((item) => {
                if (item.id !== 0) {
                  return (
                    <Link
                      to={`/news/${item.slug}`}
                      key={item.id}
                      className="item-news item-news__right lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1"
                    >
                      <img
                        className="img-news img-news__right"
                        src={item.images[0].imageUrl}
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
            ) : (
              <h1>Loading...</h1>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default News;
