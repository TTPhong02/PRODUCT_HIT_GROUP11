import React from 'react'
import { Link } from 'react-router-dom';
import News from '../../components/News/News'
import './NewFeed.scss'
export const NewFeed = () => {
    const listNews = [
        {
          id: 1,
          src: "https://vcdn1-dulich.vnecdn.net/2020/11/12/Trang-An-4-1605172551.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=4ULwimiHp4CYfeY21RKxCQ",
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
  return (
    <div className='newfeed'>
        <div className="newfeed_head">
            <h1>TRANG CHỦ </h1>
            <h1 className='font-medium'>/ TIN TỨC</h1>
        </div>
        <div className="newfeed_main grid grid-cols-12">
            <div className="newfeed_main_feed col-span-9">
                {
                    listNews.map((item,index)=>{
                        return(
                            <Link key={index} to='/'>
                                <div className='feeds grid grid-cols-12'>
                                    <div className="feeds_image col-span-4">
                                        <img src={item.src} alt="" />
                                    </div>
                                    <div className="feeds_infor col-span-8">
                                        <h1 className='feeds_infor_title'>{item.title}</h1>
                                        <h2 className='feeds_infor_date'>{item.date}</h2>
                                        <h2 className='feeds_infor_content'>{item.content}</h2>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
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
                    <p className='newfeed_main_right_bonus_title_infor'>
                        Giới trẻ Viêt rộ mốt đi dép cá rô phi
                    </p>
                    <p className='newfeed_main_right_bonus_title_infor'>
                        Giới trẻ Viêt rộ mốt đi dép cá rô phi
                    </p>
                    <p className='newfeed_main_right_bonus_title_infor'>
                        Giới trẻ Viêt rộ mốt đi dép cá rô phi
                    </p>
                    <p className='newfeed_main_right_bonus_title_infor'>
                        Giới trẻ Viêt rộ mốt đi dép cá rô phi
                    </p>
                    <p className='newfeed_main_right_bonus_title_infor'>
                        Giới trẻ Viêt rộ mốt đi dép cá rô phi
                    </p>
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