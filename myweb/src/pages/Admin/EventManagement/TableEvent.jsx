import axios from 'axios'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react'
import { useState } from 'react'
import "./TableEvent.scss"
import date from '../../../utils/date';
const TableEvent = () => {
  const [events,setEvents]  = useState([])
  const fetchVouchers = async () =>{
    try{
      const res = await axios.get(
        `https://test-sp-hit.herokuapp.com/api/v1/news`
      );
      setEvents(res.data.data);
    } catch(err){
      console.log(err);
    }
  };

  useEffect( () => {
    fetchVouchers();
  },[]);

  const handleChangeEvent = () =>{
    alert("Bạn muốn thay đổi thông tin voucher")
  }
  const handleDeleteEvent = () =>{
    alert("delete voucher !")
  }

  return (
    <div className="table-events">
      <table>
        <thead>
          <tr>
            <th>Mã tin tức</th>
            <th>Tên tin tức</th>
            <th>Thời gian</th>
            <th>Mô tả</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {events.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{date(item.createdDate)}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={handleChangeEvent}>Sửa</button>
                <button onClick={handleDeleteEvent}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer-page">
        <button>Thêm mới</button>
        <ul className="move-page">
          <FontAwesomeIcon icon={faAngleLeft} />
          <li>
            <a href="">1</a>
          </li>
          <li>
            <a href="">2</a>
          </li>
          <li>
            <a href="">3</a>
          </li>
          <li>
            <a href="">4</a>
          </li>
          <li>
            <a href="">5</a>
          </li>
          <li>
            <a href="">6</a>
          </li>
          <li>
            <a href="">...</a>
          </li>
          <FontAwesomeIcon icon={faAngleRight} />
        </ul>
      </div>
    </div>
  )
}

export default TableEvent