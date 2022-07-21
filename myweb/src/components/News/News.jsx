import React from "react";
import { Link } from "react-router-dom";
import "./news.scss";

const News = () => {
  const listNews = [
    {
      id: 1,
      src: "https://giaygiare.vn/upload/images/giai-ma-cac-thuat-ngu-thuong-dung-trong-cong-dong-giay-sneaker-2.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 2,
      src: "https://onoff.vn/blog/wp-content/uploads/2018/11/gi%C3%A0y-c%C3%B3-thi%E1%BA%BFt-k%E1%BA%BF-h%C3%ACnh-kh%E1%BB%91i.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 3,
      src: "https://image-us.24h.com.vn/upload/2-2021/images/2021-04-19/9-1618807030-341-width960height580.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 4,
      src: "https://bizweb.dktcdn.net/100/020/315/themes/756968/assets/banner_2.png?1645521760170",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 5,
      src: "https://mcdn.coolmate.me/image/September2021/giay-sneaker_28.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 6,
      src: "https://static2.yan.vn/YanNews/2167221/201803/8-thuong-hieu-street-style-co-tam-anh-huong-nhat-voi-gioi-tre-4dfa804d.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
  ];

  const lengthNew = listNews.length;

  return (
    <div className="container-content">
      <h1 className="title-content"># Tin tức mới</h1>
      <p className="desc-title">
        Nơi cập nhật những xu hướng thời trang mới nhất hiện nay
      </p>
      <div className="news-list grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-20">
        <>
          <div className="col-span-1 md:col-span-1 sm:col-span-1">
            <Link to="/:new" className="item-news">
              <img
                className="img-left"
                src={listNews[lengthNew - 1].src}
                alt=""
              />
              <p className="title-news">{listNews[lengthNew - 1].title}</p>
              <p className="date-post">{listNews[lengthNew - 1].date}</p>
              <p className="content-news">{listNews[lengthNew - 1].content}</p>
            </Link>
          </div>
          <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 grid grid-cols-2 grid-rows-2 lg:gap-20 md:gap-0 sm:gap-0">
            {listNews.map((item, index) => {
              if (index >= lengthNew - 5 && index < lengthNew - 1) {
                return (
                  <Link
                    to="/:new"
                    key={index}
                    className="item-news item-news__right lg:col-span-1 md:col-span-2 sm:col-span-2 row-span-1"
                  >
                    <img
                      className="img-news img-news__right"
                      src={item.src}
                      alt=""
                    />
                    <div className="container-content__news">
                      <p className="title-news title-news__right">
                        {item.title}
                      </p>
                      <p className="date-post date-post__right">{item.date}</p>
                    </div>
                  </Link>
                );
              }
            })}
          </div>
        </>
      </div>
    </div>
  );
};

export default News;
