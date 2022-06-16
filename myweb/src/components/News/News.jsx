import React from "react";
import "./news.scss";

const News = () => {
  const listNews = [
    {
      id: 1,
      src: "http://pngimg.com/uploads/nike/nike_PNG18.pngg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 2,
      src: "https://vcdn1-dulich.vnecdn.net/2020/11/12/Trang-An-4-1605172551.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=4ULwimiHp4CYfeY21RKxCQ",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 3,
      src: "https://btnmt.1cdn.vn/2021/08/26/a1-1-.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 4,
      src: "https://photo-cms-baophapluat.zadn.vn/w800/Uploaded/2022/zsgkqzektazs/2022_01_18/du-lich-trang-an-ninh-binh-4257.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 5,
      src: "https://cungphuot.info/wp-content/uploads/2016/07/kinh-nghiem-du-lich-trang-an.jpg",
      title: 'Giới trẻ Việt rầm rộ môt giày "rách" mới lạ',
      content:
        "Bước sang thế kỷ XXI, kết thúc những năm tháng chiến đấu đầy đau thương, Việt Nam ta chính thức bước sang một kỷ nguyên mới, kỷ nguyên của độc lập dân tộc và đổi mới đất nước. Nếu khi xưa toàn dân một lòng kháng chiến, hôm nay nhân dân ta tại cùng chung tay dựng đất nước phát triển theo định hướng công nghiệp hóa hiện đại hóa đất nước. Hồ Chủ tịch đã căn dặn giới trẻ Việt Nam",
      date: "22 Tháng Năm, 2022",
    },
    {
      id: 6,
      src: "https://skycentral.vn/wp-content/uploads/2021/05/vai-tro-cua-thien-nhien-1.png",
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
            <div className="item-news">
              <img src={listNews[lengthNew - 1].src} alt="" />
              <p className="title-news">{listNews[lengthNew - 1].title}</p>
              <p className="date-post">{listNews[lengthNew - 1].date}</p>
              <p className="content-news">{listNews[lengthNew - 1].content}</p>
            </div>
          </div>
          <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 grid grid-cols-2 grid-rows-2 lg:gap-20 md:gap-0 sm:gap-0">
            {listNews.map((item, index) => {
              if (index >= lengthNew - 5 && index < lengthNew - 1) {
                return (
                  <div
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
                  </div>
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
