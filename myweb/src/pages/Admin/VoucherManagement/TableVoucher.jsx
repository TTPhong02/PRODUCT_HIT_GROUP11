import axios from 'axios'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from 'react'
import { useState } from 'react'
import "./TableVoucher.scss"
import date from "../../../utils/date"
const TableVoucher = () => {
  const [vouchers,setVouchers]  = useState([])
  const fetchVouchers = async () =>{
    try{
      const res = await axios.get(
        `https://test-sp-hit.herokuapp.com/api/v1/vouchers`
      );
        console.log(res);
      setVouchers(res.data);
    } catch(err){
      console.log(err);
    }
  };

  useEffect( () => {
    fetchVouchers();
  },[]);

  const handleChangeVoucher = () =>{
    alert("Bạn muốn thay đổi thông tin voucher")
  }
  const handleDeleteVoucher = () =>{
    alert("delete voucher !")
  }

  return (
    <div className="table-vouchers">
      <table>
        <thead>
          <tr>
            <th>Mã Voucher</th>
            <th>Tên Voucher</th>
            <th>Khuyến Mãi</th>
            <th>HSD</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {vouchers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.description}</td>
              <td className='text-rose-600'>{item.percent}%</td>
              <td>{date(item.expirationTime)}</td>
              <td>
                <button onClick={handleChangeVoucher}>Sửa</button>
                <button onClick={handleDeleteVoucher}>Xóa</button>
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

export default TableVoucher